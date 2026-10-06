---
type: Reference
id: noaa-solar-calculations
title: NOAA Solar Calculation Equations and Details
description: Source note for NOAA's solar calculator formulas, accuracy caveats, and refraction assumptions.
status: draft
generated:
  by: codex
  at: 2026-10-06
---

## Bibliographic Details

- Author / organization: NOAA Global Monitoring Laboratory.
- Year: Undated web/PDF resources, accessed as current public resources.
- Canonical URLs:
  - https://gml.noaa.gov/grad/solcalc/solareqns.PDF
  - https://gml.noaa.gov/grad/solcalc/calcdetails.html
- Retrieved: 2026-10-06.

## Scope

This source provides compact solar-position and sunrise/sunset equations suitable for a first-pass solar calculator. It covers:

- fractional year.
- equation of time.
- solar declination.
- true solar time.
- hour angle.
- solar zenith.
- sunrise/sunset hour angle.
- solar noon.
- approximate atmospheric refraction correction.

## Extracted Takeaways

- NOAA's calculation details page says its sunrise/sunset and solar-position calculators are based on Jean Meeus' *Astronomical Algorithms*.
- NOAA gives a theoretical sunrise/sunset accuracy of about one minute between latitudes `-72` and `+72`, with larger error outside that range.
- NOAA explicitly warns that observed sunrise/sunset can differ from calculated values because of atmospheric composition, pressure, temperature, humidity, and related conditions.
- The calculator page says NOAA/GML no longer actively maintains or supports the calculator.
- The solar equations PDF gives direct formulas for equation of time and solar declination from fractional year.
- The PDF uses `90.833°` zenith for sunrise/sunset, combining approximate atmospheric refraction and apparent solar disk size.
- The calculation details page lists a piecewise approximate refraction model by solar elevation.

## Formulas / Locators

- `solareqns.PDF`, page 1: fractional year, equation of time, solar declination, true solar time, hour angle, solar zenith.
- `solareqns.PDF`, page 2: sunrise/sunset hour angle, UTC sunrise/sunset, solar noon.
- `calcdetails.html`, "Atmospheric Refraction Effects": `0.833°` assumption for sunrise/sunset and piecewise refraction table.

## Assumptions

- Longitude is positive east of Greenwich in the NOAA formulas.
- Timezone in the PDF is an offset from UTC, not an IANA timezone identifier.
- The PDF formulas are approximate and oriented toward solar calculator use.
- The common `90.833°` sunrise/sunset zenith folds several physical effects into one constant.

## Limitations

- Not actively maintained by NOAA/GML.
- Not suitable as an unquestioned high-precision authority.
- Spreadsheet versions have date-range limits due to Julian Day approximation.
- The source does not solve civil timezone lookup.
- Refraction is approximate and atmosphere-dependent.
- Does not address Islamic method selection.

## Position in Solaris

Use as an accessible baseline source for early educational derivation and first-pass comparison. Do not treat as the final canonical high-precision solar engine without validating against stronger references such as NREL SPA, USNO material, or almanac data.

This source is secular. Islamic scholarly review is not needed for the equations themselves, but is needed before mapping any resulting solar/twilight event to a religious prayer entry.

## Related Concepts

- Equation of time.
- Solar declination.
- Hour angle.
- Solar transit.
- Apparent sunrise.
- Apparent sunset.
- Atmospheric refraction.

## Related Assertions

- Candidate: NOAA fractional-year equation of time approximation.
- Candidate: NOAA solar declination approximation.
- Candidate: NOAA `90.833°` sunrise/sunset zenith convention.
- Candidate: NOAA refraction model is approximate and atmosphere-dependent.
