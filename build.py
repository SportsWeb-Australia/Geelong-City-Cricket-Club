#!/usr/bin/env python3
"""Geelong City CC — RDCA-clone site generator. Builds 14 pages."""
import os
OUT = "/home/claude/gcc"

def head(key, title, desc):
    return f"""<!DOCTYPE html>
<!-- Geelong City CC — built on the RDCA / SportsWeb One template -->
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="theme-color" content="#102b5e">
<meta name="description" content="{desc}">
<title>{title} — Geelong City Cricket Club</title>
<link rel="icon" href="assets/logos/sharks-shield.png">
<meta property="og:title" content="{title} — Geelong City Cricket Club">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="assets/logos/sharks-shield.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css">
<link rel="stylesheet" href="assets/gc-shared.css">
<link rel="stylesheet" href="assets/gc-theme.css">
</head>
<body class="accent-teal" data-page="{key}">
<div id="gcTopbar"></div>
<div id="gcMob"></div>
<nav id="gcNav"></nav>
"""

TAIL = """<footer id="gcFooter"></footer>
<script src="assets/gc-data.js"></script>
<script src="assets/gc-site.js"></script>
<script src="assets/gc-switch.js"></script><!-- REVIEW ONLY: delete before go-live -->
</body>
</html>
"""

def phead(title, sub, crumb):
    return f"""<header class="phead"><div class="wrap">
  <nav class="crumb"><a href="index.html">Home</a><span>/</span>{crumb}</nav>
  <h1>{title}</h1>
  <p>{sub}</p>
</div></header>
"""

# ---------------------------------------------------------------- pages
PAGES = {}

PAGES["index"] = ("Home",
 "Geelong City Cricket Club — Home of the Sharks. Founded 1928, proud members of the Geelong Cricket Association.",
"""<div id="gcTicker"></div>
<header class="hero" id="gcHero"></header>

<section class="strip"><div class="wrap"><div class="strip-grid">
  <div class="scard" id="gcNext"></div>
  <div class="scard" id="gcLast"></div>
  <div class="scard" id="gcMiniLadder"></div>
</div></div></section>

<section class="sec sec-dark"><div class="wrap">
  <div class="sec-hdr"><div><div class="eyebrow">Our cricket</div><h2 class="s-hed">Teams &amp; Programs</h2></div>
    <a class="view-all" href="registration.html">Register <i class="ti ti-arrow-right"></i></a></div>
  <div class="grid g4" id="gcPillars"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="split">
    <div>
      <div class="eyebrow">About the club</div>
      <h2 class="s-hed" id="gcAboutHed"></h2>
      <div id="gcAboutBody"></div>
      <a class="btn btn-outline" style="margin-top:16px" href="about.html">More about us <i class="ti ti-arrow-right"></i></a>
    </div>
    <aside class="side" id="gcFacts"></aside>
  </div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="eyebrow">By the numbers</div><h2 class="s-hed">The club today</h2>
  <div class="statgrid" id="gcStats"></div>
</div></section>

<section class="sec blast-band"><div class="wrap"><div class="glass blast-inner">
  <img class="blast-logo" src="assets/logos/woolworths-blast.png" alt="Woolworths Cricket Blast">
  <div><div class="eyebrow">Ages 5&ndash;8 &middot; All Girls Blasters</div>
    <h2 class="s-hed">Woolworths Cricket Blast</h2>
    <p>An exciting introduction to cricket for our youngest players &mdash; a great way to learn the basics while having fun in a supportive, team-focused setting.</p></div>
  <a class="btn btn-blast btn-lg" href="cricket-blast.html">Find out more <i class="ti ti-arrow-right"></i></a>
</div></div></section>

<section class="sec"><div class="wrap">
  <div class="sec-hdr"><div><div class="eyebrow">Latest</div><h2 class="s-hed">Club News</h2></div>
    <a class="view-all" href="news.html">All news <i class="ti ti-arrow-right"></i></a></div>
  <div class="grid g3" id="gcNewsHome"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="sec-hdr"><div><div class="eyebrow">Thank you</div><h2 class="s-hed">Our Sponsors</h2></div>
    <a class="view-all" href="sponsors.html">All sponsors <i class="ti ti-arrow-right"></i></a></div>
  <div class="sp-rail" id="gcSponsorRail"></div>
</div></section>
""")

