# Scholar Research Questions

This document captures questions that should be researched, sourced, and reviewed with qualified scholars before Solaris encodes Islamic method profiles.

It intentionally does not interpret Qur'an or hadith. It frames questions for investigation and scholar review.

## General Method Questions

- What is the correct way to distinguish a religious trigger, an observable sign, a computational proxy, and a published timetable convention?
- Under what conditions may a calculated time be used in place of direct observation?
- How should Solaris describe outputs so users do not confuse algorithmic prediction with religious authority?
- Are there terms that should be avoided because they imply fatwa, binding authority, or religious certainty?
- How should uncertainty be disclosed when the astronomical calculation is precise but the religious mapping is interpretive?

## Fajr

- What are the classical definitions of true dawn in each of the four madhahib?
- Which observable features distinguish true dawn from false dawn?
- Is using a solar depression angle an acceptable computational proxy, and if so under what conditions?
- Are there madhhab-specific or region-specific constraints on selecting a Fajr angle?
- How should conflicting institutional Fajr angles be represented in a profile registry?
- What should Solaris say when high-latitude locations do not experience the expected twilight sign?

## Shuruq / Sunrise

- For the end of Fajr, which observable part of sunrise matters in the relevant legal discussions?
- How should local horizon, mountains, buildings, elevation, and atmospheric refraction be handled?
- Is a safety offset recommended, discouraged, or dependent on local authority?

## Dhuhr

- What is the legal trigger for Dhuhr in each madhhab?
- How should exact solar transit/zawal be treated computationally?
- Is a post-transit offset religiously required, recommended as caution, or merely an institutional convention?
- How should Solaris distinguish Dhuhr entry time from mosque congregation time?

## Asr

- What are the precise madhhab positions on Asr entry?
- How should the noon/zenith shadow be included in the shadow-ratio calculation?
- What is the correct language for the majority position vs Hanafi position?
- Are there edge cases near the tropics where shadow behaviour needs special treatment?

## Maghrib

- What is the legal trigger for Maghrib in each madhhab?
- How should the disappearance of the solar disk be treated when the visible horizon is obstructed or elevated?
- Are Maghrib offsets a matter of legal caution, local convention, or astronomical correction?

## Isha

- What are the classical definitions of Isha entry in each madhhab?
- What is the relationship between red twilight, white twilight, and institutional angle choices?
- How should Solaris model madhhab differences without declaring one approach universally correct?
- How should Isha be estimated in abnormal twilight or high-latitude cases?

## Qiyam / Night Fractions

- How should night be defined for midnight, last third, and related calculations?
- Should night be measured from sunset to Fajr or Maghrib to Fajr, and do madhahib differ?
- What should be configurable in profiles?

## High-Latitude / Abnormal Days

- Which estimation methods are recognized by scholars or institutions?
- Under what conditions should a fallback method activate?
- Should fallback selection depend on madhhab, institution, local authority, or user choice?
- What language should Solaris use when no direct astronomical event occurs?

## Islamic Date Prediction

- Which calendar models are acceptable only as arithmetic approximations?
- What is the role of conjunction calculation relative to crescent visibility?
- How should local sighting, regional sighting, and global sighting be represented?
- How should manual overrides from sighting authorities be encoded?
- What should Solaris do when astronomical prediction and official community declaration differ?

## Questions About Mohamoud 2017

- Are the paper's prayer-time definitions acceptable summaries of the four madhahib?
- Is the paper's majority-vs-Hanafi Asr framing precise enough?
- Is its treatment of Isha as red and/or white twilight adequate?
- Is adopting `18°` for both Fajr and Isha defensible beyond the paper's case-study region?
- Which parts of the paper should be treated as mathematical modelling, and which require fiqh verification?

## Source Collection Requests

Ask scholars for:

- Primary madhhab texts or reliable commentaries for each prayer's entry and exit times.
- Contemporary fatwa council or institutional statements on calculated prayer times.
- High-latitude prayer-time guidance.
- Crescent-sighting and calendar methodology guidance.
- Any recommended terminology for non-authoritative computational tools.
