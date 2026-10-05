# Solaris Agent Timeline

This directory is mutable project memory for future agents working on Solaris.

It is not an executable plugin or runtime skill. It is a lightweight handoff system intended to reduce context loss across long-running sessions.

## Agent Instructions

Before substantive work:

1. Read this file.
2. Read `state.md`.
3. Read `next.md`.
4. Read `../../../docs/decision-log.md`.
5. Check `git status --short`.

During work:

- Do not overwrite user work.
- Keep implementation aligned with the charter and profile model.
- Distinguish planning, research, implementation, and validation tasks.
- Preserve the non-authority stance.
- Record meaningful decisions in `docs/decision-log.md`.

After meaningful work:

- Update `state.md` with what changed.
- Update `next.md` with the next practical steps.
- Add an entry to `events.md`.
- Add or update decision-log entries if a durable decision was made.

## Project Priorities

1. Build the documentation and research foundation.
2. Collate secular astronomical sources.
3. Map Islamic method questions for scholarly review.
4. Design transparent calculation profiles.
5. Replace the current prototype with a clean engine only after the planning layer is stable.

## Guardrails

- Do not present outputs as religiously authoritative.
- Do not hide method assumptions in formulas.
- Do not collapse mosque timetables, prayer-entry times, and congregation times into one concept.
- Do not infer civil timezone from longitude alone.
- Do not start implementation rewrites without explicit user approval.
