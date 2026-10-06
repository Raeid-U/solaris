# Next Steps

Last updated: 2026-10-05

## Immediate Next Steps

1. Review and revise the newly created planning docs with the user.
2. Decide whether to keep the working name "Solaris" or rename the project before deeper documentation work.
3. Review the draft source notes with the user and correct any positioning issues.
4. Extract implementation-facing assertion pages from the draft source notes:
   - NOAA equation of time.
   - NOAA solar declination.
   - NOAA sunrise/sunset zenith convention.
   - NREL SPA as validation reference.
   - IANA timezone requirement.
   - horizon dip/elevation correction.
   - Mohamoud 2017 prayer-time formula candidates.
5. Draft the first secular technical memo:
   - solar declination.
   - equation of time.
   - solar transit.
   - hour angle.
   - sunrise/sunset.
   - twilight angle.
   - refraction and horizon dip.
   - timezone conversion.
6. Take the scholar research questions to qualified reviewers and bring back vetted sources/answers.
7. Draft separate prayer-method memos for:
   - Fajr.
   - Dhuhr.
   - Asr.
   - Maghrib.
   - Isha.

## Near-Term Architecture Work

Before rewriting code, propose a clean repo architecture. Candidate direction:

```text
docs/
packages/core/
packages/api/
packages/r-bindings/
docker/
validation/
profiles/
```

Open decision:

- Whether this should become a monorepo immediately or start with one core JS package plus docs.

## Research Questions

- Which solar-position algorithm should be the first canonical implementation?
- Should NREL SPA be used directly, adapted, or used only as a validation reference?
- Which timezone lookup provider should be supported, if any?
- Which source notes should be converted into assertions before the first engine rewrite?
- What primary sources should be used for each madhhab's prayer-time definitions?
- Which Fajr/Isha twilight angles should be documented first?
- How should high-latitude cases be represented without implying a single religious answer?
- What does "Islamic date prediction" mean for each supported model?

## Do Not Do Yet

- Do not delete the current prototype until the user approves the clean-slate implementation.
- Do not implement the new engine until the documentation structure is accepted.
- Do not introduce a default religious method without explicit profile metadata and review status.
- Do not claim scholarly approval before review has happened.
