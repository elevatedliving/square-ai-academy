#!/bin/bash
set -e

pnpm install --frozen-lockfile

if [ -n "$DATABASE_URL" ]; then
  pnpm --filter @workspace/db run push-force
else
  echo "[post-merge] DATABASE_URL not set — skipping DB push."
fi

pnpm --filter @workspace/scripts run sync-github
