// =====================================================================
// 📦 sample-data.js · trimmed OpenWeather "current weather" responses
// Real responses have more fields. These keep the ones we need today.
// All three were "fetched" at the same moment: Mon Nov 2, 2026, 19:00 UTC.
// =====================================================================

const sampleWeather = {
  stockton: {
    name: "Stockton",
    dt: 1793646000,
    timezone: -28800,
    sys: { country: "US", sunrise: 1793629860, sunset: 1793667780 },
    main: { temp: 68, feels_like: 66 },
    weather: [{ description: "clear sky", icon: "01d" }],
  },
  london: {
    name: "London",
    dt: 1793646000,
    timezone: 0,
    sys: { country: "GB", sunrise: 1793602560, sunset: 1793637060 },
    main: { temp: 50, feels_like: 47 },
    weather: [{ description: "overcast clouds", icon: "04n" }],
  },
  tokyo: {
    name: "Tokyo",
    dt: 1793646000,
    timezone: 32400,
    sys: { country: "JP", sunrise: 1793653380, sunset: 1793691840 },
    main: { temp: 54, feels_like: 53 },
    weather: [{ description: "clear sky", icon: "01n" }],
  },
};
