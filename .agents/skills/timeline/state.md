# Current Project State

Last updated: 2026-10-05

## Repository State

The repository currently contains the original small Express/TypeScript prototype:

- `app.js`: Express API entrypoint.
- `utils/salahUtils.ts`: early prayer-time calculation prototype.
- `utils/timezoneUtils.ts`: timezone formatting helper.
- `utils/quranUtils.ts`: Quran lookup helper.
- `data/`: Quran text, translations, and transliteration data.
- `README.md`: original API-oriented README.

The current code is not the desired long-term architecture. It should be treated as disposable prototype code unless the user explicitly asks to salvage specific parts.

## Planning State

Initial planning docs have been introduced:

- `docs/charter.md`
- `docs/whitepaper-outline.md`
- `docs/source-matrix.md`
- `docs/profile-model.md`
- `docs/validation-plan.md`
- `docs/decision-log.md`

The user wants planning and documentation to progress before a code rewrite.

## Current Product Vision

Solaris is intended to become a one-stop Islamic astronomy/timekeeping project for:

- Prayer-time prediction.
- Islamic date prediction.
- Scholarly algorithmic modelling.
- Parametric profiles for sect, madhhab, offsets, corrections, assumptions, and institutional conventions.
- Research-backed validation and statistical offset analysis.
- JS library, R bindings, hosted API, and Docker deployment.

## Important Context

The project is not meant to be authoritative. It should not declare the correct religious time for worship or calendar decisions. It should expose assumptions, document uncertainty, and remain reviewable by qualified scholars.

The user is working with local shuyukh and eventually wants review under qualified scholars who can speak to the four canonical madhahib.

## Current Phase

Phase 0: Charter, scope, documentation structure, project memory, and research scaffolding.

No implementation rewrite should happen until the user explicitly approves it.