PAGES["about"] = ("About Us",
 "Founded 1928 — a rich history at Richmond Crescent, and a community-focused club today.",
 phead("About Us","Founded 1928 &mdash; a rich history at Richmond Crescent, and a community-focused cricket club today.","About Us") +
"""<section class="sec"><div class="wrap">
  <div class="split">
    <div><div class="eyebrow">Our club</div><h2 class="s-hed" id="gcAboutHed"></h2><div id="gcAboutBody"></div>
      <div class="photo-panel" id="gcAboutPhoto" style="margin-top:20px"></div></div>
    <aside class="side" id="gcFacts"></aside>
  </div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="eyebrow">By the numbers</div><h2 class="s-hed">The club today</h2>
  <div class="statgrid" id="gcStats"></div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="eyebrow">Who to talk to</div><h2 class="s-hed">Key Contacts</h2>
  <div class="grid g4" id="gcContacts"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap"><div class="notice">
  <i class="ti ti-shield-check"></i>
  <div><h3>Child Safety</h3>
  <p>Geelong City Cricket Club is committed to providing a safe and inclusive environment for all children and young people, in line with Cricket Victoria's Child Safe and Member Protection guidelines.</p>
  <a class="btn btn-outline btn-sm" href="child-safety.html">Our commitment <i class="ti ti-arrow-right"></i></a></div>
</div></div></section>
""")

PAGES["seniors"] = ("Senior Cricket",
 "Four senior men's teams and two senior women's teams in the Geelong Cricket Association.",
 phead("Senior Cricket","Four senior men's teams &mdash; two turf, two hard wicket &mdash; and two senior women's teams in the GCA.","Senior Cricket") +
"""<section class="sec"><div class="wrap"><div id="gcSeniorsBanner"></div><div id="gcSeniors"></div></div></section>

<section class="sec sec-alt"><div class="wrap cta-band">
  <div><h2 class="s-hed">Ready to play with the Sharks?</h2>
  <p>Registration is open across all grades through PlayHQ.</p></div>
  <a class="btn btn-accent btn-lg" href="registration.html"><i class="ti ti-user-plus"></i> Register now</a>
</div></section>
""")

PAGES["juniors"] = ("Junior Cricket",
 "U17s, U15s, U13s and U11s boys plus U18s, U15s and U12s girls — developing players, participation and fun.",
 phead("Junior Cricket","Developing great young players, participation and fun &mdash; boys and girls across seven age groups.","Juniors") +
"""<section class="sec"><div class="wrap"><div id="gcJuniorsBanner"></div><div id="gcJuniors"></div></div></section>

<section class="sec blast-band"><div class="wrap"><div class="glass blast-inner">
  <img class="blast-logo" src="assets/logos/woolworths-blast.png" alt="Woolworths Cricket Blast">
  <div><div class="eyebrow">Just starting out?</div>
  <h2 class="s-hed">Woolworths Cricket Blast</h2>
  <p>The perfect first step for ages 5&ndash;8, including a dedicated All Girls Blasters stream.</p></div>
  <a class="btn btn-blast btn-lg" href="cricket-blast.html">Cricket Blast <i class="ti ti-arrow-right"></i></a>
</div></div></section>
""")

PAGES["cricket-blast"] = ("Woolworths Cricket Blast",
 "An exciting introduction to cricket for kids aged 5–8, including our All Girls Blasters.",
 """<header class="blast-hero"><div class="wrap">
  <nav class="crumb"><a href="index.html">Home</a><span>/</span>Cricket Blast</nav>
  <div class="blast-hero-inner">
    <img class="blast-logo" src="assets/logos/woolworths-blast.png" alt="Woolworths Cricket Blast">
    <div><h1>Woolworths Cricket Blast</h1>
    <p>An exciting introduction to cricket for kids aged 5&ndash;8 &mdash; including our All Girls Blasters. Run by Geelong City Cricket Club at Eastern Gardens.</p></div>
  </div>
</div></header>
""" +
"""<section class="sec"><div class="wrap"><div id="gcBlastBanner"></div><div id="gcBlast"></div></div></section>

<section class="sec blast-band"><div class="wrap">
  <div class="eyebrow">What to expect</div><h2 class="s-hed">Fun first, skills always</h2>
  <div class="grid g4 blast-points" id="gcBlastPoints"></div>
</div></section>
""")

