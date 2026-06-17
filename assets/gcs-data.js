/* ============================================================================
   GEELONG CITY SHARKS — site content data  (assets/gcs-data.js)
   ----------------------------------------------------------------------------
   SINGLE SOURCE OF CONTENT for all four design directions and the player page.
   Pages render FROM this file so copy is edited in ONE place.

   Later, each block becomes a SportsWeb One / Supabase collection. The ladder,
   fixtures and results blocks below are PLACEHOLDERS — gcs-api.js reads them
   today and will swap to live SportsWeb One endpoints with no page changes.
   See // CONNECT notes throughout.

   FLAGS
     real:true     → carried from geelongcitycc.com.au, safe to use.
     sample:true   → placeholder for layout only (UI shows a "Sample" pill).
   ========================================================================== */
window.GCS_DATA = {

  meta: {
    club:     "Geelong City Cricket Club",
    nick:     "Sharks",
    short:    "Geelong City Sharks",
    est:      1928,
    assoc:    "Geelong Cricket Association",
    assocShort:"GCA",
    grade:    "GCA Division 2",
    ground:   "Richmond Crescent, East Geelong VIC 3219",
    groundLabel:"Richmond Reserve",
    secondGround:"Eastern Gardens (lower grades & juniors)",
    email:    "info@geelongcitycc.com.au",
    mapUrl:   "https://tinyurl.com/28ptesue",
    facebook: "https://www.facebook.com/geelongcitycricketclub",
    instagram:"https://www.instagram.com/geelongcitycc/",
    crest:    "assets/gcs-crest.svg",   // CONNECT: swap for official Sharks_logo webp
    real:true
  },

  /* About copy — condensed from geelongcitycc.com.au (real). */
  about: {
    welcome:"Home of the Sharks since 1928.",
    body:"Geelong City Cricket Club is a community-focused, family-oriented club playing in the Geelong Cricket Association. Our home at Richmond Crescent features a turf wicket and clubrooms, while lower grades and juniors play at the scenic Eastern Gardens. We welcome players of all ages and abilities.",
    real:true
  },

  /* Headline stats for hero strips. season is illustrative. */
  stats: [
    { ic:"ti-trophy",   val:"6",    lbl:"Senior Teams" },
    { ic:"ti-friends",  val:"7",    lbl:"Junior Teams" },
    { ic:"ti-calendar", val:"1928", lbl:"Established" },
    { ic:"ti-map-pin",  val:"GCA",  lbl:"Division 2" }
  ],

  /* TEAMS — structure is real; rosters/links are placeholders.
     // CONNECT later: SportsWeb One "Teams" collection / Supabase `teams` table. */
  teams: [
    { key:"sm-1", name:"Senior Men — 1st XI", group:"Senior Men", surface:"Turf",
      grade:"GCA Division 2", coord:"Sam Cust",
      register:"https://www.playhq.com/cricket-australia/register/d52742", real:true },
    { key:"sm-2", name:"Senior Men — 2nd XI", group:"Senior Men", surface:"Turf",
      grade:"GCA Division 2 Reserves", coord:"Sam Cust",
      register:"https://www.playhq.com/cricket-australia/register/d52742", real:true },
    { key:"sm-3", name:"Senior Men — 3rd XI", group:"Senior Men", surface:"Hard wicket",
      grade:"GCA Hard Wicket", coord:"Sam Cust",
      register:"https://www.playhq.com/cricket-australia/register/d52742", real:true },
    { key:"sm-4", name:"Senior Men — 4th XI", group:"Senior Men", surface:"Hard wicket",
      grade:"GCA Hard Wicket", coord:"Sam Cust",
      register:"https://www.playhq.com/cricket-australia/register/d52742", real:true },
    { key:"sw-1", name:"Senior Women — 1st XI", group:"Senior Women", surface:"Turf",
      grade:"GCA Women's", coord:"Melissa Rolfe",
      register:"https://www.playhq.com/cricket-australia/register/9ea8f6", real:true },
    { key:"sw-2", name:"Senior Women — 2nd XI", group:"Senior Women", surface:"Hard wicket",
      grade:"GCA Women's", coord:"Melissa Rolfe",
      register:"https://www.playhq.com/cricket-australia/register/9ea8f6", real:true },
    { key:"jb",   name:"Junior Boys — U17 / U15 / U13 / U11", group:"Juniors", surface:"Mixed",
      grade:"GCA Juniors", coord:"Trevor Elliot",
      register:"https://www.playhq.com/cricket-australia/register/691aa1", real:true },
    { key:"jg",   name:"Junior Girls — U18 / U15 / U12", group:"Juniors", surface:"Mixed",
      grade:"GCA Junior Girls", coord:"Trevor Elliot",
      register:"https://www.playhq.com/cricket-australia/register/8bca78", real:true },
    { key:"blast",name:"Woolworths Cricket Blast (5–8 yrs)", group:"Juniors", surface:"Entry",
      grade:"incl. All-Girls Blasters", coord:"Trevor Elliot",
      register:"https://play.cricket.com.au/play/woolworths-cricket-blast", real:true }
  ],

  /* ==========================================================================
     LADDER — PLACEHOLDER. Sharks row flagged. Replace via SportsWeb One.
     // CONNECT: GET /api/ladder?grade=gca-div2  →  [{pos,team,P,W,L,D,pts}]
     ========================================================================== */
  ladder: {
    grade:"GCA Division 2 — Senior Men",
    sample:true,
    rows:[
      { pos:1, team:"Bell Park",        P:10, W:8, L:2, D:0, pts:34 },
      { pos:2, team:"East Belmont",     P:10, W:7, L:2, D:1, pts:31 },
      { pos:3, team:"Geelong City",     P:10, W:7, L:3, D:0, pts:30, us:true },
      { pos:4, team:"Highton",          P:10, W:6, L:4, D:0, pts:26 },
      { pos:5, team:"Lara",             P:10, W:5, L:5, D:0, pts:22 },
      { pos:6, team:"Marshall",         P:10, W:4, L:6, D:0, pts:18 },
      { pos:7, team:"Newcomb Power",    P:10, W:3, L:7, D:0, pts:14 },
      { pos:8, team:"Leopold",          P:10, W:1, L:9, D:0, pts:6  }
    ]
  },

  /* FIXTURES — PLACEHOLDER upcoming matches.
     // CONNECT: GET /api/fixtures?team=sm-1  →  [{round,date,time,home,away,venue}] */
  fixtures: {
    sample:true,
    rows:[
      { round:"Round 11", date:"Sat 11 Oct", time:"12:30pm", home:"Geelong City", away:"Highton",      venue:"Richmond Reserve", us:"home" },
      { round:"Round 12", date:"Sat 18 Oct", time:"12:30pm", home:"Lara",         away:"Geelong City", venue:"Lara Recreation Reserve", us:"away" },
      { round:"Round 13", date:"Sat 25 Oct", time:"12:30pm", home:"Geelong City", away:"Bell Park",    venue:"Richmond Reserve", us:"home" },
      { round:"Round 14", date:"Sat  1 Nov", time:"12:30pm", home:"Marshall",     away:"Geelong City", venue:"Marshall Reserve", us:"away" }
    ]
  },

  /* RESULTS — PLACEHOLDER recent results.
     // CONNECT: GET /api/results?team=sm-1  →  [{round,date,home,hScore,away,aScore,outcome}] */
  results: {
    sample:true,
    rows:[
      { round:"Round 10", date:"Sat 4 Oct",  home:"Geelong City", hScore:"7/214", away:"East Belmont", aScore:"189",  outcome:"Won by 25 runs", us:"win" },
      { round:"Round 9",  date:"Sat 27 Sep", home:"Newcomb Power",hScore:"142",   away:"Geelong City", aScore:"4/146",outcome:"Won by 6 wkts",  us:"win" },
      { round:"Round 8",  date:"Sat 20 Sep", home:"Geelong City", hScore:"176",   away:"Bell Park",    aScore:"5/177",outcome:"Lost by 5 wkts", us:"loss" }
    ]
  },

  /* NEWS — PLACEHOLDER. // CONNECT: SportsWeb One "News" collection. */
  news: [
    { title:"Sharks lock in Round 11 home blockbuster at Richmond Reserve", tag:"Match Preview", date:"8 Oct", sample:true,
      blurb:"First XI return home sitting third on the GCA Division 2 ladder, looking to close the gap on the top two." },
    { title:"2025/26 registrations now open across all grades", tag:"Club", date:"1 Oct", sample:true,
      blurb:"Senior men, senior women and all junior age groups can register now through PlayHQ. New players welcome." },
    { title:"All-Girls Cricket Blast returns for summer", tag:"Juniors", date:"24 Sep", sample:true,
      blurb:"Our Woolworths Cricket Blast program kicks off again for 5–8 year olds, with a dedicated All-Girls stream." }
  ],

  /* SPONSORS — real names carried from geelongcitycc.com.au.
     // CONNECT: SportsWeb One "Sponsors" collection (logos to be added). */
  sponsors: [
    { name:"QA Electrical",        url:"https://www.qaelectrical.com.au/" },
    { name:"Kings Funerals",       url:"#" },
    { name:"ONBA",                 url:"https://onba.com.au/" },
    { name:"Elephant & Castle",    url:"https://elephantandcastle.com.au/" },
    { name:"SB Heavy Haulage",     url:"https://sbheavyhaulage.com.au/" },
    { name:"Bellarine Cabinets",   url:"https://bellarinecabinets.com.au/" },
    { name:"Pakington Garage",     url:"https://pakingtongarage.com.au/" },
    { name:"Daisy's Garden Supplies",url:"https://daisysgarden.com.au/" },
    { name:"Skin Screen Clinic",   url:"https://skinscreenclinic.com.au/" },
    { name:"Lyons Construction",   url:"https://www.lyonsconstruction.com.au/" }
  ],

  /* CONTACTS — real (carried from site). */
  contacts: [
    { role:"President",            name:"Scott Lindsay",  email:"info@geelongcitycc.com.au", real:true },
    { role:"Senior Men",           name:"Sam Cust",       email:"info@geelongcitycc.com.au", real:true },
    { role:"Senior Women",         name:"Melissa Rolfe",  email:"info@geelongcitycc.com.au", real:true },
    { role:"Junior Coordinator",   name:"Trevor Elliot",  email:"info@geelongcitycc.com.au", real:true }
  ],

  /* PLAYERS — illustrative sample profiles for the player page (layout only).
     // CONNECT: SportsWeb One "Players" / PlayHQ stats. photo is a placeholder. */
  playersNote:"Sample player profiles for layout. Real players, photos and season stats to be supplied by the club / PlayHQ.",
  players: [
    { key:"j-marsh", name:"Jack Marsh", grade:"GCA Division 2", team:"Senior Men — 1st XI",
      role:"Opening Batter", bats:"Right-hand bat", bowls:"Right-arm medium", number:12, born:"2000", town:"East Geelong",
      rarity:"Captain", season:"2024/25", photo:"", sample:true,
      bat:{ M:11, Runs:512, HS:"118*", Avg:51.2, SR:78.4, "50s":4, "100s":1 },
      bowl:{ M:11, Wkts:5, Best:"2/19", Avg:28.4, Econ:4.2 } },
    { key:"p-rolfe", name:"Priya Rolfe", grade:"GCA Women's", team:"Senior Women — 1st XI",
      role:"All-rounder", bats:"Left-hand bat", bowls:"Right-arm off-spin", number:7, born:"2002", town:"Newtown",
      rarity:"Player of the Year", season:"2024/25", photo:"", sample:true,
      bat:{ M:10, Runs:298, HS:"74", Avg:33.1, SR:92.0, "50s":2, "100s":0 },
      bowl:{ M:10, Wkts:18, Best:"4/21", Avg:14.6, Econ:3.8 } },
    { key:"d-okafor", name:"Daniel Okafor", grade:"GCA Division 2", team:"Senior Men — 1st XI",
      role:"Fast Bowler", bats:"Right-hand bat", bowls:"Right-arm fast", number:23, born:"1999", town:"Thomson",
      rarity:"Leading Wicket-Taker", season:"2024/25", photo:"", sample:true,
      bat:{ M:11, Runs:96, HS:"31", Avg:12.0, SR:88.0, "50s":0, "100s":0 },
      bowl:{ M:11, Wkts:29, Best:"5/24", Avg:13.1, Econ:3.4 } },
    { key:"e-nguyen", name:"Emily Nguyen", grade:"GCA Women's", team:"Senior Women — 1st XI",
      role:"Wicket-keeper Batter", bats:"Right-hand bat", bowls:"-", number:1, born:"2003", town:"East Geelong",
      rarity:"Most Dismissals", season:"2024/25", photo:"", sample:true,
      bat:{ M:10, Runs:241, HS:"63", Avg:30.1, SR:81.4, "50s":1, "100s":0 } },
    { key:"t-elliot", name:"Toby Elliot", grade:"GCA Juniors", team:"Junior Boys — U17",
      role:"Top-order Batter", bats:"Right-hand bat", bowls:"Right-arm leg-spin", number:34, born:"2009", town:"East Geelong",
      rarity:"Rising Star", season:"2024/25", photo:"", sample:true,
      bat:{ M:8, Runs:187, HS:"58", Avg:26.7, SR:74.0, "50s":1, "100s":0 },
      bowl:{ M:8, Wkts:9, Best:"3/12", Avg:16.2, Econ:4.0 } },
    { key:"s-kaur", name:"Simran Kaur", grade:"GCA Junior Girls", team:"Junior Girls — U15",
      role:"All-rounder", bats:"Left-hand bat", bowls:"Left-arm orthodox", number:18, born:"2011", town:"Whittington",
      rarity:"Most Improved", season:"2024/25", photo:"", sample:true,
      bat:{ M:7, Runs:132, HS:"41", Avg:22.0, SR:69.5, "50s":0, "100s":0 },
      bowl:{ M:7, Wkts:11, Best:"3/9", Avg:11.8, Econ:3.1 } }
  ]
};
