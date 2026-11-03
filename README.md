# 🕒 Lecture 1 · Dates & times from the API

Turn OpenWeather timestamps into dates and times **in the searched city's time zone**.

No API key needed: `sample-data.js` has trimmed copies of real responses for Stockton, London and Tokyo.

| File | Job |
| --- | --- |
| `index.html` | The page: 3 city buttons and a "your laptop vs the city" table |
| `sample-data.js` | `sampleWeather.stockton`, `.london`, `.tokyo` |
| `scripts.js` | Your TODOs: `getCityTime` and `getCityDate` |

## Run it

Right-click `index.html` → **Open with Live Server**. Open the console (Cmd+Option+J / Ctrl+Shift+J).

## Your TODOs

1. `console.log(sampleWeather.tokyo)` and find `dt`, `timezone`, `sys.sunrise`, `sys.sunset`.
2. Finish `getCityTime(unixSeconds, timezone)`.
3. Finish `getCityDate(unixSeconds, timezone)`.

**Done when:** clicking Tokyo shows sunrise in the morning and sunset in the evening in the 🌍 column, and the date is **Tue, Nov 3**.

## Remember

- The API gives **seconds**. JavaScript wants **milliseconds** → `* 1000`.
- `timezone` is the city's offset from UTC **in seconds** (Tokyo `32400` = +9 hours).
- Add the offset, then format with `timeZone: "UTC"` so the browser doesn't change it again.
- In the forecast response, the offset is at `data.city.timezone`.
