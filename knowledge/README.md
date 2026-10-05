# Solaris Knowledge Base

This directory is a curated research wiki for Solaris. It stores source-backed notes, reusable concepts, and implementation-facing assertions for Islamic astronomy and timekeeping.

The goal is not to mirror every source. The goal is to cache the parts of sources that future agents and contributors need to recall when writing documentation, formulas, profiles, validation logic, or code.

## Operating Principle

Use this chain:

```text
original source
  -> source note
  -> concept page
  -> assertion page
  -> implementation or whitepaper reference
```

The original source remains authoritative. A wiki entry is a research aid and provenance map.

## Directory Structure

```text
knowledge/
  README.md
  index.md
  log.md
  references/
    index.md
  concepts/
    index.md
  assertions/
    index.md
```

Avoid pre-creating deep category trees. Add folders only when there are enough pages to make navigation meaningfully better.

## Page Types

### Source Note

Source notes live in `knowledge/references/`. They record bibliographic metadata, source scope, extracted takeaways, and limitations.

Use source notes for:

- Papers.
- Almanacs.
- Institutional method pages.
- Scholarly references.
- Standards.
- Datasets.
- Public timetable sources.

Do not store full copyrighted sources by default. Prefer metadata, short summaries, page/equation locators, and canonical URLs.

### Concept Page

Concept pages live in `knowledge/concepts/`. They explain reusable ideas owned by the project.

Examples:

- `equation-of-time.md`
- `solar-declination.md`
- `apparent-sunrise.md`
- `fajr-twilight-angle.md`
- `asr-shadow-ratio.md`
- `horizon-dip.md`
- `timezone-handling.md`

Concept pages may synthesize multiple sources, but claims should point back to source notes or assertion pages.

### Assertion Page

Assertion pages live in `knowledge/assertions/`. They are the most implementation-facing wiki unit.

Use an assertion page when a specific claim, formula, parameter, limitation, or modelling rule may influence code, profiles, validation, or the whitepaper.

Assertions should be narrow. Prefer several precise assertions over one sprawling page.

## Frontmatter

Use YAML frontmatter for non-index pages.

Required fields:

```yaml
---
type: Reference | Concept | Assertion
id: stable-kebab-or-dotted-id
title: Display Title
description: One-line summary
status: draft | reviewed | superseded | rejected
generated:
  by: codex
  at: YYYY-MM-DD
---
```

Optional fields:

```yaml
verified:
  by: human:name-or-agent
  at: YYYY-MM-DD
sources:
  - id: source-id
    locator: knowledge/references/source-page.md
tags: [solar, prayer, calendar, validation]
scholarly_review: not-needed | needed | pending | reviewed
```

Only add `verified` when someone actually checked the page against its source.

## Source Note Template

```md
---
type: Reference
id: noaa-solar-equations
title: NOAA Solar Calculation Equations
description: Source note for NOAA solar position and solar calculator equations.
status: draft
generated:
  by: codex
  at: YYYY-MM-DD
---

## Bibliographic Details

- Author / organization:
- Year:
- Canonical URL:
- Retrieved:

## Scope

- 

## Extracted Takeaways

- 

## Formulas / Locators

- 

## Assumptions

- 

## Limitations

- 

## Related Concepts

- 

## Related Assertions

- 
```

## Concept Page Template

```md
---
type: Concept
id: equation-of-time
title: Equation of Time
description: Difference between apparent solar time and mean solar time.
status: draft
generated:
  by: codex
  at: YYYY-MM-DD
---

## Summary


## Why It Matters


## Source-Backed Assertions

- 

## Implementation Notes


## Open Questions

```

## Assertion Page Template

````md
---
type: Assertion
id: solar.equation-of-time.noaa.001
title: NOAA Equation of Time Approximation
description: Implementation-facing assertion about NOAA's equation-of-time approximation.
status: draft
sources:
  - id: noaa-solar-equations
    locator: knowledge/references/noaa-solar-equations.md
tags: [solar, equation-of-time]
scholarly_review: not-needed
generated:
  by: codex
  at: YYYY-MM-DD
---

## Claim


## Source Locator

- Source:
- Page / section / equation:

## Formula

```text

```

## Assumptions

- 

## Limits

- 

## Implementation Impact

- 

## Review Needed

- Secular review:
- Islamic scholarly review:
````

## Indexing Rules

Update `knowledge/index.md` whenever adding, moving, renaming, or deprecating a page.

Update the nearest directory `index.md` when a directory grows beyond a few files.

## Log Rules

Update `knowledge/log.md` for meaningful changes:

```md
## YYYY-MM-DD

- **Creation**: Added source note for ...
- **Ingest**: Extracted assertion ...
- **Update**: Revised concept page ...
- **Deprecation**: Marked assertion ... as superseded by ...
```

Newest entries go first.

## Quality Rules

- Prefer primary sources over summaries.
- Separate source claims from project interpretation.
- Make uncertainty explicit.
- Record page, section, equation, or URL locators whenever possible.
- Do not claim religious authority.
- Do not claim scholarly review unless it actually occurred.
- Keep pages small enough that agents can read them cheaply.
- When in doubt, create a draft and mark the open question.