PAGES["match-centre"] = ("Match Centre",
 "Fixtures, results and ladders across every Geelong City grade.",
 phead("Match Centre","Fixtures, results and ladders across every Sharks grade.","Match Centre") +
"""<section class="sec"><div class="wrap">
  <div class="sample-note" id="gcSampleNote"></div>
  <div class="split">
    <div>
      <div class="eyebrow">Upcoming</div><h2 class="s-hed">Fixtures</h2>
      <div class="table-wrap"><table class="tbl" id="gcFixtures"></table></div>
      <div class="eyebrow" style="margin-top:28px">Recent</div><h2 class="s-hed">Results</h2>
      <div class="table-wrap"><table class="tbl" id="gcResults"></table></div>
    </div>
    <aside>
      <div class="eyebrow">Standings</div><h2 class="s-hed">Ladder</h2>
      <div class="table-wrap"><table class="tbl" id="gcLadder"></table></div>
    </aside>
  </div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="eyebrow">Every grade</div><h2 class="s-hed">Fixtures &amp; Ladders by team</h2>
  <p class="s-sub">Live fixtures, results and ladders for each Geelong City team.</p>
  <div class="grid g4" id="gcMatchLinks"></div>
</div></section>
""")

PAGES["registration"] = ("Registration",
 "Register to play with the Sharks — every grade, through PlayHQ.",
 phead("Registration","Register to play with the Sharks &mdash; every grade, through PlayHQ.","Registration") +
"""<section class="sec"><div class="wrap">
  <div class="eyebrow">2025/26 season</div><h2 class="s-hed">Pick your grade and register</h2>
  <p class="s-sub">Registration for all Geelong City teams runs through PlayHQ. New and returning players are welcome across every age group.</p>
  <div class="grid g4" id="gcRegister"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap"><div class="split">
  <div><div class="eyebrow">Not sure where you fit?</div>
    <h2 class="s-hed">We'll point you in the right direction</h2>
    <p>Whether you're a first-time player, returning after a few seasons off, or looking for a club for your child, get in touch and we'll match you to the right team.</p>
    <div class="hero-cta">
      <a class="btn btn-accent" href="contact.html"><i class="ti ti-mail"></i> Contact the club</a>
      <a class="btn btn-outline" href="seniors.html">Browse teams</a></div></div>
  <aside class="side"><h3>Who to ask</h3><div class="grid" id="gcContacts" style="gap:10px"></div></aside>
</div></div></section>
""")

PAGES["news"] = ("Club News",
 "Match reports, club announcements and what's happening around Richmond Crescent.",
 phead("Club News","Match reports, club announcements and what's happening around Richmond Crescent.","News") +
"""<section class="sec"><div class="wrap">
  <div class="sample-note"><i class="ti ti-flask"></i> <b>Sample articles.</b>&nbsp;Replace with real club news &mdash; the layout is ready.</div>
  <div class="grid g3" id="gcNewsAll"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap cta-band">
  <div><h2 class="s-hed">Never miss an update</h2><p>See which channels carry what &mdash; and what to switch on.</p></div>
  <a class="btn btn-accent btn-lg" href="communications.html"><i class="ti ti-bell"></i> Communications</a>
</div></section>
""")

PAGES["committee"] = ("Committee & Coaches",
 "Meet the committee and coaching team leading the Geelong City Cricket Club.",
 phead("Committee &amp; Coaches","Meet the dedicated committee and coaching team leading the club.","Committee") +
"""<section class="sec"><div class="wrap">
  <div id="gcCommitteeBanner"></div>
  <div class="eyebrow">Our coaches</div><h2 class="s-hed">Coaching &amp; Coordinators</h2>
  <p class="s-sub" id="gcCoachesIntro"></p>
  <div class="grid g4" id="gcContacts"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="eyebrow">Our committee</div><h2 class="s-hed">Club Committee</h2>
  <p class="s-sub" id="gcCommitteeIntro"></p>
  <div class="notice"><i class="ti ti-users"></i>
    <div><h3>Full committee list</h3>
    <p>The complete committee roster &mdash; including photos and role descriptions &mdash; will be published here. Send the club the current list and we'll load it in.</p>
    <a class="btn btn-outline btn-sm" href="contact.html">Contact the club <i class="ti ti-arrow-right"></i></a></div></div>
</div></section>
""")

