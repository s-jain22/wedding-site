# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Static wedding information site for Sonali & Thomas (22–23 February 2027, Ridhi Resort, Jaipur). Plain HTML/CSS/JS, no build step. Deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Git: DO NOT commit or push unless explicitly asked

**You MUST NOT run `git commit` or `git push` (or any history-altering git command) unless the user EXPLICITLY asks you to in that message.**

- Do not commit "to be helpful," to checkpoint work, or as a side effect of another task.
- Editing files locally is fine. Turning those edits into commits is NOT — wait to be told.
- "Explicitly asked" means a direct instruction like "commit this" or "push to main." General approval of a code change is NOT permission to commit it.
- A push triggers a live deploy and permanently writes to GitHub history. We do not want to accidentally pollute the history or publish unfinished work.

When you think a commit/push is warranted, propose it and wait for the go-ahead.
