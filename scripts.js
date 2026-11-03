// =====================================================================
// 🕒 scripts.js · Lecture 1: Dates & times from the API
// STARTER: the page is done. Your job is STEP 1 and STEP 3.
// =====================================================================
//testing github actions!!!!!!!!!!!!!
// ---------------------------------------------------------------------
// STEP 1 · Look at the data before writing any code
// ---------------------------------------------------------------------
// TODO 1: console.log(sampleWeather.tokyo) and find these 4 numbers:
// console.log("Data for tokyo",sampleWeather.tokyo);
//   dt            → when the weather was measured (seconds since Jan 1, 1970 UTC)
//   timezone      → how far the city is from UTC, in SECONDS
//   sys.sunrise   → sunrise (seconds)
//   sys.sunset    → sunset (seconds)
// Then: what is 32400 / 3600? What about -28800 / 3600?

// ---------------------------------------------------------------------
// STEP 2 · The wrong way (done for you)
// new Date() turns the time into YOUR laptop's time zone.
// ---------------------------------------------------------------------
function getLaptopTime(unixSeconds) {
  const date = new Date(unixSeconds * 1000); // seconds → milliseconds
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function getLaptopDate(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

// ---------------------------------------------------------------------
// STEP 3 · The right way: show the CITY's clock
// ---------------------------------------------------------------------
// TODO 2: finish getCityTime
//   1. add timezone to unixSeconds, then multiply by 1000
//   2. make a new Date from that number
//   3. return date.toLocaleTimeString("en-US", { timeZone: "UTC", hour: "numeric", minute: "2-digit" })
function getCityTime(unixSeconds, timezone) {
  const date = new Date((unixSeconds + timezone) * 1000);
  return date.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", timeZone: "UTC"});
}

// TODO 3: finish getCityDate. Same 2 steps, but use toLocaleDateString with
//   { timeZone: "UTC", weekday: "short", month: "short", day: "numeric" }
function getCityDate(unixSeconds, timezone) {
  const date = new Date((unixSeconds + timezone) * 1000);
  return date.toLocaleDateString("en-US", {timeZone: "UTC", weekday: "long", month: "short", day: "numeric"});
}

// ---------------------------------------------------------------------
// STEP 4 · Show it on the page (done for you)
// ---------------------------------------------------------------------
function showCity(data) {
  document.getElementById("city-name").textContent = data.name + ", " + data.sys.country;

  document.getElementById("laptop-date").textContent = getLaptopDate(data.dt);
  document.getElementById("laptop-sunrise").textContent = getLaptopTime(data.sys.sunrise);
  document.getElementById("laptop-sunset").textContent = getLaptopTime(data.sys.sunset);
  document.getElementById("laptop-updated").textContent = getLaptopTime(data.dt);

  document.getElementById("city-date").textContent = getCityDate(data.dt, data.timezone);
  document.getElementById("city-sunrise").textContent = getCityTime(data.sys.sunrise, data.timezone);
  document.getElementById("city-sunset").textContent = getCityTime(data.sys.sunset, data.timezone);
  document.getElementById("city-updated").textContent = getCityTime(data.dt, data.timezone);
}

document.getElementById("stockton-btn").addEventListener("click", function () {
  showCity(sampleWeather.stockton);
});

document.getElementById("london-btn").addEventListener("click", function () {
  showCity(sampleWeather.london);
});

document.getElementById("tokyo-btn").addEventListener("click", function () {
  showCity(sampleWeather.tokyo);
});

// Start with Stockton, like the weather project does
showCity(sampleWeather.stockton);
