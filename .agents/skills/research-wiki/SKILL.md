---
name: research-wiki
description: Use and maintain the Solaris research wiki when extracting source-backed claims, formulas, concepts, or implementation roots for Islamic astronomy/timekeeping work.
---

# Research Wiki

Use this skill when work depends on research sources, formulas, scholarly-method notes, validation datasets, or the provenance of a calculation.

The Solaris research wiki is a curated assertion cache, not a replacement for primary sources. Its job is to stop agents from repeatedly crawling the same papers and links, while preserving a path back to the original material.

## Where Things Live

- `knowledge/README.md`: schema and operating rules.
- `knowledge/index.md`: top-level catalog of source notes, concept pages, and assertions.
- `knowledge/log.md`: newest-first change log for research-wiki updates.
- `knowledge/references/`: source notes and bibliographic records.
- `knowledge/concepts/`: owned explanations of concepts such as equation of time, Fajr twilight angle, or Asr shadow ratio.
- `knowledge/assertions/`: source-backed claims, formulas, limits, and implementation notes.

## Before Research or Implementation

1. Read `knowledge/index.md`.
2. Search `knowledge/assertions/` and `knowledge/concepts/` for relevant terms before going back to the web or a PDF.
3. If an assertion is relevant but incomplete, check its source note and then the original source.
4. If no useful wiki entry exists, use the source matrix in `docs/source-matrix.md` to locate candidate sources.

## When Adding Research

Add the smallest durable unit that future work will need:

- Add a source note in `knowledge/references/` for bibliographic metadata and source-level limitations.
- Add or update a concept page in `knowledge/concepts/` when the idea needs reusable explanation.
- Add an assertion page in `knowledge/assertions/` when a specific claim, formula, or modelling rule may later affect code.
- Update `knowledge/index.md` and `knowledge/log.md`.

For substantial research changes, also update `.agents/skills/timeline/state.md`, `.agents/skills/timeline/next.md`, or `.agents/skills/timeline/events.md` if project state changed.

## Assertion Rules

Assertions should be precise enough to connect research to implementation.

Each assertion should identify:

- The claim or formula.
- Source note IDs.
- Page, section, equation, or URL locators where possible.
- Assumptions and limits.
- Affected concepts.
- Potential implementation targets.
- Whether Islamic scholarly review is needed.

Do not present wiki assertions as stronger than their sources. If a claim is uncertain, contested, approximate, institution-specific, or awaiting scholarly review, say so directly.

## What Not To Do

- Do not paste full copyrighted papers or large third-party excerpts into the repo.
- Do not treat a wiki page as verification unless it records who verified it and against what.
- Do not collapse prayer-entry times, published timetable times, and congregation times into one concept.
- Do not claim scholarly approval before review has happened.
- Do not add broad category folders until there are enough pages to justify them.

## Useful Reference

Read `knowledge/README.md` before changing the wiki schema or creating a new class of page.
