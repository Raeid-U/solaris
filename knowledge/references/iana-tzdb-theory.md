---
type: Reference
id: iana-tzdb-theory
title: IANA Time Zone Database Theory
description: Source note for civil-time modelling, timezone identifiers, and limits of timezone data.
status: draft
generated:
  by: codex
  at: 2026-10-06
---

## Bibliographic Details

- Author / organization: IANA Time Zone Database maintainers.
- Title: "Theory and pragmatics of the tz code and data."
- Canonical URL: https://www.iana.org/time-zones/theory
- Retrieved: 2026-10-06.

## Scope

This source explains the design, naming, use, and limitations of the IANA timezone database.

## Extracted Takeaways

- Timezones are not simply numeric UTC offsets. Clock changes and nominal base offsets can vary.
- IANA timezone identifiers usually take the form `Area/Location`, such as `America/New_York`.
- A geographical timezone name represents civil time near a location and can encode historical changes in offsets and daylight-saving rules.
- The database aims to identify regions whose clocks have agreed since 1970.
- The source explicitly warns about uncertainty and misleading data for many pre-1970 and future timestamps.
- POSIX-style timezone strings are inadequate for many real historical and political timezone cases.

## Formulas / Locators

- "Timezone identifiers": identifier design and geographic selection guidance.
- "Time and date functions": geographical `TZ` values vs proleptic POSIX values.
- Historical limitations section: pre-1970/future uncertainty and lack of uncertainty representation.

## Assumptions

- Modern civil-time conversion should use IANA timezone identifiers when possible.
- Latitude/longitude can help select a timezone, but the result comes from a boundary/selection layer, not longitude alone.
- Historical timestamps have uncertainty that must be disclosed when relevant.

## Limitations

- IANA tzdb is not a latitude/longitude polygon dataset by itself.
- It does not define Islamic dates or prayer times.
- It does not represent uncertainty directly.
- Future timezone rules may change politically.

## Position in Solaris

Use as the core civil-time source for timezone semantics. Solaris should accept explicit IANA timezone IDs and may support optional lat/lon-to-IANA lookup through a documented provider.

This source is secular. Islamic scholarly review is not needed for timezone semantics, but civil-time assumptions must be disclosed because they affect published prayer times and date boundaries.

## Related Concepts

- IANA timezone.
- Civil time.
- Daylight saving time.
- Timezone lookup.
- Historical timezone uncertainty.

## Related Assertions

- Candidate: latitude/longitude alone is insufficient for civil-time conversion.
- Candidate: Solaris should prefer explicit IANA timezone input.
- Candidate: timezone lookup provider and tzdb version must be disclosed when lookup is used.
