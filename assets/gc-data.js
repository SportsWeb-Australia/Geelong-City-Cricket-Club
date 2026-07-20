/* ============================================================================
   GEELONG CITY CRICKET CLUB — site data          (assets/gc-data.js)
   ----------------------------------------------------------------------------
   Single source of content for every page. Same pattern as the RDCA build's
   site-data.js: pages read from window.GCC and render themselves.

   FLAGS
     real   → carried from geelongcitycc.com.au (safe to publish)
     sample → placeholder for layout only (UI shows a "Sample" pill)

   CONNECT → SportsWeb One: ladder / fixtures / results are the only sample
   blocks. Swap them for live feeds; no page markup changes required.
   ========================================================================== */
window.GCC = {

  club: {
    name:      "Geelong City Cricket Club",
    short:     "Geelong City CC",
    nick:      "Sharks",
    tagline:   "Home of the Sharks",
    est:       1928,
    motto:     "Facile Princeps",
    assoc:     "Geelong Cricket Association",
    assocShort:"GCA",
    assocUrl:  "https://www.geelongca.com/",
    ground:    "Richmond Crescent, Geelong Victoria, 3220",
    groundShort:"Richmond Crescent, Geelong",
    ground2:   "Eastern Gardens",
    email:     "info@geelongcitycc.com.au",
    map:       "https://tinyurl.com/28ptesue",
    facebook:  "https://www.facebook.com/geelongcitycricketclub",
    instagram: "https://www.instagram.com/geelongcitycc/",
    matchCentre:"https://geelongcitycc.com.au/match-centre",
    sponsorPdf:"https://geelongcitycc.com.au/lib/grbf4l/Sponsorship-Packages-mf13p8nw.pdf",
    childSafety:"https://www.cricketvictoria.com.au/child-safe-member-protection/",
    blastUrl:  "https://play.cricket.com.au/play/woolworths-cricket-blast"
  },

  /* ==========================================================================
     PHOTOS — drop files into assets/img/ and put the filename here.
     Leave a value as "" and the site falls back to the navy gradient it uses
     today, so nothing ever looks broken. See PHOTOS.md for sizes.
     ========================================================================== */
  photos: {
    hero:        "",   // e.g. "team-photo.jpg"  — full-width behind the hero
    about:       "",   // club-rooms / ground shot beside the About copy
    seniors:     "",   // banner on the Senior Cricket page
    juniors:     "",   // banner on the Junior Cricket page
    blast:       "",   // banner on the Cricket Blast page
    committee:   "",   // banner on the Committee page
    contact:     ""    // ground shot on the Contact page
  },

  /* ---- HERO / HOME ------------------------------------------------------ */
  hero: {
    eyebrow: "Est. 1928 · Geelong Cricket Association",
    h1a: "GEELONG CITY",
    h1b: "CRICKET CLUB",
    lead: "Home of the Sharks. A community-focused, family-friendly club at Richmond Crescent — four senior men's teams, two senior women's teams and a thriving junior program. Players of all ages and abilities welcome."
  },

  stats: [
    { val:"1928", lbl:"Established" },
    { val:"4",    lbl:"Senior Men's Teams" },
    { val:"2",    lbl:"Senior Women's Teams" },
    { val:"7",    lbl:"Junior Teams" }
  ],

  /* ---- ABOUT (real copy) ------------------------------------------------ */
  about: {
    welcome: "Welcome to the Geelong City Cricket Club!",
    lead: "Whether you're a player, volunteer, sponsor, or supporter, we're thrilled to have you join our club community.",
    paras: [
      "Founded in 1928, Geelong City Cricket Club boasts a rich history. Our home ground at Richmond Crescent in Geelong features a turf wicket and club-rooms, while our lower-grade and junior teams enjoy playing at the scenic Eastern Gardens.",
      "As a proud member of the Geelong Cricket Association, we field four senior men's teams and two senior women's teams. Our junior program focuses on developing great young players, participation and fun. The club fields under 17s, 15s, 13s and 11s teams and three junior girls teams — U18s, U15s and U12s. The club also runs the Woolworths Cricket Blast program including an All Girls Blasters.",
      "For more information, please reach out to us at info@geelongcitycc.com.au."
    ]
  },

  /* ---- PROGRAM PILLARS (home cards) ------------------------------------- */
  pillars: [
    { key:"senior-men",   name:"Senior Men",    icon:"ti-cricket",
      blurb:"Two turf teams in the GCA plus two hard wicket teams — competitive and social cricket every weekend.",
      href:"seniors.html#senior-men" },
    { key:"senior-women", name:"Senior Women",  icon:"ti-ball-baseball",
      blurb:"Two senior women's teams offering competitive and social opportunities in a supportive, inclusive environment.",
      href:"seniors.html#senior-women" },
    { key:"juniors",      name:"Juniors",       icon:"ti-friends",
      blurb:"U17s, U15s, U13s and U11s boys plus U18s, U15s and U12s girls — developing players, participation and fun.",
      href:"juniors.html" },
    { key:"blast",        name:"Cricket Blast", icon:"ti-mood-smile",
      blurb:"Woolworths Cricket Blast for ages 5–8, including a dedicated All Girls Blasters stream.",
      href:"cricket-blast.html" }
  ],

  /* ---- SENIOR PROGRAMS (real copy) -------------------------------------- */
  seniors: [
    { key:"senior-men", name:"Senior Men's Cricket", coord:"Sam Cust",
      lead:"We field two competitive turf teams in the Geelong Cricket Association, providing a high standard of cricket, as well as two hard wicket teams, offering more flexible and social playing options.",
      body:"Welcome to the Geelong City Cricket Club's 2025/26 Senior Men's Cricket Program. Our club offers opportunities for cricketers of all abilities to compete and enjoy the game at various levels. Matches are held across local venues on weekends, providing something for everyone — whether you're looking to push your skills or simply enjoy the camaraderie of the sport.",
      teams:[
        { name:"1st XI",  surface:"Turf",        grade:"GCA" },
        { name:"2nd XI",  surface:"Turf",        grade:"GCA" },
        { name:"3rd XI",  surface:"Hard Wicket", grade:"GCA" },
        { name:"4th XI",  surface:"Hard Wicket", grade:"GCA" }
      ],
      register:"https://www.playhq.com/cricket-australia/register/d52742",
      fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_428",
      ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_468" },

    { key:"senior-women", name:"Senior Women's Cricket", coord:"Melissa Rolfe",
      lead:"We proudly field two senior women's teams, offering both competitive and social playing opportunities.",
      body:"Welcome to the Geelong City Cricket Club's 2025/26 Senior Women's Cricket Program. Our club provides a welcoming environment for female cricketers of all skill levels to compete and enjoy the game. Matches are held across local venues on weekends, giving players the chance to develop their skills while being part of a supportive and inclusive community.",
      teams:[
        { name:"1st XI", surface:"Turf",        grade:"GCA Women's" },
        { name:"2nd XI", surface:"Hard Wicket", grade:"GCA Women's" }
      ],
      register:"https://www.playhq.com/cricket-australia/register/9ea8f6",
      fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_410",
      ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_463" }
  ],

  /* ---- JUNIORS (real copy) ---------------------------------------------- */
  juniors: {
    coord:"Trevor Elliot",
    lead:"Our program provides boys and girls of all ages and skill levels the chance to enjoy and develop their cricket skills.",
    body:"Welcome to the Geelong City Cricket Club 2025/26 Junior Cricket Program. We proudly field teams in U17s, U15s, U13s and U11s, along with dedicated U18, U15 and U12 girls' teams. For more details, reach out to our Junior Coordinator, Trevor Elliot, and discover how your child can be a part of the Geelong City Cricket Club family.",
    boys:  [ "Under 17s", "Under 15s", "Under 13s", "Under 11s" ],
    girls: [ "Under 18s", "Under 15s", "Under 12s" ],
    registerBoys:"https://www.playhq.com/cricket-australia/register/691aa1",
    registerGirls:"https://www.playhq.com/cricket-australia/register/8bca78",
    fixturesBoys:"https://geelongcitycc.com.au/match-centre?anchorElement=element_439",
    fixturesGirls:"https://geelongcitycc.com.au/match-centre?anchorElement=element_434",
    ladderBoys:"https://geelongcitycc.com.au/match-centre?anchorElement=element_476",
    ladderGirls:"https://geelongcitycc.com.au/match-centre?anchorElement=element_471"
  },

  blast: {
    lead:"An exciting introduction to cricket for kids aged 5–8.",
    body:"For our youngest players, the Woolworths Cricket Blast program offers an exciting introduction to cricket for kids aged 5–8. It's a great way to learn the basics while having fun in a supportive, team-focused setting. Geelong City runs the program including a dedicated All Girls Blasters stream.",
    points:[
      { icon:"ti-mood-smile",   h:"Fun first",         p:"Small groups, plenty of hits, and a focus on enjoying the game." },
      { icon:"ti-ball-baseball",h:"Skills for life",   p:"Batting, bowling and fielding basics taught by our coaches and volunteers." },
      { icon:"ti-users",        h:"All Girls Blasters",p:"A dedicated stream so girls can start their cricket alongside their mates." },
      { icon:"ti-arrow-up-right",h:"A pathway",        p:"A natural step into our U11s and junior girls teams when they're ready." }
    ]
  },

  /* ---- MATCH CENTRE ------------------------------------------------------ */
  matchLinks: [
    { name:"Senior Men",   fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_428", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_468" },
    { name:"Senior Women", fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_410", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_463" },
    { name:"Junior Boys",  fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_439", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_476" },
    { name:"Junior Girls", fixtures:"https://geelongcitycc.com.au/match-centre?anchorElement=element_434", ladder:"https://geelongcitycc.com.au/match-centre?anchorElement=element_471" }
  ],

  /* ---- SAMPLE LADDER / FIXTURES / RESULTS -------------------------------- */
  ladder: { sample:true, grade:"GCA — Senior Men (illustrative)", rows:[
    { pos:1, team:"Bell Park",     P:10, W:8, L:2, D:0, pts:34 },
    { pos:2, team:"East Belmont",  P:10, W:7, L:2, D:1, pts:31 },
    { pos:3, team:"Geelong City",  P:10, W:7, L:3, D:0, pts:30, us:true },
    { pos:4, team:"Highton",       P:10, W:6, L:4, D:0, pts:26 },
    { pos:5, team:"Lara",          P:10, W:5, L:5, D:0, pts:22 },
    { pos:6, team:"Marshall",      P:10, W:4, L:6, D:0, pts:18 },
    { pos:7, team:"Newcomb Power", P:10, W:3, L:7, D:0, pts:14 },
    { pos:8, team:"Leopold",       P:10, W:1, L:9, D:0, pts:6  }
  ]},
  fixtures: { sample:true, rows:[
    { round:"Round 11", date:"Sat 11 Oct", time:"12:30pm", home:"Geelong City", away:"Highton",      venue:"Richmond Crescent" },
    { round:"Round 12", date:"Sat 18 Oct", time:"12:30pm", home:"Lara",         away:"Geelong City", venue:"Lara Recreation Reserve" },
    { round:"Round 13", date:"Sat 25 Oct", time:"12:30pm", home:"Geelong City", away:"Bell Park",    venue:"Richmond Crescent" },
    { round:"Round 14", date:"Sat 1 Nov",  time:"12:30pm", home:"Marshall",     away:"Geelong City", venue:"Marshall Reserve" }
  ]},
  results: { sample:true, rows:[
    { round:"Round 10", date:"Sat 4 Oct",  home:"Geelong City",  hs:"7/214", away:"East Belmont", as:"189",   out:"Won by 25 runs",   win:true },
    { round:"Round 9",  date:"Sat 27 Sep", home:"Newcomb Power", hs:"142",   away:"Geelong City", as:"4/146", out:"Won by 6 wickets", win:true },
    { round:"Round 8",  date:"Sat 20 Sep", home:"Geelong City",  hs:"176",   away:"Bell Park",    as:"5/177", out:"Lost by 5 wickets",win:false }
  ]},

  /* ---- TICKER (sample) --------------------------------------------------- */
  ticker: [
    { grade:"1st XI",  txt:"Geelong City 7/214 def East Belmont 189",  stat:"RESULT" },
    { grade:"Women's", txt:"Geelong City 4/146 def Newcomb Power 142", stat:"RESULT" },
    { grade:"U17",     txt:"Round 11 v Highton — Sat 11 Oct, 12:30pm", stat:"NEXT" },
    { grade:"Club",    txt:"2025/26 registrations open across all grades", stat:"NOTICE" },
    { grade:"Blast",   txt:"Woolworths Cricket Blast — ages 5–8 — enrolling now", stat:"NOTICE" }
  ],

  /* ---- NEWS (sample) ----------------------------------------------------- */
  news: [
    { tag:"Match Preview", date:"8 Oct",  sample:true, img:"",
      title:"Sharks lock in Round 11 home blockbuster at Richmond Crescent",
      blurb:"The First XI return home sitting third on the ladder, looking to close the gap on the top two." },
    { tag:"Club", date:"1 Oct", sample:true, img:"",
      title:"2025/26 registrations now open across all grades",
      blurb:"Senior men, senior women and all junior age groups can register now through PlayHQ. New players welcome." },
    { tag:"Juniors", date:"24 Sep", sample:true, img:"",
      title:"All Girls Cricket Blast returns for summer",
      blurb:"Our Woolworths Cricket Blast program kicks off again for 5–8 year olds, with a dedicated All Girls stream." },
    { tag:"Club", date:"18 Sep", sample:true, img:"",
      title:"Shark Shop opening soon",
      blurb:"Club apparel and playing kit will be available through the Shark Shop — details to follow." }
  ],

  /* ---- COMMUNICATIONS ---------------------------------------------------- */
  channels: [
    { name:"Email & Club Newsletter", icon:"ti-mail", cadence:"As needed · low volume", rec:true,
      what:"Official club communication — registration, season information, training times, important notices and event invitations.",
      best:"Things you'll want a record of.",
      optin:"Register through PlayHQ and keep your email current." },
    { name:"SMS / Text", icon:"ti-message-2", cadence:"Rare · urgent only", rec:true,
      what:"Time-critical alerts only — ground closures and washouts, last-minute fixture or venue changes, and team selection messages.",
      best:"\"You need to know this today\" moments.",
      optin:"Keep a current mobile number with your team manager." },
    { name:"Team Chat Groups", icon:"ti-users", cadence:"Match week", rec:true,
      what:"Your team's own group chat — selection, transport, who's on afternoon tea, and the Saturday morning weather call.",
      best:"Day-to-day team logistics.",
      optin:"Ask your team manager to add you at the start of the season." },
    { name:"Facebook & Instagram", icon:"ti-brand-instagram", cadence:"Regular · public", rec:false,
      what:"Match-day photos, results highlights, celebrations, club events and the wider Geelong cricket conversation.",
      best:"The fun, the photos and the community feel.",
      optin:"Follow @geelongcitycc and Geelong City Cricket Club." },
    { name:"Website & PlayHQ", icon:"ti-world", cadence:"Always on", rec:false,
      what:"Fixtures, results and ladders through the Match Centre and PlayHQ, plus club news and information on this site.",
      best:"Checking scores, draws and ladders on the go.",
      optin:"Add this site to your home screen for one-tap access." },
    { name:"Club Notice Board", icon:"ti-clipboard-text", cadence:"In-season", rec:false,
      what:"Club-rooms at Richmond Crescent — training times, social events, working bees, presentation night and Shark Shop news.",
      best:"Anything happening at the ground.",
      optin:"Drop in on a training night." }
  ],
  audiences: [
    { who:"Senior Players", note:"Keep your details current with your team manager so urgent changes reach you on match day.", tags:["SMS","Team Chat","Email","PlayHQ"] },
    { who:"Parents & Juniors", note:"Parents should be on club email and SMS, and check socials for washouts before heading out.", tags:["Email","SMS","Social","PlayHQ"] },
    { who:"Coaches, Managers & Volunteers", note:"You're the ones relaying changes — switch everything on and watch club news.", tags:["Email","SMS","Team Chat","News"] },
    { who:"Family & Supporters", note:"Following from the sidelines? Social and the Match Centre keep you across scores and highlights.", tags:["Social","PlayHQ","Website"] }
  ],
  commSteps: [
    { h:"Register through PlayHQ", p:"Your email and mobile join the club lists for official email and urgent SMS." },
    { h:"Join your team chat",     p:"Ask your team manager to add you at the start of the season." },
    { h:"Follow the socials",      p:"Facebook and Instagram for photos, results and community news." },
    { h:"Bookmark the Match Centre", p:"Keep fixtures, results and ladders one tap away all season." }
  ],

  /* ---- COMMITTEE (structure real; individual names to be supplied) ------- */
  committeeIntro:"We're proud to introduce the committed and hardworking Geelong City Cricket Club committee members. This dedicated team ensures our club operates smoothly, fosters a positive community spirit, and upholds our traditions while driving us toward future successes.",
  coachesIntro:"We're excited to introduce the dedicated coaching and co-ordinator team at Geelong City Cricket Club, each bringing a wealth of knowledge, skill, and passion to help our players excel on and off the field.",
  contacts: [
    { role:"President",           name:"Scott Lindsay",  email:"info@geelongcitycc.com.au", photo:"" },
    { role:"Senior Men",          name:"Sam Cust",       email:"info@geelongcitycc.com.au", photo:"" },
    { role:"Senior Women",        name:"Melissa Rolfe",  email:"info@geelongcitycc.com.au", photo:"" },
    { role:"Junior Coordinator",  name:"Trevor Elliot",  email:"info@geelongcitycc.com.au", photo:"" }
  ],

  /* ---- REGISTRATION ------------------------------------------------------ */
  register: [
    { name:"Senior Men",    url:"https://www.playhq.com/cricket-australia/register/d52742", note:"Turf & hard wicket grades" },
    { name:"Senior Women",  url:"https://www.playhq.com/cricket-australia/register/9ea8f6", note:"1st & 2nd XI" },
    { name:"Junior Boys",   url:"https://www.playhq.com/cricket-australia/register/691aa1", note:"U17 / U15 / U13 / U11" },
    { name:"Junior Girls",  url:"https://www.playhq.com/cricket-australia/register/8bca78", note:"U18 / U15 / U12" },
    { name:"Cricket Blast", url:"https://play.cricket.com.au/play/woolworths-cricket-blast", note:"Ages 5–8, incl. All Girls" }
  ],

  /* ---- SPONSORS (real) --------------------------------------------------- */
  sponsorIntro:"Our sponsors are an essential part of our club's success, helping us provide the best experience for our players and community. We encourage all club members and families to support our sponsors whenever possible. To learn more about each sponsor, simply click through to visit their website.",
  sponsors: [
    { name:"QA Electrical",            url:"https://www.qaelectrical.com.au/", logo:"" },
    { name:"Kings Funerals",           url:"", logo:"" },
    { name:"ONBA",                     url:"https://onba.com.au/", logo:"" },
    { name:"Elephant & Castle",        url:"https://elephantandcastle.com.au/", logo:"" },
    { name:"SB Heavy Haulage",         url:"https://sbheavyhaulage.com.au/", logo:"" },
    { name:"Bellarine Cabinets",       url:"https://bellarinecabinets.com.au/", logo:"" },
    { name:"Pakington Garage",         url:"https://pakingtongarage.com.au/", logo:"" },
    { name:"Daisy's Garden Supplies",  url:"https://daisysgarden.com.au/", logo:"" },
    { name:"Skin Screen Clinic",       url:"https://skinscreenclinic.com.au/", logo:"" },
    { name:"Kitchen Artistry Geelong", url:"https://www.facebook.com/KitchenArtistryGeelong", logo:"" },
    { name:"Ritchie Bros.",            url:"https://www.rbauction.com/", logo:"" },
    { name:"Lyons Construction",       url:"https://www.lyonsconstruction.com.au/", logo:"" }
  ],
  partners: [
    { name:"Geelong Cricket Association", url:"https://www.geelongca.com/", logo:"" },
    { name:"Cricket Victoria",            url:"https://www.cricketvictoria.com.au/", logo:"" },
    { name:"Cricket Australia",           url:"https://www.cricket.com.au/", logo:"" },
    { name:"Good Sports",                 url:"https://goodsports.com.au/", logo:"" },
    { name:"SportsWeb Australia",         url:"https://sportsweb.com.au", logo:"" }
  ],

  /* ---- DOCUMENTS --------------------------------------------------------- */
  documents: [
    { name:"Sponsorship Packages",                  type:"PDF",  url:"https://geelongcitycc.com.au/lib/grbf4l/Sponsorship-Packages-mf13p8nw.pdf" },
    { name:"Cricket Victoria — Child Safety Guidelines", type:"LINK", url:"https://www.cricketvictoria.com.au/child-safe-member-protection/" },
    { name:"Club Policies & Administration",        type:"LINK", url:"https://geelongcitycc.com.au/policies--documents" },
    { name:"Privacy Policy",                        type:"PAGE", url:"#" },
    { name:"Terms of Use",                          type:"PAGE", url:"#" },
    { name:"Cookie Policy",                         type:"PAGE", url:"#" }
  ]
};
