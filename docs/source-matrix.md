# Research Source Matrix

This matrix tracks source candidates, claims to extract, implementation impact, and review status. Entries begin as source leads, not endorsements.

Review status values:

- `candidate`: identified but not reviewed.
- `reviewing`: actively being read.
- `summarized`: claims and formulas extracted.
- `implemented`: used in code or profile definitions.
- `superseded`: retained for history but not used.
- `rejected`: not suitable, with reason recorded.

Review type values:

- `secular`: astronomical, mathematical, chronological, statistical, or software source.
- `islamic`: juristic, scholarly, institutional, or fiqh source.
- `validation`: source used to compare outputs.
- `product`: implementation, API, deployment, or operational source.

| ID | Source | Type | Review Status | Claims / Formulas To Extract | Implementation Impact | Limitations / Questions | Scholarly Review Needed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S-001 | https://aty.sdsu.edu/explain/atmos_refr/dip.html | secular | candidate | Horizon dip, observer elevation, visual horizon geometry. | Elevation and local-horizon correction model. | Need determine domain of validity and assumptions. | No, unless mapped to prayer-entry safety offsets. |
| S-002 | https://gml.noaa.gov/grad/solcalc/solareqns.PDF | secular | candidate | NOAA solar equations, equation of time, declination, sunrise/sunset approximations. | Baseline solar calculation prototype or comparison target. | Need compare accuracy against SPA and almanac methods. | No. |
| S-003 | https://astronomycenter.net/pdf/mohamoud_2017.pdf | secular / islamic | candidate | Prayer-time formulas, juristic references, selected twilight/shadow assumptions. | Historical project starting point and comparison model. | Need identify madhhab assumptions and ambiguities. | Yes. |
| S-004 | https://thenauticalalmanac.com/TNARegular/2023_Nautical_Almanac.pdf | secular / validation | candidate | Almanac values, reference solar/lunar data, navigational calculation conventions. | Validation source and reference comparison. | Annual publication; not ideal as primary dynamic engine data source. | No. |
| S-005 | https://docs.nrel.gov/docs/fy08osti/34302.pdf | secular | candidate | NREL Solar Position Algorithm, precision claims, required inputs, time handling. | Candidate high-precision solar-position implementation reference. | Need assess licensing and implementation complexity. | No. |
| S-006 | https://gml.noaa.gov/grad/solcalc/calcdetails.html | secular | candidate | NOAA calculation details, assumptions, refraction treatment, valid ranges. | Baseline formulas, documentation, and comparison. | NOAA notes approximations and limitations. | No. |
| S-007 | https://en.wikipedia.org/wiki/Ephemeris | secular | candidate | General ephemeris terminology and orientation. | Terminology only; not an implementation source. | Secondary source; avoid relying on it for formulas. | No. |
| S-008 | https://aa.usno.navy.mil/publications/asa | secular / validation | candidate | Astronomical Applications resources and almanac context. | Reference data and validation pathways. | Need identify specific relevant publications/pages. | No. |
| S-009 | https://aa.usno.navy.mil/publications/exp_supp | secular | candidate | Explanatory Supplement context, astronomical algorithms and conventions. | Theoretical foundation and terminology. | Likely broad; extract only relevant sections. | No. |
| S-010 | https://ui.adsabs.harvard.edu/abs/2019JAHH...22...93S/abstract | secular / historical | candidate | Historical astronomy context relevant to Islamic astronomical practice. | Background section support. | Need full paper access and relevance review. | Possibly, if used for Islamic historical framing. |

## Source Extraction Template

Use this template when turning a candidate source into an extracted note.

````md
## Source ID

### Bibliographic Details

- Title:
- Author(s):
- Year:
- URL / DOI:
- Access date:

### Domain

- Astronomy:
- Timekeeping:
- Islamic law:
- Calendar:
- Validation:
- Implementation:

### Claims Extracted

1. Claim:
   - Source location:
   - Confidence:
   - Applies to:

### Formulas Extracted

```text
formula here
```

Variables:

- `x`:

### Assumptions

- 

### Limitations

- 

### Implementation Impact

- 

### Scholarly Review Needed

- Yes / No:
- Reason:
````

## Open Source Gaps

- Primary fiqh sources for prayer-time definitions by madhhab.
- Contemporary institutional prayer-time method documentation.
- High-latitude prayer-time method references.
- Crescent-visibility model sources.
- Historical moon-sighting datasets.
- IANA timezone and lat/lon timezone lookup source policy.
- Public mosque timetable datasets for validation.
