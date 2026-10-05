# Whitepaper Outline

This document is the working outline for the main Solaris whitepaper. It should be developed alongside the engine, not after implementation. The code should eventually implement the distinctions and assumptions made explicit here.

## 1. Introduction

- Problem statement.
- Why Islamic timekeeping resists a single universal algorithm.
- Why algorithmic support is still useful.
- What Solaris contributes.
- Intended audiences:
  - Developers.
  - Researchers.
  - Mosque administrators.
  - Islamic scholars reviewing computational assumptions.

## 2. Scope and Non-Authority Statement

- Solaris is not a fatwa engine.
- Solaris does not replace scholars, masajid, Islamic councils, or sighting bodies.
- Outputs are computational predictions under selected assumptions.
- Every output must disclose method, parameters, source versions, offsets, and uncertainty.

## 3. Key Definitions

- Astronomical computation.
- Juristic modelling.
- Estimation.
- Prediction.
- Time entry.
- Published prayer time.
- Offset.
- Safety offset.
- Method profile.
- Uncertainty.
- Validation.
- Institutional compatibility.
- Scholarly review status.

## 4. Background: Islamic Timekeeping and Celestial Observation

- Prayer times as observable phenomena.
- Islamic months and crescent sighting.
- Historical reliance on observation.
- Modern computational aids.
- Why computation cannot erase juristic or observational complexity.

## 5. Astronomical Foundations

- Earth rotation.
- Coordinate systems.
- Latitude and longitude.
- Solar declination.
- Equation of time.
- Solar altitude.
- Hour angle.
- Solar transit.
- Sunrise and sunset.
- Refraction.
- Horizon dip and elevation.
- Timezone and civil-time conversion.
- Almanacs, ephemerides, and algorithmic approximations.

## 6. Prayer-Time Modelling Framework

Each prayer-time calculation should be explained using this chain:

```text
religious trigger
  -> observable phenomenon
  -> astronomical proxy
  -> tunable parameter
  -> calculated time
  -> rounded or offset published time
```

This section should explain why these are separate concerns.

## 7. Prayer-Time Events

Each prayer section should use the same internal structure:

- Religious trigger.
- Astronomical proxy.
- Madhhab positions.
- Institutional conventions.
- Calculation parameters.
- Known uncertainty.
- Scholarly review needed.

### 7.1 Fajr

- Religious trigger: entry of true dawn.
- Astronomical proxy: solar depression angle before sunrise.
- Parameters:
  - `fajrAngleDegrees`.
  - high-latitude fallback.
  - offsets.
- Review needed:
  - mapping of true dawn to proxy angle.
  - madhhab and institutional differences.

### 7.2 Shuruq

- Religious trigger: sunrise as the end boundary for Fajr.
- Astronomical proxy: apparent sunrise at corrected solar altitude.
- Parameters:
  - refraction correction.
  - solar semidiameter.
  - elevation and horizon dip.

### 7.3 Dhuhr

- Religious trigger: sun passing zenith/solar noon, with juristic treatment of exact transit and recommended delay where relevant.
- Astronomical proxy: local apparent solar transit.
- Parameters:
  - `dhuhrOffsetMinutes`.
  - rounding.
  - timezone conversion.

### 7.4 Asr

- Religious trigger: shadow-length condition.
- Astronomical proxy: solar altitude producing a selected shadow ratio.
- Parameters:
  - `asrShadowRatio`.
  - madhhab setting.
  - offsets.

### 7.5 Maghrib

- Religious trigger: sunset and disappearance of the sun below the horizon, with method-specific treatment.
- Astronomical proxy: apparent sunset at corrected solar altitude.
- Parameters:
  - sunset correction.
  - `maghribOffsetMinutes`.
  - local horizon correction.

### 7.6 Isha

- Religious trigger: disappearance of twilight.
- Astronomical proxy: solar depression angle after sunset or night-fraction rule.
- Parameters:
  - `ishaAngleDegrees`.
  - night-fraction fallback.
  - offsets.

### 7.7 Qiyam and Night Fractions

- Night definition options.
- Middle of night.
- Last third of night.
- Juristic and institutional assumptions.

## 8. High-Latitude and Abnormal-Day Cases

- Missing twilight.
- Continuous daylight or night.
- Nearest valid day.
- Night fraction methods.
- Seventh-of-night method.
- Middle-of-night method.
- Angle-based methods.
- Disclosure requirements.

## 9. Islamic Date Prediction

- Tabular Hijri calendar.
- Astronomical conjunction.
- Crescent visibility.
- Local sighting.
- Regional sighting.
- Global sighting.
- Institutional calendars.
- Manual overrides for communities following sighting authorities.
- Difference between computational prediction and authoritative declaration.

## 10. Method Profiles

- What a profile contains.
- Profile schema.
- Versioning.
- Scholarly review status.
- Institutional compatibility.
- Change log requirements.
- How profile changes affect reproducibility.

## 11. Validation and Error Analysis

- Astronomical validation.
- Institutional timetable comparison.
- Mosque timetable comparison.
- Historical crescent records.
- Error classes:
  - astronomical model error.
  - timezone error.
  - rounding difference.
  - method/profile difference.
  - institutional offset.
  - manual adjustment.
- Statistical offsets.
- Limits of validation.

## 12. Implementation Notes

- Engine architecture.
- Timezone handling.
- Precision and rounding.
- Metadata in outputs.
- Reproducibility.
- Source and version disclosure.
- Separation of library, API, Docker image, and R bindings.

## 13. Limitations

- Atmospheric variability.
- Local horizon effects.
- Human observation.
- Juristic disagreement.
- Institutional policy.
- Calendar authority.
- Historical data quality.
- Risk of false precision.

## 14. Conclusion

- Summary of project contribution.
- Restatement of humility and non-authority.
- Future work.

## Appendices

### Appendix A: Formula Glossary

Definitions and formulas used by the engine, with source references.

### Appendix B: Source Matrix

Structured record of all sources, claims, formulas, limitations, and implementation impact.

### Appendix C: Madhhab Comparison Tables

Comparison tables for prayer-time and calendar-related method questions.

### Appendix D: Calculation Profile Registry

Versioned list of supported profiles and their assumptions.

### Appendix E: Sample Engine Outputs

Examples showing calculated times and metadata.

### Appendix F: Validation Dataset Catalogue

Datasets used for validation and their limitations.

### Appendix G: Decision Log

Record of major modelling decisions and why they were made.
