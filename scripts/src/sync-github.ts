import { execSync } from "child_process";
import { request } from "https";

const token = process.env.GITHUB_SYNC_TOKEN;
const repo = process.env.GITHUB_REPO;

if (!token || !repo) {
  console.log(
    "[sync-github] GITHUB_SYNC_TOKEN or GITHUB_REPO not set — skipping GitHub sync."
  );
  process.exit(0);
}

// Re-assign as definite strings after the guard above so TypeScript narrows
// correctly across the async main() closure.
const syncToken: string = token;
const syncRepo: string = repo;

// Prefer fine-grained PATs scoped to the target repo (GitHub recommends these
// over classic tokens). A fine-grained PAT needs "Contents: Read and write"
// on the target repository.

function run(cmd: string, opts: { stdio?: "pipe" | "inherit" } = {}) {
  return execSync(cmd, { stdio: opts.stdio ?? "pipe" })
    .toString()
    .trim();
}

/**
 * Validate the token against the GitHub REST API before attempting a push.
 * Returns an error message if the token is invalid/expired, or null if OK.
 */
function validateToken(tok: string, repoPath: string): Promise<string | null> {
  return new Promise((resolve) => {
    const [owner, repoName] = repoPath.split("/");
    if (!owner || !repoName) {
      resolve(`GITHUB_REPO must be in "owner/repo" format, got: "${repoPath}"`);
      return;
    }

    const options = {
      hostname: "api.github.com",
      path: `/repos/${owner}/${repoName}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${tok}`,
        "User-Agent": "replit-sync-github/1.0",
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    };

    const req = request(options, (res) => {
      const { statusCode } = res;
      // Drain the body so the socket is released
      res.resume();
      if (statusCode === 200 || statusCode === 301) {
        resolve(null); // token is valid
      } else if (statusCode === 401) {
        resolve(
          "Token is invalid or expired (HTTP 401). " +
          "Please rotate GITHUB_SYNC_TOKEN. " +
          "Use a fine-grained PAT scoped to this repo with 'Contents: Read and write'."
        );
      } else if (statusCode === 403) {
        resolve(
          "Token lacks permission to access this repo (HTTP 403). " +
          "Check that GITHUB_SYNC_TOKEN has write access to " + repoPath + ". " +
          "Use a fine-grained PAT scoped to this repo with 'Contents: Read and write'."
        );
      } else if (statusCode === 404) {
        resolve(
          `Repository "${repoPath}" not found (HTTP 404). ` +
          "Verify GITHUB_REPO is correct and the token can access it."
        );
      } else {
        resolve(
          `GitHub API returned unexpected status ${statusCode} while validating token.`
        );
      }
    });

    req.on("error", (err) => {
      resolve(`GitHub API request failed: ${err.message}`);
    });

    req.end();
  });
}

/** Return true if the error output looks like an authentication failure. */
function isAuthError(output: string): boolean {
  const lower = output.toLowerCase();
  return (
    lower.includes("invalid username or password") ||
    lower.includes("authentication failed") ||
    lower.includes("http basic: access denied") ||
    lower.includes("remote: invalid username") ||
    lower.includes("could not read username") ||
    lower.includes("repository not found") ||
    // Git surfaces 401/403 from smart-HTTP as "The requested URL returned error"
    lower.includes("returned error: 401") ||
    lower.includes("returned error: 403")
  );
}

const remoteUrl = `https://x-access-token:${syncToken}@github.com/${syncRepo}.git`;
const remoteName = "github-sync";

async function main() {
  // --- Step 1: validate token before touching git ---
  console.log("[sync-github] Validating token against GitHub API…");
  const tokenError = await validateToken(syncToken, syncRepo);
  if (tokenError) {
    console.error(`[sync-github] ✗ Token validation failed: ${tokenError}`);
    process.exit(1);
  }
  console.log("[sync-github] ✓ Token is valid.");

  // --- Step 2: push ---
  try {
    const branch = run("git branch --show-current");
    if (!branch) {
      console.log("[sync-github] Detached HEAD — skipping push.");
      process.exit(0);
    }

    try {
      run(`git remote remove ${remoteName}`);
    } catch {
      // remote doesn't exist yet — that's fine
    }
    run(`git remote add ${remoteName} "${remoteUrl}"`);

    // Fetch the current remote state into a temporary tracking ref so that
    // --force-with-lease has an up-to-date picture of the remote. Without this
    // fetch, git uses stale remote-tracking refs and rejects the push with
    // "stale info" even when the push would be safe.
    const tmpRef = `refs/remotes/${remoteName}/main`;
    console.log("[sync-github] Fetching remote state…");
    try {
      run(`git fetch ${remoteName} main:${tmpRef} 2>&1`);
    } catch {
      // If the remote is empty (fresh repo) there is nothing to fetch — proceed.
    }

    console.log(
      `[sync-github] Pushing branch '${branch}' → github.com/${repo} (main)…`
    );

    let pushOutput = "";
    try {
      pushOutput = run(
        `git push ${remoteName} ${branch}:main --force-with-lease=main:${tmpRef} 2>&1`
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      const combined = pushOutput + "\n" + msg;
      if (isAuthError(combined)) {
        console.error(
          "[sync-github] ✗ Push failed due to authentication error.\n" +
          "  GITHUB_SYNC_TOKEN may have expired or been revoked.\n" +
          "  Please rotate GITHUB_SYNC_TOKEN in Replit Secrets.\n" +
          "  Use a fine-grained PAT scoped to this repo with 'Contents: Read and write'."
        );
      } else {
        console.error("[sync-github] ✗ Push failed:", combined.trim());
      }
      process.exit(1);
    }

    console.log("[sync-github] ✓ Pushed successfully.");
  } finally {
    try {
      run(`git remote remove ${remoteName}`);
    } catch {
      // best-effort cleanup
    }
  }
}

main().catch((err) => {
  console.error("[sync-github] ✗ Unexpected error:", err);
  process.exit(1);
});
