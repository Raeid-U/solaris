# Calculation Profile Model

Calculation profiles are named, versioned bundles of assumptions. They are not declarations of religious correctness. They describe how Solaris should calculate a result under a selected method.

## Design Goals

- Make every assumption explicit.
- Separate raw astronomy from Islamic method selection.
- Preserve reproducibility across profile changes.
- Allow madhhab-aware and institution-compatible settings without hardcoding one view as universal.
- Support scholarly review metadata.
- Support validation-derived offsets without hiding them inside formulas.

## Conceptual Output Chain

```text
input location/date
  -> astronomical model
  -> prayer/calendar event model
  -> method profile
  -> offsets and rounding
  -> result with metadata
```

## Profile Categories

### Prayer Profiles

Prayer profiles define how daily prayer times are calculated.

### Calendar Profiles

Calendar profiles define how Islamic dates are predicted or reconciled.

### Institutional Compatibility Profiles

Institutional profiles emulate a known public calculation method or timetable convention when documentation is available.

### Local Community Profiles

Local profiles represent a mosque or community configuration, usually built from a base profile plus offsets and manual overrides.

## Draft Prayer Profile Schema

```json
{
  "id": "example-prayer-profile",
  "version": "0.1.0",
  "name": "Example Prayer Profile",
  "type": "prayer",
  "status": "draft",
  "description": "Short description of the assumptions this profile represents.",
  "intendedUse": ["research", "comparison"],
  "madhhabScope": {
    "hanafi": "supported",
    "maliki": "review-needed",
    "shafii": "review-needed",
    "hanbali": "review-needed"
  },
  "astronomicalModel": {
    "solarPositionAlgorithm": "unselected",
    "refractionModel": "unselected",
    "elevationCorrection": "optional",
    "horizonModel": "standard"
  },
  "timeModel": {
    "timezoneInput": "iana-required",
    "timezoneLookup": "optional-provider",
    "dstHandling": "iana",
    "rounding": {
      "mode": "nearest-minute",
      "notes": "Must be disclosed in output metadata."
    }
  },
  "prayerParameters": {
    "fajr": {
      "proxy": "solar-depression-angle",
      "angleDegrees": null,
      "offsetMinutes": 0,
      "reviewStatus": "scholarly-review-needed"
    },
    "shuruq": {
      "proxy": "apparent-sunrise",
      "solarAltitudeDegrees": -0.833,
      "offsetMinutes": 0,
      "reviewStatus": "astronomical"
    },
    "dhuhr": {
      "proxy": "solar-transit",
      "offsetMinutes": 0,
      "reviewStatus": "scholarly-review-needed"
    },
    "asr": {
      "proxy": "shadow-ratio",
      "shadowRatio": null,
      "offsetMinutes": 0,
      "reviewStatus": "scholarly-review-needed"
    },
    "maghrib": {
      "proxy": "apparent-sunset",
      "solarAltitudeDegrees": -0.833,
      "offsetMinutes": 0,
      "reviewStatus": "scholarly-review-needed"
    },
    "isha": {
      "proxy": "solar-depression-angle",
      "angleDegrees": null,
      "offsetMinutes": 0,
      "reviewStatus": "scholarly-review-needed"
    }
  },
  "highLatitudeMethod": {
    "strategy": "unselected",
    "parameters": {},
    "reviewStatus": "scholarly-review-needed"
  },
  "sources": [],
  "validation": {
    "status": "not-validated",
    "datasets": [],
    "knownErrorRanges": []
  },
  "scholarlyReview": {
    "status": "not-reviewed",
    "reviewers": [],
    "notes": []
  },
  "changeLog": []
}
```

## Draft Calendar Profile Schema

```json
{
  "id": "example-calendar-profile",
  "version": "0.1.0",
  "name": "Example Calendar Profile",
  "type": "calendar",
  "status": "draft",
  "model": {
    "kind": "tabular | conjunction | visibility | institutional | manual-override",
    "parameters": {}
  },
  "sightingPolicy": {
    "scope": "local | regional | global | institutional",
    "authority": null,
    "manualOverrideAllowed": true
  },
  "timezonePolicy": {
    "dateBoundary": "local-civil | sunset-to-sunset | custom",
    "ianaTimezoneRequired": true
  },
  "sources": [],
  "validation": {
    "status": "not-validated",
    "datasets": [],
    "knownErrorRanges": []
  },
  "scholarlyReview": {
    "status": "not-reviewed",
    "reviewers": [],
    "notes": []
  },
  "changeLog": []
}
```

## Review Status Values

- `not-reviewed`: no qualified review yet.
- `needs-review`: requires Islamic scholarly review before responsible public recommendation.
- `reviewed-with-notes`: reviewed but caveats exist.
- `approved-for-profile`: approved only within the stated profile assumptions.
- `deprecated`: profile should not be used for new work.

## Result Metadata Requirements

Every calculated result should include enough metadata to reconstruct why the time/date was produced.

Minimum metadata:

- Input latitude and longitude.
- Input date.
- Timezone and timezone source.
- Elevation source, if used.
- Profile ID and version.
- Astronomical model and version.
- Prayer/calendar parameters used.
- Raw calculated value before rounding.
- Rounding policy.
- Offsets applied.
- High-latitude fallback, if used.
- Warnings and uncertainty notes.

## Open Questions

- Should the default engine require explicit profile selection, or ship with a clearly labelled research default?
- Which institutional profiles should be supported first?
- How should profile compatibility be tested against public timetables?
- How should scholarly review metadata be represented when reviewers disagree?
- Should offsets be allowed per prayer, per location, per season, or per institution?
