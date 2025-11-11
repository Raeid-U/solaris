import { toDegrees, toRadians, getJulianDate } from "./utility";

function normalizeAngle(deg: number): number {
  // returns [0, 360)
  return ((deg % 360) + 360) % 360;
}

// Solar parameters calculation
function calculateSolarParameters(julianDate: number): {
  declination: number;
  equationOfTime: number;
} {
  const D = julianDate - 2451545.0;

  // Mean anomaly (deg) and mean longitude (deg)
  const gDeg = normalizeAngle(357.529 + 0.98560028 * D);
  const qDeg = normalizeAngle(280.459 + 0.98564736 * D);

  // Ecliptic longitude (deg)
  const LDeg = normalizeAngle(
    qDeg +
      1.915 * Math.sin(toRadians(gDeg)) +
      0.02 * Math.sin(2 * toRadians(gDeg)),
  );

  // Obliquity of the ecliptic (rad)
  const epsilon = toRadians(23.439 - 0.00000036 * D);

  // Right ascension (deg), normalized to [0, 360)
  let RAdeg = toDegrees(
    Math.atan2(
      Math.cos(epsilon) * Math.sin(toRadians(LDeg)),
      Math.cos(toRadians(LDeg)),
    ),
  );
  RAdeg = normalizeAngle(RAdeg);
  const RAhrs = RAdeg / 15;

  // Declination (rad)
  const declination = Math.asin(Math.sin(epsilon) * Math.sin(toRadians(LDeg)));

  // Equation of Time (hours), small value without wrapping
  let equationOfTime = qDeg / 15 - RAhrs; // could be around +- 0.25 h
  if (equationOfTime > 12) equationOfTime -= 24;
  if (equationOfTime < -12) equationOfTime += 24;

  return { declination, equationOfTime };
}

// Hour angle calculation
function calculateHourAngle(
  latitude: number,
  declination: number,
  angle: number,
): number {
  const latitudeRad = toRadians(latitude);
  return Math.acos(
    (Math.sin(toRadians(angle)) -
      Math.sin(latitudeRad) * Math.sin(declination)) /
      (Math.cos(latitudeRad) * Math.cos(declination)),
  );
}

// Main prayer times calculation
// requires:
//  * latitude: float
//  * longitude: float
//  * date = "YYYY-MM-DD"
export function calculatePrayerTimes(
  latitude: number,
  longitude: number,
  date: string,
): { [key: string]: number } {
  const parsedDate = new Date(date);
  const julianDate = getJulianDate(parsedDate);
  const { declination, equationOfTime } = calculateSolarParameters(julianDate);

  const noon = (12 - equationOfTime - longitude / 15 + 24) % 24;

  const fajrAngle = 15;
  const ishaAngle = 15;
  const shuruqAngle = -0.833;

  const fajrHA = calculateHourAngle(latitude, declination, -fajrAngle);
  const ishaHA = calculateHourAngle(latitude, declination, -ishaAngle);
  const shuruqHA = calculateHourAngle(latitude, declination, shuruqAngle);

  const fajr = (noon - toDegrees(fajrHA) / 15 + 24) % 24;
  const sunrise = (noon - toDegrees(shuruqHA) / 15 + 24) % 24;
  const sunset = (noon + toDegrees(shuruqHA) / 15 + 24) % 24;
  const isha = (noon + toDegrees(ishaHA) / 15 + 24) % 24;

  // temp: Maghrib as an offset of sunset time
  const maghribOffset = 3 / 60; // Currently set to 3 minutes after Sunset
  const maghrib = (sunset + maghribOffset + 24) % 24;

  // Hanafi Asr
  const phi = toRadians(latitude);
  const delta = declination;

  const hAsr = Math.atan(1 / (2 + Math.tan(Math.abs(phi - delta))));

  // Hour angle for that elevation
  const asrHA = Math.acos(
    (Math.sin(hAsr) - Math.sin(phi) * Math.sin(delta)) /
      (Math.cos(phi) * Math.cos(delta)),
  );

  // Asr time = Zuhr (solar noon) + HA/15
  const asr = (noon + toDegrees(asrHA) / 15 + 24) % 24;

  return {
    Fajr: fajr,
    Shuruq: sunrise,
    Dhuhr: noon,
    Asr: asr,
    Sunset: sunset,
    Maghrib: maghrib,
    Isha: isha,
  };
}
