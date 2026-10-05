# Project Solaris Charter

## Working Title

Project Solaris is the current codename for an Islamic astronomy and timekeeping project focused on prayer-time calculation, Islamic date prediction, and transparent modelling of astronomical, chronological, statistical, and juristic assumptions.

The name may change. Until then, "Solaris" refers to the full umbrella project, not only the API or the solar calculation engine.

## Purpose

Project Solaris exists to provide a transparent, research-backed computational framework for Islamic timekeeping.

Muslim communities rely on prayer times, Islamic dates, and lunar-calendar predictions for daily worship and communal planning. These times are not reducible to one universal algorithm. Some calculations are primarily astronomical, such as solar transit, sunset, twilight, and shadow length. Others depend on juristic interpretation, local observation, institutional convention, community practice, atmospheric conditions, and moon-sighting methodology.

Solaris is not intended to replace scholars, local masajid, Islamic councils, or established community practice. It is intended to expose the assumptions behind calculation methods, provide configurable models, and make the reasoning behind each result clear.

The long-term goal is to build a timekeeping engine that can support secular astronomical calculation, Islamic legal review, historical validation, and practical deployment for Muslim communities.

## Non-Authority Statement

Project Solaris is not a fatwa engine and does not claim to determine the religiously authoritative time for prayer, fasting, Eid, or the beginning of Islamic months.

The engine produces algorithmic predictions according to selected parameters, calculation profiles, scholarly assumptions, and data sources. Its outputs are computational aids, not binding religious rulings. Communities should continue to defer to qualified scholars, local authorities, and established masjid practice for religious decision-making.

Every output should disclose the method, assumptions, parameters, timezone source, astronomical model, offsets, data versions, and uncertainty involved.

## Core Principle

Solaris must keep the following layers conceptually separate:

```text
raw astronomical computation
  -> Islamic method mapping
  -> parametric model/profile selection
  -> offsets and institutional conventions
  -> published output with metadata
```

No output should hide the path from observation or formula to final time.

## Goals

### Goal 1: Build a transparent astronomical calculation engine

Solaris should calculate solar- and lunar-position-based events from latitude, longitude, elevation, date, timezone, and model parameters. This includes solar transit, sunrise, sunset, twilight-based events, shadow-length events, lunar conjunction, and crescent-visibility inputs where feasible.

### Goal 2: Support prayer-time calculation through explicit method profiles

The engine should support configurable calculation profiles for daily prayers. Profiles should make visible the assumptions being used, including Fajr and Isha twilight angles, Dhuhr offset, Asr shadow ratio, Maghrib treatment, high-latitude handling, horizon corrections, rounding policy, and safety offsets.

### Goal 3: Support Islamic date prediction

The engine should support multiple models for Islamic date prediction, including arithmetic/tabular calendars, institutional calendar compatibility, local crescent-visibility prediction, global or regional visibility assumptions, and manual overrides for communities following sighting authorities.

### Goal 4: Integrate Islamic scholarly review

The project should document where algorithmic models intersect with Islamic legal reasoning. The goal is to review prayer and calendar models with qualified scholars representing the four canonical madhahib, under the supervision of Shaykh Faisal Hamid Abdur-Razak and Shaykh Muhammad al-Yaquobi, or other qualified reviewers as the project develops.

### Goal 5: Validate against historical and public data

The engine should be tested against astronomical references, public institutional timetables, mosque schedules, and historical moon-sighting or calendar records where available. The purpose is not to prove religious correctness, but to measure algorithmic consistency, identify error margins, and support responsible use of offsets.

### Goal 6: Package the engine for practical use

Solaris should eventually produce a JavaScript library, R bindings, a hosted API, and a Dockerized deployment package so the same core model can support research, embedded web applications, local masjid websites, and self-hosted deployments.

## Initial Objectives

### Objective 1: Research and source collation

Create a structured research base covering:

- Solar-position algorithms.
- Lunar-position and crescent-visibility models.
- Prayer-time calculation formulas.
- Refraction, elevation, and horizon corrections.
- Timezone and civil-time conversion.
- Islamic legal definitions for each prayer time.
- Differences between the four madhahib where relevant.
- Islamic calendar models.
- Public datasets suitable for validation.

The output is a source matrix that records each source, claim, formula, limitation, implementation impact, and whether scholarly review is needed.

### Objective 2: Mathematical derivation and documentation

