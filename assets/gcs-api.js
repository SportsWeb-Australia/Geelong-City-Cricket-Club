/* ============================================================================
   GEELONG CITY SHARKS — data API shim  (assets/gcs-api.js)
   ----------------------------------------------------------------------------
   One place that every design calls for ladder / fixtures / results.

   TODAY:  returns the PLACEHOLDER data in gcs-data.js (resolved as a Promise,
           so the calling code already behaves like a real network call).

   PRODUCTION: set GCS_API.base to your SportsWeb One endpoint and flip
           GCS_API.live = true. No page markup changes are required — every
           design reads through these same three methods.

       Expected SportsWeb One responses (JSON):
         GET {base}/ladder?grade=gca-div2   -> { grade, rows:[{pos,team,P,W,L,D,pts,us?}] }
         GET {base}/fixtures?team=sm-1       -> { rows:[{round,date,time,home,away,venue,us}] }
         GET {base}/results?team=sm-1        -> { rows:[{round,date,home,hScore,away,aScore,outcome,us}] }
   ========================================================================== */
window.GCS_API = {
  live: false,                       // ← flip to true when wired to SportsWeb One
  base: "https://api.sportsweb.com.au/v1/clubs/geelong-city",  // ← set real base
  clubId: "geelong-city-sharks",     // SportsWeb One tenant / club key

  async _get(path, fallback) {
    if (!this.live) {                // placeholder mode
      return new Promise(r => setTimeout(() => r(fallback), 120));
    }
    try {
      const res = await fetch(this.base + path, { headers:{ "x-club": this.clubId } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } catch (e) {
      console.warn("[GCS_API] live fetch failed, using placeholder:", e.message);
      return fallback;               // graceful: never break the page
    }
  },

  getLadder(grade) {
    return this._get("/ladder?grade=" + encodeURIComponent(grade || "gca-div2"),
                     window.GCS_DATA.ladder);
  },
  getFixtures(team) {
    return this._get("/fixtures?team=" + encodeURIComponent(team || "sm-1"),
                     window.GCS_DATA.fixtures);
  },
  getResults(team) {
    return this._get("/results?team=" + encodeURIComponent(team || "sm-1"),
                     window.GCS_DATA.results);
  }
};
