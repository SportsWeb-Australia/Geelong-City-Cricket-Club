/* ============================================================================
   GEELONG CITY CC — components & render          (assets/gc-site.js)
   ----------------------------------------------------------------------------
   Same pattern as the RDCA build's rdca-components.js + rdca-render.js:
   this one script injects the shared chrome (topbar, nav, mobile menu,
   ticker, footer) and renders every data-driven section from window.GCC.

   Mount points are plain ids/data attributes in the page markup, so content
   is edited in ONE place (gc-data.js) and all 14 pages update.
   ========================================================================== */
(function () {
  var D = window.GCC;
  if (!D) { console.error('GCC data missing'); return; }
  var page = document.body.getAttribute('data-page') || '';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  var C = D.club;
  var P = D.photos || {};

  /* Photo helpers ---------------------------------------------------------
     img(name) → CSS url() for a file in assets/img/, or '' when unset.
     Every photo slot is optional: with no file the existing navy gradient
     shows, so the page never looks broken.                                 */
  function imgUrl(name) { return name ? "url('assets/img/" + name + "')" : ''; }
  function applyBg(el, cssVar, name, cls) {
    if (!el || !name) return false;
    el.style.setProperty(cssVar, imgUrl(name));
    if (cls) el.classList.add(cls);
    return true;
  }
  function initials(n) {
    return String(n || '').split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
  }
  /* Banner for a section page — only renders when a photo is configured */
  function banner(mountId, photoName, caption) {
    var m = $(mountId);
    if (!m) return;
    if (!photoName) { m.style.display = 'none'; return; }
    m.className = 'photo-banner';
    m.style.setProperty('--banner-img', imgUrl(photoName));
    m.innerHTML = '<span class="cap">' + esc(caption || '') + '</span>';
  }


  /* ======================= NAVIGATION MODEL ============================== */
  var NAV = [
    { label: 'Home',           href: 'index.html',          key: 'index',          icon: 'ti-home' },
    { label: 'About Us',       href: 'about.html',          key: 'about',          icon: 'ti-info-circle' },
    { label: 'Senior Cricket', href: 'seniors.html',        key: 'seniors',        icon: 'ti-cricket' },
    { label: 'Juniors',        href: 'juniors.html',        key: 'juniors',        icon: 'ti-friends' },
    { label: 'Cricket Blast',  href: 'cricket-blast.html',  key: 'cricket-blast',  icon: 'ti-mood-smile' },
    { label: 'Match Centre',   href: 'match-centre.html',   key: 'match-centre',   icon: 'ti-scoreboard' },
    { label: 'Registration',   href: 'registration.html',   key: 'registration',   icon: 'ti-user-plus' },
    { label: 'News',           href: 'news.html',           key: 'news',           icon: 'ti-news' },
    { label: 'Committee',      href: 'committee.html',      key: 'committee',      icon: 'ti-users' },
    { label: 'Sponsors',       href: 'sponsors.html',       key: 'sponsors',       icon: 'ti-heart-handshake' },
    { label: 'Communications', href: 'communications.html', key: 'communications', icon: 'ti-broadcast' },
    { label: 'Contact',        href: 'contact.html',        key: 'contact',        icon: 'ti-mail' }
  ];
  var MOB_EXTRA = [
    { group: 'Club Information' },
    { label: 'Child Safety',           href: 'child-safety.html', key: 'child-safety', icon: 'ti-shield-check' },
    { label: 'Documents & Policies',   href: 'documents.html',    key: 'documents',    icon: 'ti-folder' }
  ];

  /* ======================= TOPBAR ======================================== */
  var topbar = $('gcTopbar');
  if (topbar) {
    topbar.className = 'topbar';
    topbar.innerHTML =
      '<div class="tb-l">' +
        '<a class="tb-item" href="' + C.map + '" target="_blank" rel="noopener"><i class="ti ti-map-pin"></i> ' + esc(C.groundShort) + '</a>' +
        '<a class="tb-item" href="mailto:' + C.email + '"><i class="ti ti-mail"></i> ' + esc(C.email) + '</a>' +
        '<span class="tb-item"><i class="ti ti-trophy"></i> ' + esc(C.assoc) + '</span>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:12px">' +
        '<div class="t-soc">' +
          '<a href="' + C.facebook + '" target="_blank" rel="noopener" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>' +
          '<a href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>' +
        '</div>' +
        '<a class="tb-cta" href="registration.html">Register for 2025/26</a>' +
      '</div>';
  }

  /* ======================= NAV =========================================== */
  var nav = $('gcNav');
  if (nav) {
    nav.className = 'nav-wrap';
    nav.innerHTML =
      '<div class="nav-inner">' +
        '<a class="nav-brand" href="index.html">' +
          '<img class="nav-logo-img" src="assets/logos/sharks-shield.png" alt="Geelong City Sharks crest">' +
          '<div><div class="brand-name">GEELONG CITY CC</div>' +
          '<div class="brand-sub">' + esc(C.tagline) + ' &middot; ' + C.est + '</div></div>' +
        '</a>' +
        '<div class="nav-links">' +
          NAV.map(function (n) {
            return '<a class="nav-link' + (n.key === page ? ' active' : '') + '" href="' + n.href + '">' + esc(n.label) + '</a>';
          }).join('') +
        '</div>' +
        '<div class="nav-actions">' +
          '<a class="btn btn-accent btn-sm" href="registration.html"><i class="ti ti-user-plus"></i> Register</a>' +
          '<button class="hamburger" id="gcBurger" aria-label="Open menu"><i class="ti ti-menu-2"></i></button>' +
        '</div>' +
      '</div>';
  }

  /* ======================= MOBILE MENU =================================== */
  var mob = $('gcMob');
  if (mob) {
    mob.className = 'mob-menu';
    var links = NAV.map(function (n) {
      return '<a class="mob-link' + (n.key === page ? ' active' : '') + '" href="' + n.href + '"><i class="ti ' + n.icon + '"></i> ' + esc(n.label) + '</a>';
    }).join('');
    var extra = MOB_EXTRA.map(function (n) {
      if (n.group) return '<div class="mob-group">' + esc(n.group) + '</div>';
      return '<a class="mob-link' + (n.key === page ? ' active' : '') + '" href="' + n.href + '"><i class="ti ' + n.icon + '"></i> ' + esc(n.label) + '</a>';
    }).join('');
    mob.innerHTML =
      '<div class="mob-head">' +
        '<div style="display:flex;align-items:center;gap:10px">' +
          '<img src="assets/logos/sharks-shield.png" alt="" style="width:38px;height:38px;object-fit:contain">' +
          '<div class="brand-name" style="font-size:19px">GEELONG CITY CC</div>' +
        '</div>' +
        '<button id="gcMobClose" aria-label="Close menu" style="background:rgba(255,255,255,.1);border:none;color:#fff;width:36px;height:36px;border-radius:8px;cursor:pointer"><i class="ti ti-x"></i></button>' +
      '</div>' + links + extra +
      '<div style="margin-top:14px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)">' +
        '<a class="btn btn-accent" style="width:100%;justify-content:center" href="registration.html"><i class="ti ti-user-plus"></i> Register for 2025/26</a>' +
      '</div>';
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('#gcBurger')) $('gcMob').classList.add('open');
    if (e.target.closest('#gcMobClose')) $('gcMob').classList.remove('open');
  });

  /* ======================= TICKER ======================================== */
  var tick = $('gcTicker');
  if (tick) {
    var items = D.ticker.map(function (t) {
      return '<span class="tk-it"><span class="tk-gr">' + esc(t.grade) + '</span>' +
             '<span>' + esc(t.txt) + '</span>' +
             '<span class="tk-stat">' + esc(t.stat) + '</span></span>';
    }).join('');
    tick.className = 'ticker-bar';
    tick.innerHTML =
      '<div class="ticker-inner">' +
        '<div class="ticker-pill"><i class="ti ti-activity"></i> Club Wire</div>' +
        '<div class="ticker-scroll"><div class="ticker-track">' + items + items + '</div></div>' +
      '</div>';
  }

  /* ======================= FOOTER ======================================== */
  var foot = $('gcFooter');
  if (foot) {
    foot.className = 'foot';
    foot.innerHTML =
      '<div class="wrap">' +
        '<div class="foot-grid">' +
          '<div>' +
            '<img class="foot-crest" src="assets/logos/crest-white.png" alt="Geelong City Cricket Club crest">' +
            '<p>' + esc(C.tagline) + ' since ' + C.est + '. Proud members of the ' + esc(C.assoc) + '.</p>' +
            '<p style="font-size:12.5px"><i class="ti ti-map-pin"></i> ' + esc(C.ground) + '</p>' +
            '<p style="font-size:12.5px;font-style:italic;color:rgba(255,255,255,.45)">' + esc(C.motto) + '</p>' +
          '</div>' +
          '<div><h4>Cricket</h4>' +
            '<a href="seniors.html">Senior Cricket</a><a href="juniors.html">Junior Cricket</a>' +
            '<a href="cricket-blast.html">Cricket Blast</a><a href="match-centre.html">Match Centre</a>' +
            '<a href="registration.html">Registration</a></div>' +
          '<div><h4>Club</h4>' +
            '<a href="about.html">About Us</a><a href="committee.html">Committee &amp; Coaches</a>' +
            '<a href="news.html">News</a><a href="sponsors.html">Sponsors</a>' +
            '<a href="documents.html">Documents &amp; Policies</a></div>' +
          '<div><h4>Connect</h4>' +
            '<a href="communications.html">Communications</a>' +
            '<a href="contact.html">Contact Us</a>' +
            '<a href="child-safety.html">Child Safety</a>' +
            '<a href="' + C.facebook + '" target="_blank" rel="noopener">Facebook</a>' +
            '<a href="' + C.instagram + '" target="_blank" rel="noopener">Instagram</a></div>' +
        '</div>' +
        '<div class="partners"><span class="partners-lbl">Proud members of</span>' +
          D.partners.map(function (p) {
            return '<a href="' + p.url + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>';
          }).join('') +
        '</div>' +
        '<div class="foot-b">' +
          '<span>&copy; <span id="gcYear"></span> ' + esc(C.name) + '. All rights reserved.</span>' +
          '<span>Cricket Club Website Design by <a href="https://sportsweb.com.au" target="_blank" rel="noopener">SportsWeb Australia</a></span>' +
        '</div>' +
      '</div>';
    var y = $('gcYear'); if (y) y.textContent = new Date().getFullYear();
  }

  /* ======================= HOME ========================================== */
  if ($('gcHero')) {
    applyBg($('gcHero'), '--hero-img', P.hero, 'has-photo');
    $('gcHero').innerHTML =
      '<div class="wrap hero-grid">' +
        '<div>' +
          '<div class="eyebrow eyebrow-light">' + esc(D.hero.eyebrow) + '</div>' +
          '<h1>' + esc(D.hero.h1a) + '<span>' + esc(D.hero.h1b) + '</span></h1>' +
          '<p>' + esc(D.hero.lead) + '</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-accent btn-lg" href="registration.html"><i class="ti ti-user-plus"></i> Register to play</a>' +
            '<a class="btn btn-outline-white btn-lg" href="match-centre.html"><i class="ti ti-scoreboard"></i> Match Centre</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-crest"><img src="assets/logos/sharks-shield.png" alt="Geelong City Sharks crest"></div>' +
      '</div><div class="wave"></div>';
  }

  var f = D.fixtures.rows, r = D.results.rows, l = D.ladder.rows;
  if ($('gcNext')) {
    var n0 = f[0];
    $('gcNext').innerHTML =
      '<div class="scard-lbl"><i class="ti ti-calendar-event"></i> Next match</div>' +
      (n0 ? '<div class="scard-big">' + esc(n0.home) + ' <em>v</em> ' + esc(n0.away) + '</div>' +
            '<div class="scard-meta">' + esc(n0.round) + ' &middot; ' + esc(n0.date) + ' ' + esc(n0.time) + '<br>' + esc(n0.venue) + '</div>'
          : '<div class="scard-meta">No upcoming fixtures.</div>') +
      (D.fixtures.sample ? '<span class="badge badge-sample" style="margin-top:9px">Sample</span>' : '');
  }
  if ($('gcLast')) {
    var r0 = r[0];
    $('gcLast').innerHTML =
      '<div class="scard-lbl"><i class="ti ti-clipboard-check"></i> Last result</div>' +
      (r0 ? '<div class="scard-big">' + esc(r0.hs) + ' <em>v</em> ' + esc(r0.as) + '</div>' +
            '<div class="scard-meta">' + esc(r0.home) + ' v ' + esc(r0.away) + '<br>' + esc(r0.round) + ' &middot; ' + esc(r0.date) + '</div>' +
            '<span class="badge ' + (r0.win ? 'badge-win' : 'badge-loss') + '" style="margin-top:9px">' + esc(r0.out) + '</span>'
          : '<div class="scard-meta">No recent results.</div>');
  }
  if ($('gcMiniLadder')) {
    $('gcMiniLadder').innerHTML =
      '<div class="scard-lbl"><i class="ti ti-list-numbers"></i> Ladder</div>' +
      '<table class="mini"><tbody>' +
      l.slice(0, 5).map(function (row) {
        return '<tr class="' + (row.us ? 'us' : '') + '"><td>' + row.pos + '. ' + esc(row.team) + '</td><td>' + row.pts + '</td></tr>';
      }).join('') + '</tbody></table>' +
      (D.ladder.sample ? '<span class="badge badge-sample" style="margin-top:8px">Sample</span>' : '');
  }

  if ($('gcStats')) {
    $('gcStats').innerHTML = D.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(s.val) + '</b><span>' + esc(s.lbl) + '</span></div>';
    }).join('');
  }
  if ($('gcPillars')) {
    $('gcPillars').innerHTML = D.pillars.map(function (p) {
      return '<a class="card pcard" href="' + p.href + '">' +
        '<i class="ti ' + p.icon + ' ic"></i><h3>' + esc(p.name) + '</h3>' +
        '<p>' + esc(p.blurb) + '</p>' +
        '<span class="go">Find out more <i class="ti ti-arrow-right"></i></span></a>';
    }).join('');
  }

  /* ======================= ABOUT ========================================= */
  if ($('gcAboutBody')) {
    $('gcAboutBody').innerHTML =
      '<p class="lead">' + esc(D.about.lead) + '</p>' +
      D.about.paras.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
  }
  if ($('gcAboutHed')) $('gcAboutHed').textContent = D.about.welcome;
  if ($('gcFacts')) {
    $('gcFacts').innerHTML =
      '<img class="side-crest" src="assets/logos/crest-navy.png" alt="Geelong City Cricket Club crest">' +
      '<div class="motto">' + esc(C.motto) + '</div>' +
      '<dl class="facts">' +
        '<div><dt>Established</dt><dd>' + C.est + '</dd></div>' +
        '<div><dt>Association</dt><dd><a href="' + C.assocUrl + '" target="_blank" rel="noopener">' + esc(C.assocShort) + '</a></dd></div>' +
        '<div><dt>Home ground</dt><dd>' + esc(C.ground) + '</dd></div>' +
        '<div><dt>Juniors &amp; lower grades</dt><dd>' + esc(C.ground2) + '</dd></div>' +
        '<div><dt>Email</dt><dd><a href="mailto:' + C.email + '">' + esc(C.email) + '</a></dd></div>' +
      '</dl>';
  }

  /* ======================= SENIORS ======================================= */
  if ($('gcSeniors')) {
    $('gcSeniors').innerHTML = D.seniors.map(function (s) {
      return '<article class="prog" id="' + s.key + '">' +
        '<div class="prog-head"><i class="ti ti-cricket"></i><div>' +
          '<div class="eyebrow">' + s.teams.length + ' teams &middot; Coordinator: ' + esc(s.coord) + '</div>' +
          '<h2 class="s-hed" style="margin:0">' + esc(s.name) + '</h2></div></div>' +
        '<div class="prog-body">' +
          '<div><p class="lead">' + esc(s.lead) + '</p><p>' + esc(s.body) + '</p>' +
            '<p style="margin-top:12px;font-size:13.5px;color:var(--muted)">For registration, fixtures or general enquiries contact <b>' + esc(s.coord) + '</b> at <a href="mailto:' + C.email + '" style="color:var(--navy3);font-weight:600">' + esc(C.email) + '</a>.</p>' +
            '<div class="hero-cta">' +
              '<a class="btn btn-accent" href="' + s.register + '" target="_blank" rel="noopener"><i class="ti ti-user-plus"></i> Register</a>' +
              '<a class="btn btn-outline" href="' + s.fixtures + '" target="_blank" rel="noopener"><i class="ti ti-calendar"></i> Fixtures</a>' +
              '<a class="btn btn-outline" href="' + s.ladder + '" target="_blank" rel="noopener"><i class="ti ti-list-numbers"></i> Ladder</a>' +
            '</div></div>' +
          '<aside><h3 style="font-family:\'Bebas Neue\';font-size:18px;color:var(--navy);letter-spacing:.5px;margin-bottom:8px">Teams</h3>' +
            '<ul class="tlist">' + s.teams.map(function (t) {
              return '<li><span>' + esc(t.name) + '</span><span class="sf">' + esc(t.surface) + '</span></li>';
            }).join('') + '</ul></aside>' +
        '</div></article>';
    }).join('');
  }

  /* ======================= JUNIORS ======================================= */
  if ($('gcJuniors')) {
    var J = D.juniors;
    $('gcJuniors').innerHTML =
      '<div class="split">' +
        '<div><p class="lead">' + esc(J.lead) + '</p><p>' + esc(J.body) + '</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-accent" href="' + J.registerBoys + '" target="_blank" rel="noopener"><i class="ti ti-user-plus"></i> Junior Boys registration</a>' +
            '<a class="btn btn-accent" href="' + J.registerGirls + '" target="_blank" rel="noopener"><i class="ti ti-user-plus"></i> Junior Girls registration</a>' +
          '</div></div>' +
        '<aside class="side"><h3>Junior Coordinator</h3>' +
          '<dl class="facts">' +
            '<div><dt>Coordinator</dt><dd>' + esc(J.coord) + '</dd></div>' +
            '<div><dt>Email</dt><dd><a href="mailto:' + C.email + '">' + esc(C.email) + '</a></dd></div>' +
            '<div><dt>Where</dt><dd>' + esc(C.ground2) + '</dd></div>' +
          '</dl></aside>' +
      '</div>' +
      '<div class="grid g2" style="margin-top:26px">' +
        '<div class="card" style="padding:22px"><div class="eyebrow">Boys</div>' +
          '<h3 style="font-family:\'Bebas Neue\';font-size:22px;color:var(--navy);letter-spacing:.4px;margin-bottom:8px">Junior Boys</h3>' +
          '<ul class="tlist">' + J.boys.map(function (t) { return '<li><span>' + esc(t) + '</span><i class="ti ti-check" style="color:var(--navy3)"></i></li>'; }).join('') + '</ul>' +
          '<div class="hero-cta" style="margin-top:14px">' +
            '<a class="btn btn-outline btn-sm" href="' + J.fixturesBoys + '" target="_blank" rel="noopener">Fixtures</a>' +
            '<a class="btn btn-outline btn-sm" href="' + J.ladderBoys + '" target="_blank" rel="noopener">Ladder</a></div>' +
        '</div>' +
        '<div class="card" style="padding:22px"><div class="eyebrow">Girls</div>' +
          '<h3 style="font-family:\'Bebas Neue\';font-size:22px;color:var(--navy);letter-spacing:.4px;margin-bottom:8px">Junior Girls</h3>' +
          '<ul class="tlist">' + J.girls.map(function (t) { return '<li><span>' + esc(t) + '</span><i class="ti ti-check" style="color:var(--navy3)"></i></li>'; }).join('') + '</ul>' +
          '<div class="hero-cta" style="margin-top:14px">' +
            '<a class="btn btn-outline btn-sm" href="' + J.fixturesGirls + '" target="_blank" rel="noopener">Fixtures</a>' +
            '<a class="btn btn-outline btn-sm" href="' + J.ladderGirls + '" target="_blank" rel="noopener">Ladder</a></div>' +
        '</div>' +
      '</div>';
  }

  /* ======================= BLAST ========================================= */
  if ($('gcBlast')) {
    $('gcBlast').innerHTML =
      '<div class="split">' +
        '<div><p class="lead">' + esc(D.blast.lead) + '</p><p>' + esc(D.blast.body) + '</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-accent" href="' + C.blastUrl + '" target="_blank" rel="noopener"><i class="ti ti-external-link"></i> Register for Cricket Blast</a>' +
            '<a class="btn btn-outline" href="contact.html">Ask a question</a></div></div>' +
        '<aside class="side"><h3>At a glance</h3><dl class="facts">' +
          '<div><dt>Ages</dt><dd>5&ndash;8 years</dd></div>' +
          '<div><dt>Streams</dt><dd>Cricket Blast &amp; All Girls Blasters</dd></div>' +
          '<div><dt>Where</dt><dd>' + esc(C.ground2) + '</dd></div>' +
          '<div><dt>Coordinator</dt><dd>' + esc(D.juniors.coord) + '</dd></div>' +
          '<div><dt>Contact</dt><dd><a href="mailto:' + C.email + '">' + esc(C.email) + '</a></dd></div>' +
        '</dl></aside></div>';
  }
  if ($('gcBlastPoints')) {
    $('gcBlastPoints').innerHTML = D.blast.points.map(function (p) {
      return '<div class="card pcard" style="text-align:center"><i class="ti ' + p.icon + ' ic"></i>' +
        '<h3>' + esc(p.h) + '</h3><p>' + esc(p.p) + '</p></div>';
    }).join('');
  }

  /* ======================= MATCH CENTRE ================================== */
  if ($('gcSampleNote')) {
    $('gcSampleNote').innerHTML = '<i class="ti ti-flask"></i> <b>Sample data shown.</b>&nbsp;' +
      'Ladder, fixtures and results below are placeholders for layout. These connect to live SportsWeb One / PlayHQ feeds.';
  }
  if ($('gcFixtures')) {
    $('gcFixtures').innerHTML =
      '<thead><tr><th>Round</th><th>Date</th><th>Match</th><th>Venue</th></tr></thead><tbody>' +
      f.map(function (m) {
        var isUs = function (t) { return /geelong city/i.test(t) ? ' class="us"' : ''; };
        return '<tr><td>' + esc(m.round) + '</td><td>' + esc(m.date) + '<br><small>' + esc(m.time) + '</small></td>' +
          '<td><span' + isUs(m.home) + '>' + esc(m.home) + '</span> v <span' + isUs(m.away) + '>' + esc(m.away) + '</span></td>' +
          '<td>' + esc(m.venue) + '</td></tr>';
      }).join('') + '</tbody>';
  }
  if ($('gcResults')) {
    $('gcResults').innerHTML =
      '<thead><tr><th>Round</th><th>Match</th><th>Score</th><th>Outcome</th></tr></thead><tbody>' +
      r.map(function (m) {
        return '<tr><td>' + esc(m.round) + '<br><small>' + esc(m.date) + '</small></td>' +
          '<td>' + esc(m.home) + ' v ' + esc(m.away) + '</td>' +
          '<td>' + esc(m.hs) + ' v ' + esc(m.as) + '</td>' +
          '<td><span class="badge ' + (m.win ? 'badge-win' : 'badge-loss') + '">' + esc(m.out) + '</span></td></tr>';
      }).join('') + '</tbody>';
  }
  if ($('gcLadder')) {
    $('gcLadder').innerHTML =
      '<thead><tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th></tr></thead><tbody>' +
      l.map(function (row) {
        return '<tr class="' + (row.us ? 'usrow' : '') + '"><td>' + row.pos + '</td><td>' + esc(row.team) + '</td>' +
          '<td>' + row.P + '</td><td>' + row.W + '</td><td>' + row.L + '</td><td><b>' + row.pts + '</b></td></tr>';
      }).join('') + '</tbody>';
  }
  if ($('gcMatchLinks')) {
    $('gcMatchLinks').innerHTML = D.matchLinks.map(function (m) {
      return '<div class="card" style="padding:18px;display:flex;flex-direction:column;gap:8px;align-items:flex-start">' +
        '<h3 style="font-family:\'Bebas Neue\';font-size:20px;color:var(--navy);letter-spacing:.4px">' + esc(m.name) + '</h3>' +
        '<a class="btn btn-outline btn-sm" href="' + m.fixtures + '" target="_blank" rel="noopener"><i class="ti ti-calendar"></i> Fixtures &amp; Results</a>' +
        '<a class="btn btn-outline btn-sm" href="' + m.ladder + '" target="_blank" rel="noopener"><i class="ti ti-list-numbers"></i> Ladder</a></div>';
    }).join('');
  }

  /* ======================= REGISTRATION ================================== */
  if ($('gcRegister')) {
    $('gcRegister').innerHTML = D.register.map(function (x) {
      return '<a class="card pcard" href="' + x.url + '" target="_blank" rel="noopener">' +
        '<i class="ti ti-user-plus ic"></i><h3>' + esc(x.name) + '</h3>' +
        '<p>' + esc(x.note) + '</p>' +
        '<span class="go">Register on PlayHQ <i class="ti ti-external-link"></i></span></a>';
    }).join('');
  }

  /* ======================= NEWS ========================================== */
  function newsHTML(items) {
    return items.map(function (n) {
      var cover = n.img
        ? '<div class="ncard-cover has-photo" style="--news-img:' + imgUrl(n.img) + '"></div>'
        : '<div class="ncard-cover"><img src="assets/logos/crest-white.png" alt=""></div>';
      return '<article class="card ncard">' + cover +
        '<div class="ncard-body"><div class="ncard-meta">' +
          '<span class="badge badge-navy">' + esc(n.tag) + '</span><span>' + esc(n.date) + '</span></div>' +
          '<h3>' + esc(n.title) + '</h3><p>' + esc(n.blurb) + '</p>' +
          (n.sample ? '<span class="badge badge-sample" style="margin-top:9px">Sample</span>' : '') +
        '</div></article>';
    }).join('');
  }
  if ($('gcNewsHome')) $('gcNewsHome').innerHTML = newsHTML(D.news.slice(0, 3));
  if ($('gcNewsAll')) $('gcNewsAll').innerHTML = newsHTML(D.news);

  /* ======================= COMMITTEE ===================================== */
  if ($('gcCommitteeIntro')) $('gcCommitteeIntro').textContent = D.committeeIntro;
  if ($('gcCoachesIntro')) $('gcCoachesIntro').textContent = D.coachesIntro;
  function personCards(list) {
    return list.map(function (c) {
      var av = c.photo
        ? '<img class="avatar" src="assets/img/' + c.photo + '" alt="' + esc(c.name) + '" loading="lazy">'
        : '<div class="avatar-ph">' + initials(c.name) + '</div>';
      return '<div class="card" style="padding:20px">' + av +
        '<div class="eyebrow">' + esc(c.role) + '</div>' +
        '<h3 style="font-family:\'Bebas Neue\';font-size:22px;color:var(--navy);letter-spacing:.4px;margin:4px 0 8px">' + esc(c.name) + '</h3>' +
        '<a href="mailto:' + c.email + '" style="font-size:12.5px;color:var(--muted);display:inline-flex;gap:5px;align-items:center"><i class="ti ti-mail"></i> ' + esc(c.email) + '</a></div>';
    }).join('');
  }
  if ($('gcContacts'))     $('gcContacts').innerHTML     = personCards(D.contacts);
  if ($('gcCommittee'))    $('gcCommittee').innerHTML    = personCards(D.committee);
  if ($('gcCoordinators')) $('gcCoordinators').innerHTML = personCards(D.coordinators);
  if ($('gcCoordinatorsMini')) {
    $('gcCoordinatorsMini').innerHTML = '<dl class="facts">' + D.coordinators.map(function (c) {
      return '<div><dt>' + esc(c.role) + '</dt><dd>' + esc(c.name) + '</dd></div>';
    }).join('') + '</dl>';
  }

  /* ======================= COMMUNICATIONS ================================ */
  if ($('gcChannels')) {
    $('gcChannels').innerHTML = D.channels.map(function (c) {
      return '<article class="card chan">' +
        (c.rec ? '<span class="badge badge-accent rec">Recommended</span>' : '') +
        '<i class="ti ' + c.icon + ' ic"></i><h3>' + esc(c.name) + '</h3>' +
        '<div class="cad">' + esc(c.cadence) + '</div><p>' + esc(c.what) + '</p>' +
        '<p class="line"><b>Best for:</b> ' + esc(c.best) + '</p>' +
        '<p class="line"><b>Opt in:</b> ' + esc(c.optin) + '</p></article>';
    }).join('');
  }
  if ($('gcAudiences')) {
    $('gcAudiences').innerHTML = D.audiences.map(function (a) {
      return '<article class="card aud"><h3>' + esc(a.who) + '</h3><p>' + esc(a.note) + '</p>' +
        '<div class="tags">' + a.tags.map(function (t) { return '<span class="badge badge-gray">' + esc(t) + '</span>'; }).join('') + '</div></article>';
    }).join('');
  }
  if ($('gcSteps')) {
    $('gcSteps').innerHTML = D.commSteps.map(function (s, i) {
      return '<div class="step"><span class="step-n">' + (i + 1) + '</span>' +
        '<div><h3>' + esc(s.h) + '</h3><p>' + esc(s.p) + '</p></div></div>';
    }).join('');
  }

  /* ======================= SPONSORS ====================================== */
  if ($('gcSponsorIntro')) $('gcSponsorIntro').textContent = D.sponsorIntro;
  function sponsorHTML(list, cls) {
    return list.map(function (s) {
      var tag = s.url ? 'a' : 'div';
      var href = s.url ? ' href="' + s.url + '" target="_blank" rel="noopener"' : '';
      var inner = s.logo
        ? '<img src="assets/img/' + s.logo + '" alt="' + esc(s.name) + '" loading="lazy">'
        : esc(s.name) + (s.url ? ' <i class="ti ti-external-link"></i>' : '');
      return '<' + tag + ' class="' + cls + (s.logo ? ' has-logo' : '') + '"' + href + '>' + inner + '</' + tag + '>';
    }).join('');
  }
  if ($('gcSponsorRail')) $('gcSponsorRail').innerHTML = sponsorHTML(D.sponsors.slice(0, 8), 'sp-chip');
  if ($('gcSponsorGrid')) $('gcSponsorGrid').innerHTML = sponsorHTML(D.sponsors, 'sp-tile');
  if ($('gcSponsorPdf')) $('gcSponsorPdf').href = C.sponsorPdf;

  /* ======================= DOCUMENTS ===================================== */
  if ($('gcDocs')) {
    $('gcDocs').innerHTML = D.documents.map(function (d) {
      var ext = d.url && d.url !== '#';
      return '<' + (ext ? 'a' : 'div') + ' class="card pcard"' +
        (ext ? ' href="' + d.url + '" target="_blank" rel="noopener"' : '') + '>' +
        '<i class="ti ' + (d.type === 'PDF' ? 'ti-file-type-pdf' : d.type === 'LINK' ? 'ti-external-link' : 'ti-file-text') + ' ic"></i>' +
        '<h3>' + esc(d.name) + '</h3>' +
        '<span class="go">' + esc(d.type) + (ext ? ' <i class="ti ti-arrow-right"></i>' : ' &middot; coming soon') + '</span>' +
        '</' + (ext ? 'a' : 'div') + '>';
    }).join('');
  }

  /* ======================= PHOTOS ========================================= */
  // page-head background per page
  var pheadPhoto = { seniors: P.seniors, juniors: P.juniors, committee: P.committee, contact: P.contact };
  var ph = document.querySelector('.phead');
  if (ph && pheadPhoto[page]) applyBg(ph, '--phead-img', pheadPhoto[page], 'has-photo');

  // about panel
  var ap = $('gcAboutPhoto');
  if (ap) {
    if (P.about) { ap.style.setProperty('--about-img', imgUrl(P.about));
      ap.innerHTML = '<span class="cap">' + esc(C.groundShort) + '</span>'; }
    else ap.style.display = 'none';
  }
  // section banners
  banner('gcSeniorsBanner', P.seniors, 'Senior Cricket');
  banner('gcJuniorsBanner', P.juniors, 'Junior Cricket');
  banner('gcBlastBanner',   P.blast,   'Woolworths Cricket Blast');
  banner('gcCommitteeBanner', P.committee, 'Committee & Coaches');

  /* ======================= CONTACT FORM =================================== */
  window.gcSubmit = function (e) {
    e.preventDefault();
    var n = $('gcFormNote');
    if (n) { n.hidden = false; n.textContent = 'This form is a front-end placeholder — connect it to the club inbox (or SportsWeb One) to go live.'; }
    return false;
  };
})();