Produce a technical memo explaining the mathematical basis of the prayer-time engine. It should include:

- Solar declination.
- Equation of time.
- Solar transit.
- Hour angle.
- Sunrise and sunset calculation.
- Twilight-angle calculation.
- Asr shadow-length calculation.
- Refraction and elevation corrections.
- Timezone conversion.
- Rounding and offset rules.

The memo must distinguish raw astronomical calculation from Islamic method selection.

### Objective 3: Islamic-law mapping

Produce an Islamic-method memo for each prayer:

- Fajr.
- Dhuhr.
- Asr.
- Maghrib.
- Isha.

Each memo should explain the religious trigger, astronomical proxy, differences between madhahib or institutional methods, and where scholarly review is required.

### Objective 4: Islamic calendar modelling

Document and prototype multiple Islamic date prediction models:

- Tabular Hijri conversion.
- Institutional calendar compatibility.
- Local crescent-visibility prediction.
- Global or regional visibility-based prediction.
- Manual override models for communities following local sighting authorities.

Each model should disclose whether it is arithmetic, astronomical, observational, or institutionally derived.

### Objective 5: Prototype the calculation engine

Build an initial engine that can accept:

- Latitude.
- Longitude.
- Date.
- Timezone or timezone lookup provider.
- Elevation, if available.
- Calculation profile.
- Madhhab-specific settings.
- Optional offsets.
- High-latitude method.

The output should include calculated times and metadata explaining how each time was produced.

### Objective 6: Validate against reference data

Create validation scripts that compare engine outputs against:

- Published astronomical references.
- Existing prayer-time tables.
- Public mosque timetables.
- Historical institutional calendars.
- Crescent-visibility datasets, where available.

The validation report should separate astronomical error, institutional-method differences, rounding differences, and intentional safety offsets.

### Objective 7: Package deliverables

Once the model stabilizes, package the engine as:

- A JavaScript library.
- R bindings for statistical analysis and model tuning.
- A lightweight hosted API.
- A Dockerized self-hostable API wrapper.
- Documentation for developers, researchers, scholars, and mosque administrators.

## Scope

### In Scope

- Prayer-time prediction from latitude and longitude.
- Islamic date prediction.
- Configurable calculation profiles.
- Madhhab-aware parameters where applicable.
- Twilight-angle configuration.
- Asr shadow-ratio configuration.
- High-latitude handling.
- Timezone conversion using reliable timezone data.
- Elevation and horizon-related corrections where feasible.
- Safety offsets.
- Scholarly review workflow.
- Statistical validation.
- Public documentation.
- API/library deployment.

### Out of Scope

- Issuing fatwas.
- Declaring one universally correct prayer timetable.
- Declaring one universally binding Islamic calendar.
- Replacing local moon-sighting authorities.
- Resolving disputed fiqh questions through code alone.
- Hiding calculation assumptions from users.
- Treating mosque timetables as pure astronomical observations without accounting for local convention, policy, or manual adjustment.

## Deliverables

1. Research Source Matrix.
2. Mathematical White Paper.
3. Islamic Method White Paper.
4. Calculation Profile Registry.
5. JavaScript Library.
6. R Bindings.
7. Hosted API.
8. Docker Image.
9. Validation Report.

## Initial Phases

### Phase 0: Charter and Scope

Define the project purpose, goals, objectives, deliverables, scope, non-authority position, terminology, and agent memory process.

### Phase 1: Secular Research Foundation

Collect and summarize the astronomical, mathematical, timezone, almanac, and ephemeris sources needed to understand the secular calculation problem.

### Phase 2: Islamic Method Mapping

Work with qualified scholars to map prayer-time and calendar definitions to configurable computational models.

### Phase 3: Prototype Engine

Build the first working calculation engine with transparent parameters and structured metadata.

### Phase 4: Validation and Offsets

Compare the engine against historical data, public records, institutional timetables, and observational datasets. Use the results to document expected error ranges and optional safety offsets.

### Phase 5: Productization

Package the stable engine into a JavaScript library, R bindings, hosted API, and Docker image.

## Long-Term Vision

Solaris should become a transparent, scholarly reviewed, technically rigorous timekeeping engine for Islamic astronomical calculation.

Its value is not merely that it returns a prayer time or date. Its value is that it explains the path from astronomical calculation to Islamic method selection, exposes the assumptions involved, allows responsible customization, and gives communities tools to make informed decisions under scholarly guidance.