PAGES["sponsors"] = ("Sponsors",
 "Our sponsors are an essential part of the club's success. Please support the businesses that support the Sharks.",
 phead("Our Sponsors","Our sponsors are an essential part of the club's success. Please support the businesses that support the Sharks.","Sponsors") +
"""<section class="sec"><div class="wrap">
  <p class="s-sub" id="gcSponsorIntro"></p>
  <div class="sp-grid" id="gcSponsorGrid"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap cta-band">
  <div><div class="eyebrow">Partner with us</div>
  <h2 class="s-hed">Become a Sharks sponsor</h2>
  <p>Interested in supporting the club? Get in touch &mdash; we'd love to discuss how we can partner with you.</p></div>
  <div class="hero-cta">
    <a class="btn btn-accent btn-lg" id="gcSponsorPdf" target="_blank" rel="noopener"><i class="ti ti-download"></i> Sponsorship packages</a>
    <a class="btn btn-outline btn-lg" href="contact.html">Contact us</a></div>
</div></section>
""")

PAGES["communications"] = ("Communications",
 "How the club keeps players, parents, volunteers and supporters informed — and what to switch on.",
 phead("Communications","How the club keeps players, parents, volunteers and supporters informed &mdash; the channels we use, what each one is for, and what we recommend you switch on so nothing important gets missed.","Communications") +
"""<section class="sec"><div class="wrap">
  <div class="eyebrow">How we reach you</div><h2 class="s-hed">Different messages, different channels</h2>
  <p class="s-sub">Urgent, time-critical updates go by SMS and team chat; everything else by email, this website and social. Here's what each channel carries.</p>
  <div class="grid g3" id="gcChannels"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="eyebrow">A quick guide</div><h2 class="s-hed">What we recommend you turn on</h2>
  <p class="s-sub">Must-have channels carry the urgent and official stuff; the rest are nice to have.</p>
  <div class="grid g4" id="gcAudiences"></div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="eyebrow">Set it up once</div><h2 class="s-hed">Do these four things and you're covered all season</h2>
  <div class="steps" id="gcSteps"></div>
</div></section>

<section class="sec sec-alt"><div class="wrap"><div class="notice">
  <i class="ti ti-lock"></i>
  <div><h3>Your details, used for cricket only</h3>
  <p>Contact details are used solely for Geelong City Cricket Club communications &mdash; never sold or shared for marketing. You can update your preferences or unsubscribe at any time. For junior players, club communications go to a parent or guardian, in line with our child safety commitments.</p>
  <a class="btn btn-outline btn-sm" href="contact.html">Update your details <i class="ti ti-arrow-right"></i></a></div>
</div></div></section>
""")

