/* ============================================================================
   GEELONG CITY CC — shared site script  (assets/gc-site.js)
   ----------------------------------------------------------------------------
   Injects the nav + footer chrome and renders every data-driven section from
   window.GC_DATA. One script, shared by all three designs and all ten pages —
   so content is edited in ONE place (gc-data.js) and every page updates.

   CONNECT → SportsWeb One: replace the ladder/fixtures/results blocks in
   gc-data.js with live endpoints. No page markup changes required.
   ========================================================================== */
(function () {
  var D = window.GC_DATA;
  if (!D) return;
  var page = document.body.getAttribute('data-page');
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------------- NAV ---------------------------------------------------- */
  var NAV = [
    ['Home', 'index.html', 'index'],
    ['About Us', 'about.html', 'about'],
    ['Teams', 'teams.html', 'teams'],
    ['Cricket Blast', 'cricket-blast.html', 'cricket-blast'],
    ['Match Centre', 'match-centre.html', 'match-centre'],
    ['Registration', 'registration.html', 'registration'],
    ['Communications', 'communications.html', 'communications'],
    ['News', 'news.html', 'news'],
    ['Sponsors', 'sponsors.html', 'sponsors'],
    ['Contact', 'contact.html', 'contact']
  ];
  function navHTML(cls) {
    return NAV.map(function (n) {
      return '<a class="' + cls + (n[2] === page ? ' active' : '') + '" href="' + n[1] + '">' + n[0] + '</a>';
    }).join('');
  }
  if ($('navLinks')) $('navLinks').innerHTML = navHTML('nav-link');
  if ($('mobLinks')) $('mobLinks').innerHTML = navHTML('mob-link') +
    '<a class="btn btn-primary" style="margin-top:10px" href="registration.html">Register to play</a>';
  var burger = $('burger'), mob = $('mobmenu');
  if (burger && mob) burger.addEventListener('click', function () { mob.classList.toggle('open'); });

  /* ---------------- FOOTER ------------------------------------------------- */
  if ($('yr')) $('yr').textContent = new Date().getFullYear();
  if ($('partners')) {
    $('partners').innerHTML = '<span class="partners-lbl">Proud members of</span>' +
      D.partners.map(function (p) {
        return '<a href="' + p.url + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>';
      }).join('');
  }

  /* ---------------- SHARED BLOCKS ----------------------------------------- */
  if ($('aboutBody')) {
    var paras = D.about.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    $('aboutBody').innerHTML = (page === 'about'
      ? '<p class="lead">' + esc(D.about.lead) + '</p>' : '') + paras;
  }
  if ($('welcomeHed')) $('welcomeHed').textContent = D.about.welcome;

  if ($('stats')) {
    $('stats').innerHTML = D.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(s.val) + '</b><span>' + esc(s.lbl) + '</span></div>';
    }).join('');
  }

  function contactCards(el) {
    el.innerHTML = D.contacts.map(function (c) {
      return '<div class="card ccard"><div class="crole">' + esc(c.role) + '</div>' +
        '<h3>' + esc(c.name) + '</h3>' +
        '<a class="cmail" href="mailto:' + c.email + '"><i class="ti ti-mail"></i> ' + esc(c.email) + '</a></div>';
    }).join('');
  }
  if ($('contacts')) contactCards($('contacts'));
  if ($('contactsMini')) {
    $('contactsMini').innerHTML = '<dl class="factlist">' + D.contacts.map(function (c) {
      return '<div><dt>' + esc(c.role) + '</dt><dd>' + esc(c.name) + '</dd></div>';
    }).join('') + '</dl>';
  }

  /* ---------------- PROGRAMS ---------------------------------------------- */
  if ($('programs')) {
    $('programs').innerHTML = D.programs.map(function (p) {
      return '<a class="card pcard" href="teams.html#' + p.key + '">' +
        '<i class="ti ' + p.icon + ' pcard-ic"></i>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p>' + esc(p.lead) + '</p>' +
        '<span class="pcard-go">' + p.teams.length + ' teams <i class="ti ti-arrow-right"></i></span></a>';
    }).join('');
  }
  if ($('programsFull')) {
    $('programsFull').innerHTML = D.programs.map(function (p) {
      return '<article class="prog" id="' + p.key + '">' +
        '<div class="prog-head"><i class="ti ' + p.icon + '"></i>' +
          '<div><span class="eyebrow">' + esc(p.teams.length) + ' teams · Coordinator: ' + esc(p.coord) + '</span>' +
          '<h2 class="s-hed">' + esc(p.name) + '</h2></div></div>' +
        '<div class="prog-body">' +
          '<div><p class="lead">' + esc(p.lead) + '</p><p>' + esc(p.body) + '</p>' +
            '<div class="hero-cta">' +
              '<a class="btn btn-primary" href="' + p.register + '" target="_blank" rel="noopener"><i class="ti ti-user-plus"></i> Register — ' + esc(p.name) + '</a>' +
              '<a class="btn btn-outline" href="match-centre.html">Fixtures &amp; ladder</a>' +
            '</div></div>' +
          '<aside class="prog-side"><h4>Teams</h4><ul class="tlist">' +
            p.teams.map(function (t) { return '<li><i class="ti ti-check"></i> ' + esc(t) + '</li>'; }).join('') +
          '</ul><p class="prog-contact"><i class="ti ti-mail"></i> ' + esc(p.coord) + '<br><a href="mailto:' + p.email + '">' + esc(p.email) + '</a></p></aside>' +
        '</div></article>';
    }).join('');
  }

  /* ---------------- BLAST -------------------------------------------------- */
  if ($('blastBody')) $('blastBody').textContent = D.blast.body;
  if ($('blastLink')) $('blastLink').href = D.blast.url;

  /* ---------------- MATCH -------------------------------------------------- */
  var f = D.fixtures.rows, r = D.results.rows, l = D.ladder.rows;
  var isUs = function (t) { return /geelong city/i.test(t); };

  if ($('nextMatch')) {
    var n = f[0];
    $('nextMatch').innerHTML = n
      ? '<div class="scard-big">' + esc(n.home) + ' <span>v</span> ' + esc(n.away) + '</div>' +
        '<div class="scard-meta">' + esc(n.round) + ' · ' + esc(n.date) + ' ' + esc(n.time) + '<br>' + esc(n.venue) + '</div>' +
        (D.fixtures.sample ? '<span class="pill pill-sample">Sample</span>' : '')
      : '<div class="scard-meta">No upcoming fixtures.</div>';
  }
  if ($('lastResult')) {
    var x = r[0];
    $('lastResult').innerHTML = x
      ? '<div class="scard-big">' + esc(x.hScore) + ' <span>v</span> ' + esc(x.aScore) + '</div>' +
        '<div class="scard-meta">' + esc(x.home) + ' v ' + esc(x.away) + '<br>' + esc(x.round) + ' · ' + esc(x.date) + '</div>' +
        '<span class="pill ' + (x.win ? 'pill-win' : 'pill-loss') + '">' + esc(x.outcome) + '</span>'
      : '<div class="scard-meta">No recent results.</div>';
  }
  if ($('miniLadder')) {
    $('miniLadder').innerHTML = '<table class="mini">' + l.slice(0, 5).map(function (row) {
      return '<tr class="' + (row.us ? 'us' : '') + '"><td>' + row.pos + '</td><td>' + esc(row.team) + '</td><td>' + row.pts + '</td></tr>';
    }).join('') + '</table>' + (D.ladder.sample ? '<span class="pill pill-sample">Sample</span>' : '');
  }

  if ($('fixturesTbl')) {
    $('fixturesTbl').innerHTML =
      '<thead><tr><th>Round</th><th>Date</th><th>Match</th><th>Venue</th></tr></thead><tbody>' +
      f.map(function (m) {
        return '<tr><td>' + esc(m.round) + '</td><td>' + esc(m.date) + '<br><small>' + esc(m.time) + '</small></td>' +
          '<td><strong class="' + (isUs(m.home) ? 'us' : '') + '">' + esc(m.home) + '</strong> v ' +
          '<strong class="' + (isUs(m.away) ? 'us' : '') + '">' + esc(m.away) + '</strong></td>' +
          '<td>' + esc(m.venue) + '</td></tr>';
      }).join('') + '</tbody>';
  }
  if ($('resultsTbl')) {
    $('resultsTbl').innerHTML =
      '<thead><tr><th>Round</th><th>Match</th><th>Score</th><th>Outcome</th></tr></thead><tbody>' +
      r.map(function (m) {
        return '<tr><td>' + esc(m.round) + '<br><small>' + esc(m.date) + '</small></td>' +
          '<td>' + esc(m.home) + ' v ' + esc(m.away) + '</td>' +
          '<td>' + esc(m.hScore) + ' v ' + esc(m.aScore) + '</td>' +
          '<td><span class="pill ' + (m.win ? 'pill-win' : 'pill-loss') + '">' + esc(m.outcome) + '</span></td></tr>';
      }).join('') + '</tbody>';
  }
  if ($('ladderTbl')) {
    $('ladderTbl').innerHTML =
      '<thead><tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th></tr></thead><tbody>' +
      l.map(function (row) {
        return '<tr class="' + (row.us ? 'us' : '') + '"><td>' + row.pos + '</td><td>' + esc(row.team) + '</td>' +
          '<td>' + row.P + '</td><td>' + row.W + '</td><td>' + row.L + '</td><td><strong>' + row.pts + '</strong></td></tr>';
      }).join('') + '</tbody>';
  }
  if ($('matchLinks')) {
    $('matchLinks').innerHTML = D.matchLinks.map(function (m) {
      return '<div class="card mcard"><h3>' + esc(m.name) + '</h3>' +
        '<a class="btn btn-outline btn-sm" href="' + m.fixtures + '" target="_blank" rel="noopener"><i class="ti ti-calendar"></i> Fixtures &amp; Results</a>' +
        '<a class="btn btn-outline btn-sm" href="' + m.ladder + '" target="_blank" rel="noopener"><i class="ti ti-list-numbers"></i> Ladder</a></div>';
    }).join('');
  }
  if ($('sampleNote')) {
    $('sampleNote').innerHTML = '<i class="ti ti-flask"></i> <strong>Sample data shown.</strong> ' +
      'Ladder, fixtures and results are placeholders for layout — these connect to live SportsWeb One / PlayHQ feeds.';
  }

  /* ---------------- REGISTRATION ------------------------------------------ */
  if ($('registerLinks')) {
    $('registerLinks').innerHTML = D.registerLinks.map(function (x) {
      return '<a class="card rcard" href="' + x.url + '" target="_blank" rel="noopener">' +
        '<h3>' + esc(x.name) + '</h3>' +
        '<span class="rcard-go">Register on PlayHQ <i class="ti ti-external-link"></i></span></a>';
    }).join('');
  }

  /* ---------------- NEWS --------------------------------------------------- */
  function newsHTML(items) {
    return items.map(function (n) {
      return '<article class="card ncard">' +
        '<div class="ncard-cover"><img src="../assets/logos/crest-white.png" alt=""></div>' +
        '<div class="ncard-body"><div class="ncard-meta"><span class="tag">' + esc(n.tag) + '</span><span>' + esc(n.date) + '</span></div>' +
        '<h3>' + esc(n.title) + '</h3><p>' + esc(n.blurb) + '</p>' +
        (n.sample ? '<span class="pill pill-sample">Sample</span>' : '') + '</div></article>';
    }).join('');
  }
  if ($('news')) $('news').innerHTML = newsHTML(D.news);
  if ($('newsFull')) $('newsFull').innerHTML = newsHTML(D.news);

  /* ---------------- COMMUNICATIONS ---------------------------------------- */
  if ($('channels')) {
    $('channels').innerHTML = D.channels.map(function (c) {
      return '<article class="card chan">' +
        (c.rec ? '<span class="pill pill-rec">Recommended</span>' : '') +
        '<i class="ti ' + c.icon + ' chan-ic"></i>' +
        '<h3>' + esc(c.name) + '</h3>' +
        '<div class="chan-cad">' + esc(c.cadence) + '</div>' +
        '<p>' + esc(c.what) + '</p>' +
        '<p class="chan-line"><strong>Best for:</strong> ' + esc(c.best) + '</p>' +
        '<p class="chan-line"><strong>Opt in:</strong> ' + esc(c.optin) + '</p>' +
        '</article>';
    }).join('');
  }
  if ($('audiences')) {
    $('audiences').innerHTML = D.audiences.map(function (a) {
      return '<article class="card aud"><h3>' + esc(a.who) + '</h3><p>' + esc(a.note) + '</p>' +
        '<div class="tags">' + a.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div></article>';
    }).join('');
  }
  if ($('commSteps')) {
    $('commSteps').innerHTML = D.commSteps.map(function (s, i) {
      return '<div class="step"><span class="step-n">' + (i + 1) + '</span>' +
        '<div><h3>' + esc(s.title) + '</h3><p>' + esc(s.body) + '</p></div></div>';
    }).join('');
  }

  /* ---------------- SPONSORS ---------------------------------------------- */
  function sponsorHTML(list, cls) {
    return list.map(function (s) {
      var tag = s.url ? 'a' : 'div';
      var href = s.url ? ' href="' + s.url + '" target="_blank" rel="noopener"' : '';
      return '<' + tag + ' class="' + cls + '"' + href + '>' + esc(s.name) +
        (s.url ? ' <i class="ti ti-external-link"></i>' : '') + '</' + tag + '>';
    }).join('');
  }
  if ($('sponsorsMini')) $('sponsorsMini').innerHTML = sponsorHTML(D.sponsors.slice(0, 8), 'sponsor-chip');
  if ($('sponsorsFull')) $('sponsorsFull').innerHTML = sponsorHTML(D.sponsors, 'sponsor-tile');
  if ($('sponsorsIntro')) $('sponsorsIntro').textContent = D.sponsorsIntro;
  if ($('sponsorPdf')) $('sponsorPdf').href = D.meta.sponsorPdf;

  /* ---------------- CONTACT FORM (front-end only) ------------------------- */
  window.gcFormNote = function (e) {
    e.preventDefault();
    var note = $('formNote');
    if (note) {
      note.hidden = false;
      note.textContent = 'This form is a front-end placeholder — connect it to the club inbox (or SportsWeb One) to go live.';
    }
    return false;
  };
})();
