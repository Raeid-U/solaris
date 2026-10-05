# Validation Plan

Validation in Solaris measures consistency, error, and reproducibility. It does not prove religious authority.

## Validation Goals

- Compare astronomical calculations against trusted astronomical references.
- Compare prayer-time outputs against public institutional and mosque timetables.
- Compare Islamic date predictions against public calendars and sighting records where available.
- Separate algorithmic error from method differences, rounding, institutional offsets, and manual adjustments.
- Estimate reasonable uncertainty ranges and optional safety offsets where justified.

## Validation Layers

### Layer 1: Astronomical Calculation Validation

Compare raw solar and lunar calculations against reference sources.

Potential references:

- NOAA solar calculator details.
- NREL Solar Position Algorithm.
- Nautical Almanac data.
- USNO resources.

Metrics:

- Solar transit delta.
- Sunrise/sunset delta.
- Twilight event delta.
- Solar altitude/azimuth delta where applicable.
- Lunar phase/conjunction delta where applicable.

### Layer 2: Prayer-Time Method Validation

Compare profile outputs against known institutional methods and prayer tables.

Metrics:

- Per-prayer time delta.
- Seasonal error pattern.
- Latitude-dependent error pattern.
- Difference before and after rounding.
- Difference before and after offsets.

Important classification:

- A difference may be expected if the timetable uses another Fajr/Isha angle, Asr ratio, high-latitude method, or institutional offset.

### Layer 3: Mosque Timetable Comparison

Compare local mosque schedules against profile outputs.

Use caution:

- Mosque timetables may include safety offsets.
- Published times may be rounded.
- Some times may reflect congregation times, not entry times.
- Seasonal templates may be manually edited.
- The timetable may intentionally follow a national body or local scholar.

Required metadata:

- Mosque name.
- Location.
- Timetable year/month.
- Source URL or file.
- Whether times are entry times or congregation times.
- Known institutional affiliation.
- Known manual offsets.

### Layer 4: Islamic Calendar Validation

Compare calendar predictions against:

- Tabular calendar dates.
- Institutional calendars.
- Public moon-sighting records.
- Local or regional sighting announcements.

Metrics:

- Predicted start date vs published start date.
- Visibility classification vs reported sighting.
- Regional differences.
- False positives and false negatives.

## Error Classes

- `astronomical-model-error`: discrepancy due to calculation algorithm or constants.
- `timezone-error`: incorrect civil-time conversion, DST handling, or timezone lookup.
- `input-error`: incorrect coordinates, elevation, date, or calendar interpretation.
- `rounding-error`: difference caused by minute rounding policy.
- `profile-difference`: different twilight angle, Asr ratio, Maghrib treatment, or high-latitude method.
- `institutional-offset`: published timetable adds intentional offsets.
- `manual-adjustment`: local authority adjusted published times manually.
- `observational-variance`: atmosphere, local horizon, visibility, or observer conditions.
- `authority-difference`: differing moon-sighting acceptance policy or calendar authority.

## Statistical Offset Policy

Offsets may be recommended only when the validation data supports the recommendation and the documentation explains the scope.

An offset recommendation should include:

- Dataset used.
- Location or region.
- Time period.
- Prayer/date model affected.
- Error distribution.
- Recommended offset.
- Confidence statement.
- Limitation statement.
- Scholarly review status if religious safety is implied.

Example language:

```text
For this dataset and profile, observed Dhuhr deltas were within X seconds of the reference astronomical transit model. A Y-second safety offset may be considered for this profile, but this is not a religious ruling and should be reviewed by qualified scholars before community adoption.
```

## Required Validation Outputs

- Machine-readable comparison data.
- Human-readable validation report.
- Error classification summary.
- Known limitations.
- Dataset catalogue.
- Reproducibility instructions.

## Open Tasks

- Identify public institutional timetable datasets.
- Identify local mosque timetables suitable for permissioned analysis.
- Choose primary astronomical reference implementation.
- Decide how to store validation fixtures.
- Decide whether validation scripts live in the JS package, R package, or separate research workspace.
