import { toDegrees, toRadians, getJulianDate } from "./utility";

// Solar parameters calculation
function calculateSolarParameters(julianDate: number): {
  declination: number;
  equationOfTime: number;
} {
  const D = julianDate - 2451545.0;
  const g = toRadians((357.529 + 0.98560028 * D) % 360);
  const q = (280.459 + 0.98564736 * D) % 360;
  const L = (q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) % 360;
  const epsilon = toRadians(23.439 - 0.00000036 * D);

  const RA =
    toDegrees(
      Math.atan2(
        Math.cos(epsilon) * Math.sin(toRadians(L)),
        Math.cos(toRadians(L)),
      ),
    ) / 15;
  const declination = Math.asin(Math.sin(epsilon) * Math.sin(toRadians(L)));

  const equationOfTime = (q / 15 - RA + 24) % 24;
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

  // --- Hanafi Asr ---
  const phi = toRadians(latitude);
  const delta = declination;

  // Hanafi: shadow = 2×object + zenith-shadow => cot(h) = 2 + tan(|φ-δ|)
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
