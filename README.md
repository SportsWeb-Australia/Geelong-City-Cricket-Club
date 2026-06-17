# Geelong City Sharks — Website Designs

Four mobile-friendly homepage directions for Geelong City Cricket Club ("the Sharks"),
built on Carson's RDCA / SportsWeb One template. Open **index.html** to review them all.

## Files
- `index.html` — launcher: review all four directions + the player page
- `design1-deepwater.html` — bold dark-navy editorial (flagship)
- `design2-clubhouse.html` — light, warm, family-friendly
- `design3-matchday.html` — broadcast scoreboard, live ticker
- `design4-heritage.html` — classic "since 1928", crest-led
- `player.html` — shared player profile (flip trading-card + squad picker)
- `assets/gcs-data.js` — single content source for every page (`window.GCS_DATA`)
- `assets/gcs-api.js` — ladder/fixtures/results stub (`window.GCS_API`)
- `assets/gcs-crest.svg` — placeholder crest

## Connecting to SportsWeb One (later)
Ladder, fixtures and results currently read **sample data** from `gcs-data.js`
through `gcs-api.js`. To go live, in `assets/gcs-api.js` set:

    live:   true,
    base:   "https://<your-sportsweb-one-endpoint>",
    clubId: "<geelong-city-sharks-id>"

Expected JSON shapes are documented inline in `gcs-api.js`. No page markup changes
are needed — every design and the player page already read from the API.

## To finish
- Swap `assets/gcs-crest.svg` for the official `Sharks_logo` webp.
- Replace the six **sample** players in `gcs-data.js` with the real roster
  (and add `photo:` headshot URLs — Click Sports Media cut-outs).
