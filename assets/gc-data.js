/* ============================================================================
   GEELONG CITY CRICKET CLUB — shared site content   (assets/gc-data.js)
   ----------------------------------------------------------------------------
   SINGLE SOURCE OF CONTENT for all three design directions and every page.
   Content carried across from geelongcitycc.com.au (14 Jul 2026).

   FLAGS
     real:true    → carried from the live club site, safe to publish.
     sample:true  → placeholder for layout only (UI shows a "Sample" pill).

   Ladder / fixtures / results are SAMPLE — gc-api.js serves them today and
   swaps to live SportsWeb One endpoints with no page changes.
   ========================================================================== */
window.GC_DATA = {

  meta: {
    club:      "Geelong City Cricket Club",
    nick:      "Sharks",
    short:     "Geelong City CC",
    tagline:   "Home of the Sharks",
    est:       1928,
    assoc:     "Geelong Cricket Association",
    assocShort:"GCA",
    assocUrl:  "https://www.geelongca.com/",
    ground:    "Richmond Crescent, Geelong Victoria, 3220",
    groundLabel:"Richmond Crescent",
    secondGround:"Eastern Gardens (lower grades & juniors)",
    email:     "info@geelongcitycc.com.au",
    mapUrl:    "https://tinyurl.com/28ptesue",
    facebook:  "https://www.facebook.com/geelongcitycricketclub",
    instagram: "https://www.instagram.com/geelongcitycc/",
    motto:     "Facile Princeps",
    matchCentre:"https://geelongcitycc.com.au/match-centre",
    sponsorPdf:"https://geelongcitycc.com.au/lib/grbf4l/Sponsorship-Packages-mf13p8nw.pdf",
    childSafety:"https://www.cricketvictoria.com.au/child-safe-member-protection/",
    logos: {
      shield:     "../assets/logos/sharks-shield.png",
      crestNavy:  "../assets/logos/crest-navy.png",
      crestWhite: "../assets/logos/crest-white.png"
    },
    real: true
  },

  /* ---------------- ABOUT (real copy, condensed from the club site) -------- */
  about: {
    welcome: "Welcome to the Geelong City Cricket Club!",
    lead: "Whether you're a player, volunteer, sponsor, or supporter, we're thrilled to have you join our club community.",
    body: [
      "Founded in 1928, Geelong City Cricket Club boasts a rich history. Our home ground at Richmond Crescent in Geelong features a turf wicket and club-rooms, while our lower-grade and junior teams enjoy playing at the scenic Eastern Gardens.",
      "As a proud member of the Geelong Cricket Association, we field four senior men's teams and two senior women's teams. Our junior program focuses on developing great young players, participation and fun. The club fields under 17s, 15s, 13s and 11s teams and three junior girls teams — U18s, U15s and U12s. The club also runs the Woolworths Cricket Blast program including an All Girls Blasters.",
      "For more information, please reach out to us at info@geelongcitycc.com.au."
    ],
    real: true
  },

  stats: [
    { val:"1928", lbl:"Established" },
    { val:"4",    lbl:"Senior Men's Teams" },
    { val:"2",    lbl:"Senior Women's Teams" },
    { val:"7",    lbl:"Junior Teams" }
  ],

  /* ---------------- TEAM PROGRAMS (real) ---------------------------------- */
  programs: [
    {
      key:"senior-men", name:"Senior Men", icon:"ti-cricket",
      lead:"Two competitive turf teams in the Geelong Cricket Association, plus two hard wicket teams offering more flexible and social playing options.",
      body:"Welcome to the Geelong City Cricket Club's 2025/26 Senior Men's Cricket Program. Our club offers opportunities for cricketers of all abilities to compete and enjoy the game at various levels. Matches are held across local venues on weekends — whether you're looking to push your skills or simply enjoy the camaraderie of the sport.",
      coord:"Sam Cust", email:"info@geelongcitycc.com.au",
      teams:["1st XI — Turf","2nd XI — Turf","3rd XI — Hard Wicket","4th XI — Hard Wicket"],
      register:"https://www.playhq.com/cricket-australia/register/d52742",
      real:true
    },
    {
      key:"senior-women", name:"Senior Women", icon:"ti-cricket",
      lead:"Two senior women's teams offering both competitive and social playing opportunities in a supportive, inclusive community.",
      body:"Welcome to the Geelong City Cricket Club's 2025/26 Senior Women's Cricket Program. Our club provides a welcoming environment for female cricketers of all skill levels to compete and enjoy the game. Matches are held across local venues on weekends, giving players the chance to develop their skills while being part of a supportive community.",
      coord:"Melissa Rolfe", email:"info@geelongcitycc.com.au",
      teams:["1st XI","2nd XI"],
      register:"https://www.playhq.com/cricket-australia/register/9ea8f6",
      real:true
    },
    {
      key:"junior-boys", name:"Junior Boys", icon:"ti-friends",
      lead:"Teams across U17s, U15s, U13s and U11s — developing great young players, participation and fun.",
      body:"Our junior program provides boys of all ages and skill levels the chance to enjoy and develop their cricket skills. We proudly field teams in U17s, U15s, U13s and U11s.",
      coord:"Trevor Elliot", email:"info@geelongcitycc.com.au",
      teams:["Under 17s","Under 15s","Under 13s","Under 11s"],
      register:"https://www.playhq.com/cricket-australia/register/691aa1",
      real:true
    },
    {
      key:"junior-girls", name:"Junior Girls", icon:"ti-friends",
      lead:"Three dedicated junior girls teams — U18s, U15s and U12s — plus the All Girls Blasters program.",
      body:"Our junior girls program gives girls of all ages and skill levels the chance to enjoy and develop their cricket in a supportive, team-focused environment. We field U18s, U15s and U12s teams.",
      coord:"Trevor Elliot", email:"info@geelongcitycc.com.au",
      teams:["Under 18s","Under 15s","Under 12s"],
      register:"https://www.playhq.com/cricket-australia/register/8bca78",
      real:true
    }
  ],

  blast: {
    title:"Woolworths Cricket Blast",
    lead:"An exciting introduction to cricket for kids aged 5–8 — including our All Girls Blasters.",
    body:"For our youngest players, the Woolworths Cricket Blast program offers a great way to learn the basics while having fun in a supportive, team-focused setting. Geelong City runs the program including a dedicated All Girls Blasters stream.",
    url:"https://play.cricket.com.au/play/woolworths-cricket-blast",
    ages:"5–8 years",
    real:true
  },

  /* ---------------- MATCH CENTRE links (real, to club match centre) -------- */
  matchLinks: [
    { name:"Senior Men",   fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_428", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_468" },
    { name:"Senior Women", fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_410", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_463" },
    { name:"Junior Boys",  fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_439", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_476" },
    { name:"Junior Girls", fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_434", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_471" }
  ],

  /* ---------------- LADDER / FIXTURES / RESULTS — SAMPLE ------------------- */
  ladder: {
    grade:"GCA — Senior Men (illustrative)",
    sample:true,
    rows:[
      { pos:1, team:"Bell Park",     P:10, W:8, L:2, D:0, pts:34 },
      { pos:2, team:"East Belmont",  P:10, W:7, L:2, D:1, pts:31 },
      { pos:3, team:"Geelong City",  P:10, W:7, L:3, D:0, pts:30, us:true },
      { pos:4, team:"Highton",       P:10, W:6, L:4, D:0, pts:26 },
      { pos:5, team:"Lara",          P:10, W:5, L:5, D:0, pts:22 },
      { pos:6, team:"Marshall",      P:10, W:4, L:6, D:0, pts:18 },
      { pos:7, team:"Newcomb Power", P:10, W:3, L:7, D:0, pts:14 },
      { pos:8, team:"Leopold",       P:10, W:1, L:9, D:0, pts:6  }
    ]
  },
  fixtures: {
    sample:true,
    rows:[
      { round:"Round 11", date:"Sat 11 Oct", time:"12:30pm", home:"Geelong City", away:"Highton",      venue:"Richmond Crescent" },
      { round:"Round 12", date:"Sat 18 Oct", time:"12:30pm", home:"Lara",         away:"Geelong City", venue:"Lara Recreation Reserve" },
      { round:"Round 13", date:"Sat 25 Oct", time:"12:30pm", home:"Geelong City", away:"Bell Park",    venue:"Richmond Crescent" },
      { round:"Round 14", date:"Sat 1 Nov",  time:"12:30pm", home:"Marshall",     away:"Geelong City", venue:"Marshall Reserve" }
    ]
  },
  results: {
    sample:true,
    rows:[
      { round:"Round 10", date:"Sat 4 Oct",  home:"Geelong City",  hScore:"7/214", away:"East Belmont", aScore:"189",   outcome:"Won by 25 runs",  win:true  },
      { round:"Round 9",  date:"Sat 27 Sep", home:"Newcomb Power", hScore:"142",   away:"Geelong City", aScore:"4/146", outcome:"Won by 6 wickets",win:true  },
      { round:"Round 8",  date:"Sat 20 Sep", home:"Geelong City",  hScore:"176",   away:"Bell Park",    aScore:"5/177", outcome:"Lost by 5 wickets",win:false }
    ]
  },

  /* ---------------- NEWS — SAMPLE ----------------------------------------- */
  news: [
    { tag:"Match Preview", date:"8 Oct",  sample:true, title:"Sharks lock in Round 11 home blockbuster at Richmond Crescent",
      blurb:"The First XI return home looking to close the gap on the top two." },
    { tag:"Club",          date:"1 Oct",  sample:true, title:"2025/26 registrations now open across all grades",
      blurb:"Senior men, senior women and all junior age groups can register now through PlayHQ. New players welcome." },
    { tag:"Juniors",       date:"24 Sep", sample:true, title:"All Girls Cricket Blast returns for summer",
      blurb:"Our Woolworths Cricket Blast program kicks off again for 5–8 year olds, with a dedicated All Girls stream." }
  ],

  /* ---------------- COMMUNICATIONS (club-side, modelled on BHRDCA) --------- */
  channels: [
    { name:"Email & Club Newsletter", icon:"ti-mail", cadence:"As needed · low volume", rec:true,
      what:"Official club communication — registration, season information, training times, important notices and event invitations.",
      best:"Things you'll want a record of.",
      optin:"Register with the club through PlayHQ and keep your email current." },
    { name:"SMS / Text", icon:"ti-message-2", cadence:"Rare · urgent only", rec:true,
      what:"Time-critical alerts only — ground closures and washouts, last-minute fixture or venue changes, and team selection messages.",
      best:"\"You need to know this today\" moments.",
      optin:"Keep a current mobile number with your team manager." },
    { name:"Facebook & Instagram", icon:"ti-brand-instagram", cadence:"Regular · public", rec:false,
      what:"Match-day photos, results highlights, celebrations, club events and the wider Geelong cricket conversation.",
      best:"The fun, the photos and the community feel.",
      optin:"Follow @geelongcitycc on Instagram and Geelong City Cricket Club on Facebook." },
    { name:"Website & PlayHQ", icon:"ti-world", cadence:"Always on", rec:false,
      what:"Fixtures, results, ladders and live scores on PlayHQ, plus club news and information on this site — any time, no sign-up.",
      best:"Checking scores, draws and ladders on the go.",
      optin:"Add this site to your home screen for one-tap access." },
    { name:"Team Chat Groups", icon:"ti-users", cadence:"Match week", rec:true,
      what:"Your team's own group chat — selection, transport, who's bringing the afternoon tea, and the Saturday morning weather call.",
      best:"Day-to-day team logistics.",
      optin:"Ask your team manager to add you at the start of the season." },
    { name:"Club Notice Board", icon:"ti-clipboard-text", cadence:"In-season", rec:false,
      what:"Club-rooms at Richmond Crescent — training times, social events, working bees, presentation night and Shark Shop news.",
      best:"Anything happening at the ground.",
      optin:"Drop in on a training night." }
  ],
  audiences: [
    { who:"Senior Players",  note:"Keep your details current with your team manager so urgent changes reach you on match day.", tags:["SMS","Team Chat","Email","PlayHQ"] },
    { who:"Parents & Juniors", note:"Parents should be on club email and SMS, and check socials for washouts before heading out.", tags:["Email","SMS","Social","PlayHQ"] },
    { who:"Coaches, Managers & Volunteers", note:"You're the ones relaying changes — switch everything on and watch club news.", tags:["Email","SMS","Team Chat","News"] },
    { who:"Family & Supporters", note:"Following from the sidelines? Social and PlayHQ keep you across scores and highlights.", tags:["Social","PlayHQ","Website"] }
  ],
  commSteps: [
    { title:"Register through PlayHQ", body:"Your email and mobile join the club lists for official email and urgent SMS." },
    { title:"Join your team chat", body:"Ask your team manager to add you at the start of the season." },
    { title:"Follow the socials", body:"Facebook and Instagram for photos, results and community news." },
    { title:"Bookmark the Match Centre", body:"Keep fixtures, results and ladders one tap away all season." }
  ],

  /* ---------------- SPONSORS (real names & links) -------------------------- */
  sponsorsIntro:"Our sponsors are an essential part of our club's success, helping us provide the best experience for our players and community. We encourage all club members and families to support our sponsors whenever possible.",
  sponsors: [
    { name:"QA Electrical",           url:"https://www.qaelectrical.com.au/" },
    { name:"Kings Funerals",          url:"" },
    { name:"ONBA",                    url:"https://onba.com.au/" },
    { name:"Elephant & Castle",       url:"https://elephantandcastle.com.au/" },
    { name:"SB Heavy Haulage",        url:"https://sbheavyhaulage.com.au/" },
    { name:"Bellarine Cabinets",      url:"https://bellarinecabinets.com.au/" },
    { name:"Pakington Garage",        url:"https://pakingtongarage.com.au/" },
    { name:"Daisy's Garden Supplies", url:"https://daisysgarden.com.au/" },
    { name:"Skin Screen Clinic",      url:"https://skinscreenclinic.com.au/" },
    { name:"Kitchen Artistry Geelong",url:"https://www.facebook.com/KitchenArtistryGeelong" },
    { name:"Ritchie Bros.",           url:"https://www.rbauction.com/" },
    { name:"Lyons Construction",      url:"https://www.lyonsconstruction.com.au/" }
  ],
  partners: [
    { name:"Geelong Cricket Association", url:"https://www.geelongca.com/" },
    { name:"Cricket Victoria",            url:"https://www.cricketvictoria.com.au/" },
    { name:"Cricket Australia",           url:"https://www.cricket.com.au/" },
    { name:"Good Sports",                 url:"https://goodsports.com.au/" }
  ],

  /* ---------------- CONTACTS (real) --------------------------------------- */
  contacts: [
    { role:"President",          name:"Scott Lindsay", email:"info@geelongcitycc.com.au", real:true },
    { role:"Senior Men",         name:"Sam Cust",      email:"info@geelongcitycc.com.au", real:true },
    { role:"Senior Women",       name:"Melissa Rolfe", email:"info@geelongcitycc.com.au", real:true },
    { role:"Junior Coordinator", name:"Trevor Elliot", email:"info@geelongcitycc.com.au", real:true }
  ],

  registerLinks: [
    { name:"Senior Men",   url:"https://www.playhq.com/cricket-australia/register/d52742" },
    { name:"Senior Women", url:"https://www.playhq.com/cricket-australia/register/9ea8f6" },
    { name:"Junior Boys",  url:"https://www.playhq.com/cricket-australia/register/691aa1" },
    { name:"Junior Girls", url:"https://www.playhq.com/cricket-australia/register/8bca78" },
    { name:"Woolworths Cricket Blast", url:"https://play.cricket.com.au/play/woolworths-cricket-blast" }
  ]
};
