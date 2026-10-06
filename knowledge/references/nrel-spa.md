---
type: Reference
id: nrel-spa
title: NREL Solar Position Algorithm
description: Source note for Reda and Andreas' Solar Position Algorithm and its implementation caveats.
status: draft
generated:
  by: codex
  at: 2026-10-06
---

## Bibliographic Details

- Author / organization: Ibrahim Reda and Afshin Andreas, National Renewable Energy Laboratory / National Laboratory of the Rockies.
- Main publication: Reda, I.; Andreas, A. "Solar Position Algorithm for Solar Radiation Applications." *Solar Energy* 76(5), 2004, pp. 577-589.
- Technical report: NREL Report No. TP-560-34302, revised January 2008.
- Canonical URLs:
  - https://midcdmz.nlr.gov/spa/
  - https://docs.nrel.gov/docs/fy08osti/34302.pdf
- Retrieved: 2026-10-06.

## Scope

This source provides a high-precision solar-position algorithm for solar zenith and azimuth over a wide historical/future year range.

## Extracted Takeaways

- The SPA page describes the algorithm as calculating solar zenith and azimuth from year `-2000` to `6000`.
- The page states an uncertainty of approximately `+/- 0.0003 degrees` for zenith and azimuth.
- The distributed implementation includes ANSI C and CRBasic versions, with variable descriptions in the header/tester materials.
- The page includes a software notice, warranty disclaimer, redistribution restrictions, and a statement that the software is provided for internal, noncommercial purposes unless appropriate licensing is obtained.

## Formulas / Locators

- Technical report: algorithm theory, variables, and step-by-step solar-position calculation.
- SPA page: accuracy claim, date range, implementation downloads, licensing notice.

## Assumptions

- Inputs include date, time, location, and time-related astronomical corrections.
- The algorithm targets solar radiation applications, not Islamic prayer-time modelling specifically.
- The downloadable code is not automatically appropriate to copy into Solaris because of license restrictions.

## Limitations

- Licensing must be reviewed before copying or adapting source code.
- The algorithm may be more complex than needed for minute-level prayer times.
- High numerical precision does not solve atmospheric visibility, local horizon, civil-time, or juristic questions.
- Does not address Islamic method selection.

## Position in Solaris

Use as the likely high-precision solar-position reference and validation target. Solaris can study the report and compare outputs against SPA, but should avoid copying SPA code unless licensing is explicitly resolved.

This source is secular. Islamic scholarly review is not needed for the solar-position algorithm, but is needed before mapping its outputs to prayer-entry rules.

## Related Concepts

- Solar zenith.
- Solar azimuth.
- Solar position algorithm.
- Validation reference.
- Ephemeris-style computation.

## Related Assertions

- Candidate: NREL SPA is a high-precision validation reference for solar zenith and azimuth.
- Candidate: SPA code licensing restricts direct redistribution/use.
- Candidate: High-precision solar position does not eliminate refraction, horizon, civil-time, or juristic uncertainty.