PAGES["child-safety"] = ("Child Safety",
 "Geelong City Cricket Club is committed to a safe and inclusive environment for all children and young people.",
 phead("Child Safety","Our commitment to a safe, inclusive and welcoming environment for every child and young person at the club.","Child Safety") +
"""<section class="sec"><div class="wrap"><div class="split">
  <div>
    <div class="eyebrow">Our commitment</div>
    <h2 class="s-hed">Every child safe at cricket</h2>
    <p class="lead">Geelong City Cricket Club is committed to providing a safe, inclusive and welcoming environment for all children and young people.</p>
    <p>Our junior program focuses on developing great young players, participation and fun &mdash; and that starts with everyone feeling safe. We follow Cricket Victoria's Child Safe and Member Protection framework, and all relevant club volunteers, coaches and team managers are expected to meet its requirements.</p>
    <p>If you have a concern about the safety or wellbeing of a child at our club, please raise it with the Junior Coordinator or the President immediately.</p>
    <div class="hero-cta">
      <a class="btn btn-accent" href="https://www.cricketvictoria.com.au/child-safe-member-protection/" target="_blank" rel="noopener"><i class="ti ti-external-link"></i> Cricket Victoria guidelines</a>
      <a class="btn btn-outline" href="contact.html">Raise a concern</a></div>
  </div>
  <aside class="side"><h3>Who to contact</h3>
    <dl class="facts">
      <div><dt>Junior Coordinator</dt><dd>Trevor Elliot</dd></div>
      <div><dt>President</dt><dd>Scott Lindsay</dd></div>
      <div><dt>Club email</dt><dd><a href="mailto:info@geelongcitycc.com.au">info@geelongcitycc.com.au</a></dd></div>
    </dl>
  </aside>
</div></div></section>

<section class="sec sec-alt"><div class="wrap"><div class="notice">
  <i class="ti ti-info-circle"></i>
  <div><h3>Policy documents</h3>
  <p>The club's child safety policy, code of conduct and related documents are published on the Documents &amp; Policies page.</p>
  <a class="btn btn-outline btn-sm" href="documents.html">Documents &amp; Policies <i class="ti ti-arrow-right"></i></a></div>
</div></div></section>
""")

PAGES["documents"] = ("Documents & Policies",
 "Club policies, administration documents and forms.",
 phead("Documents &amp; Policies","Club policies, administration documents and forms.","Documents") +
"""<section class="sec"><div class="wrap">
  <div class="eyebrow">Club administration</div><h2 class="s-hed">Documents &amp; Forms</h2>
  <p class="s-sub">Policies, packages and forms for players, parents, volunteers and sponsors.</p>
  <div class="grid g4" id="gcDocs"></div>
</div></section>
""")

PAGES["contact"] = ("Contact Us",
 "Get in touch with the Geelong City Cricket Club.",
 phead("Contact Us","Get in touch with the Geelong City Cricket Club.","Contact") +
"""<section class="sec"><div class="wrap"><div class="split">
  <div>
    <div class="eyebrow">Send us an enquiry</div>
    <h2 class="s-hed">We'd love to hear from you</h2>
    <p class="s-sub">Whether you want to play, volunteer, sponsor or just ask a question &mdash; drop us a line and we'll get back to you.</p>
    <form class="form" onsubmit="return gcSubmit(event)">
      <label>Name <input type="text" name="name" required></label>
      <label>Your e-mail <input type="email" name="email" required></label>
      <label>Message content <textarea name="message" rows="5" required></textarea></label>
      <button class="btn btn-accent btn-lg" type="submit"><i class="ti ti-send"></i> Send</button>
      <p class="form-note" id="gcFormNote" hidden></p>
    </form>
  </div>
  <aside class="side"><h3>Club details</h3>
    <dl class="facts">
      <div><dt>Address</dt><dd>Richmond Crescent,<br>Geelong Victoria, 3220</dd></div>
      <div><dt>Map</dt><dd><a href="https://tinyurl.com/28ptesue" target="_blank" rel="noopener">Open in Maps</a></dd></div>
      <div><dt>Email</dt><dd><a href="mailto:info@geelongcitycc.com.au">info@geelongcitycc.com.au</a></dd></div>
      <div><dt>President</dt><dd>Scott Lindsay</dd></div>
      <div><dt>Facebook</dt><dd><a href="https://www.facebook.com/geelongcitycricketclub" target="_blank" rel="noopener">Geelong City CC</a></dd></div>
      <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/geelongcitycc/" target="_blank" rel="noopener">@geelongcitycc</a></dd></div>
    </dl>
  </aside>
</div></div></section>

<section class="sec sec-alt"><div class="wrap">
  <div class="eyebrow">Who to talk to</div><h2 class="s-hed">Key Contacts</h2>
  <div class="grid g4" id="gcContacts"></div>
</div></section>
""")

def build():
    for key, (title, desc, body) in PAGES.items():
        with open(os.path.join(OUT, key + ".html"), "w") as fh:
            fh.write(head(key, title, desc) + body + TAIL)
    print("built", len(PAGES), "pages")

if __name__ == "__main__":
    build()
