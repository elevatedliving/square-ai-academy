import { execSync } from "child_process";

const token = process.env.GITHUB_SYNC_TOKEN;
const repo = process.env.GITHUB_REPO;

if (!token || !repo) {
  console.log(
    "[sync-github] GITHUB_SYNC_TOKEN or GITHUB_REPO not set — skipping GitHub sync."
  );
  process.exit(0);
}

const remoteUrl = `https://x-access-token:${token}@github.com/${repo}.git`;
const remoteName = "github-sync";

function run(cmd: string, opts: { stdio?: "pipe" | "inherit" } = {}) {
  return execSync(cmd, { stdio: opts.stdio ?? "pipe" })
    .toString()
    .trim();
}

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

  console.log(`[sync-github] Pushing branch '${branch}' → github.com/${repo} (main)…`);
  execSync(`git push ${remoteName} ${branch}:main --force-with-lease`, {
    stdio: "inherit",
  });
  console.log("[sync-github] ✓ Pushed successfully.");
} catch (err) {
  console.error("[sync-github] ✗ Push failed:", err);
  process.exit(1);
} finally {
  try {
    run(`git remote remove ${remoteName}`);
  } catch {
    // best-effort cleanup
  }
}
