/* ============================================================================
   GEELONG CITY CC — RDCA-style home renderer     (assets/gc-home.js)
   Renders the rich homepage blocks from window.GCC. Loads after gc-site.js.
   ========================================================================== */
(function () {
  var D = window.GCC; if (!D) return;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var C = D.club, P = D.photos || {};
  var init = function (n) { return String(n || '').replace(/[^A-Za-z. ]/g, '').split(/[\s.]+/)
    .filter(Boolean).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase(); };
  var AV = ['#102b5e', '#0d8fa0', '#2f9e57', '#7f4bb5', '#c9822a'];

  /* ---------------- LIVE SCORES TICKER ---------------- */
  if ($('lsBar')) {
    var items = D.liveTicker.map(function (t) {
      return '<span class="ls-it"><span class="gr">' + esc(t.badge) + '</span>' +
        (t.live ? '<span class="lv"><i></i>Live</span>' : '') +
        '<b>' + esc(t.txt) + '</b>' + (t.extra ? '<span class="ov">' + esc(t.extra) + '</span>' : '') +
        '<span>v</span><b>' + esc(t.vs) + '</b>' +
        '<span class="note">' + esc(t.note) + '</span></span>';
    }).join('');
    $('lsBar').className = 'lsbar';
    $('lsBar').innerHTML = '<span class="tag"><span class="dot"></span> Live Scores</span>' +
      '<span class="scroll"><span class="track">' + items + items + '</span></span>';
  }

  /* ---------------- HERO ---------------- */
  var hero = $('rHero');
  if (hero) {
    if (P.hero) { hero.style.setProperty('--hero-img', "url('assets/img/" + P.hero + "')"); hero.classList.add('has-photo'); }
    var L = D.live;
    var team = function (t, us) {
      return '<div class="mc-team' + (us ? ' us' : '') + '">' +
        '<div class="mc-code">' + esc(t.code) + '</div>' +
        '<div class="mc-nm"><b>' + esc(t.name) + '</b><span>' + esc(t.sub) + '</span></div>' +
        '<div class="mc-sc"><b>' + esc(t.score) + '</b>' + (t.overs ? '<span>' + esc(t.overs) + '</span>' : '') + '</div></div>';
    };
    hero.innerHTML = '<div class="wrap"><div class="rgrid">' +
      '<div>' +
        '<h1>HOME OF<br><span class="l2">THE SHARKS</span><br><span class="l3">SINCE 1928</span></h1>' +
        '<p class="blurb">' + esc(C.name) + ' — proudly fielding four senior men\'s teams, two senior women\'s teams and seven junior teams in the ' + esc(C.assoc) + '.</p>' +
        '<div class="rcta">' +
          '<a class="btn btn-accent btn-lg" href="registration.html"><i class="ti ti-user-plus"></i> Register Now</a>' +
          '<a class="btn btn-ghost btn-lg" href="match-centre.html"><i class="ti ti-calendar"></i> Fixtures</a>' +
          '<a class="btn btn-ghost btn-lg" href="match-centre.html"><i class="ti ti-chart-bar"></i> Live Scores</a>' +
        '</div>' +
        '<div class="season-pill"><b><i></i>2025/26 Season</b> Round 14 of 18 underway</div>' +
        '<div class="hstats">' + D.heroStats.map(function (s) {
          return '<div class="hstat"><i class="ti ' + s.icon + '"></i><b>' + esc(s.val) + '</b><span>' + esc(s.lbl) + '</span></div>';
        }).join('') + '</div>' +
      '</div>' +
      '<div class="mcard">' +
        '<div class="mc-top"><span class="mc-live"><i></i>' + esc(L.state) + '</span>' +
          '<span class="mc-meta">' + esc(L.comp) + ' · ' + esc(L.round) + '<br>' + esc(L.venue) + '</span></div>' +
        team(L.home, L.home.us) + team(L.away, L.away.us) +
        '<div class="mc-tiles">' + L.tiles.map(function (t) {
          return '<div class="mc-tile' + (t.hot ? ' hot' : '') + '"><div class="l">' + esc(t.lbl) + '</div>' +
            '<div class="b">' + esc(t.big) + '</div><div class="s">' + esc(t.sub) + '</div></div>';
        }).join('') + '</div>' +
        '<div class="mc-balls"><div class="l">Last 6 deliveries</div><div class="row">' +
          L.lastSix.map(function (b) { return '<span class="ball ' + (b.cls || '') + '">' + esc(b.v) + '</span>'; }).join('') +
          '<span class="crr">' + esc(L.crr) + '</span></div></div>' +
        '<a class="mc-btn" href="match-centre.html"><i class="ti ti-external-link"></i> Full Match Centre</a>' +
      '</div>' +
    '</div></div>';
  }

  /* ---------------- FEATURED NEWS ---------------- */
  if ($('featNews')) {
    var F = D.featured;
    $('featNews').innerHTML = '<div class="in"><span class="badge badge-accent">' + esc(F.tag) + '</span>' +
      '<h2>' + esc(F.title) + '</h2><div class="m">' + esc(F.meta) + '</div></div>';
  }

  /* ---------------- COMPETITION HUB ---------------- */
  if ($('hubLadder')) {
    $('hubLadder').innerHTML = '<table class="lad"><thead><tr>' +
      '<th></th><th>Club</th><th>P</th><th>W</th><th>L</th><th>Form</th><th>Pts</th></tr></thead><tbody>' +
      D.ladder.rows.map(function (r) {
        var cls = (r.us ? 'us ' : '') + (r.pos <= 2 ? 'top' : '');
        return '<tr class="' + cls.trim() + '"><td><span class="rank">' + r.pos + '</span></td>' +
          '<td>' + esc(r.team) + '</td><td>' + r.P + '</td><td>' + r.W + '</td><td>' + r.L + '</td>' +
          '<td><span class="form">' + (r.form || []).map(function (f) {
            return '<span class="' + f + '">' + f + '</span>'; }).join('') + '</span></td>' +
          '<td class="pts">' + r.pts + '</td></tr>';
      }).join('') + '</tbody></table>';
  }
  if ($('hubFixtures')) {
    $('hubFixtures').innerHTML = '<div class="hub-list">' + D.fixtures.rows.map(function (m) {
      var d = m.date.replace(/^\w+\s/, '').split(' ');
      return '<div class="hub-row"><div class="dt"><b>' + esc(d[0]) + '</b><span>' + esc(d[1] || '') + '</span></div>' +
        '<div class="inf"><b>' + esc(m.home) + ' vs ' + esc(m.away) + '</b>' +
        '<span>' + esc(m.round) + ' · ' + esc(m.venue) + '</span></div>' +
        '<div class="rt">' + esc(m.time) + '</div></div>';
    }).join('') + '</div>';
  }
  if ($('hubResults')) {
    $('hubResults').innerHTML = '<div class="hub-list">' + D.results.rows.map(function (m) {
      return '<div class="hub-row"><div class="dt"><b>' + esc(m.date.split(' ')[1]) + '</b><span>' + esc(m.date.split(' ')[2] || '') + '</span></div>' +
        '<div class="inf"><b>' + esc(m.home) + ' ' + esc(m.hs) + ' v ' + esc(m.as) + ' ' + esc(m.away) + '</b>' +
        '<span>' + esc(m.round) + '</span></div>' +
        '<div class="rt"><span class="badge ' + (m.win ? 'badge-win' : 'badge-loss') + '">' + esc(m.out) + '</span></div></div>';
    }).join('') + '</div>';
  }
  // tab switching
  Array.prototype.forEach.call(document.querySelectorAll('.hub-tab'), function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-tab');
      Array.prototype.forEach.call(document.querySelectorAll('.hub-tab'), function (x) { x.classList.toggle('on', x === b); });
      Array.prototype.forEach.call(document.querySelectorAll('.hub-pane'), function (p) {
        p.classList.toggle('on', p.getAttribute('data-pane') === t); });
    });
  });

  /* ---------------- TOP PERFORMERS ---------------- */
  function perfRows(list, cls) {
    return list.map(function (p, i) {
      return '<div class="prow"><span class="n">' + p.rank + '</span>' +
        '<span class="pav" style="background:' + AV[i % AV.length] + '">' + init(p.name) + '</span>' +
        '<span class="nm"><b>' + esc(p.name) + '</b><span>' + esc(p.team) + '</span></span>' +
        '<span class="v"><b>' + esc(p.val) + '</b><span>' + esc(p.avg) + '</span></span></div>';
    }).join('');
  }
  if ($('perfRuns')) $('perfRuns').innerHTML = perfRows(D.performers.runs);
  if ($('perfWkts')) $('perfWkts').innerHTML = perfRows(D.performers.wickets);
  if ($('perfSeason')) $('perfSeason').textContent = D.performers.season;

  /* ---------------- TEAM LINE-UP ---------------- */
  if ($('lineUp')) {
    var LU = D.lineup;
    $('lineUp').innerHTML =
      '<div class="hd"><span class="tag"><i class="ti ti-clipboard-list"></i> Team Line-up</span>' +
        (LU.announced ? '<span class="ann"><i class="ti ti-check"></i> Announced</span>' : '') +
        '<h2>' + esc(LU.team).toUpperCase() + '</h2><div class="meta">' + esc(LU.meta) + '</div></div>' +
      '<div class="xi">' + LU.players.map(function (p) {
        return '<div class="xi-p"><span class="num">' + p.n + '</span><span class="pn">' + esc(p.name) + '</span>' +
          (p.badge ? '<span class="bd">' + esc(p.badge) + '</span>' : '') + '</div>';
      }).join('') + '</div>' +
      '<div class="ft"><span>Latest selection' + (LU.sample ? ' · sample' : '') + '</span>' +
        '<a href="match-centre.html">All team selections <i class="ti ti-arrow-right"></i></a></div>';
  }

  /* ---------------- UPCOMING FIXTURES (tabbed sidebar) ---------------- */
  if ($('upTabs')) {
    var g = D.upcoming.groups;
    $('upTabs').innerHTML = g.map(function (x, i) {
      return '<button class="hub-tab up-tab' + (i === 0 ? ' on' : '') + '" data-up="' + i + '">' + esc(x.key) + '</button>';
    }).join('');
    $('upPanes').innerHTML = g.map(function (x, i) {
      return '<div class="hub-pane up-pane' + (i === 0 ? ' on' : '') + '" data-up="' + i + '">' +
        x.rows.map(function (r) {
          return '<div class="hub-row"><div class="dt"><b>' + esc(r.d) + '</b><span>' + esc(r.day) + '</span></div>' +
            '<div class="inf"><b>' + esc(r.match) + '</b><span>' + esc(r.meta) + '</span></div>' +
            '<div class="rt">' + esc(r.time) + '</div></div>';
        }).join('') + '</div>';
    }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.up-tab'), function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-up');
        Array.prototype.forEach.call(document.querySelectorAll('.up-tab'), function (x) { x.classList.toggle('on', x === b); });
        Array.prototype.forEach.call(document.querySelectorAll('.up-pane'), function (p) {
          p.classList.toggle('on', p.getAttribute('data-up') === k); });
      });
    });
  }

  /* ---------------- SPOTLIGHT ---------------- */
  if ($('spotlight')) {
    var S = D.spotlight;
    var pct = Math.round(100 * S.progress.done / S.progress.total);
    $('spotlight').innerHTML =
      '<div class="cap"><span>Player Spotlight</span></div><div class="bd">' +
        '<div class="who"><span class="av">' + init(S.name) + '</span>' +
          '<span><b>' + esc(S.name) + '</b><span>' + esc(S.team) + '</span></span></div>' +
        '<span class="badge badge-accent" style="margin-bottom:12px;display:inline-flex">' + esc(S.badge) + '</span>' +
        '<div class="st">' + S.stats.map(function (x) {
          return '<div><b>' + esc(x.v) + '</b><span>' + esc(x.lbl) + '</span></div>';
        }).join('') + '</div>' +
        '<div class="pg"><span>Season progress</span><span>' + esc(S.progress.label) + '</span></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<a class="btn btn-navy" style="width:100%;justify-content:center;margin-top:14px" href="match-centre.html">View Match Centre</a>' +
      '</div>';
  }

  /* ---------------- NOTICES ---------------- */
  if ($('notices')) {
    $('notices').innerHTML = D.notices.map(function (n) {
      return '<div class="nrow"><i class="ti ' + n.icon + '"></i><span>' + esc(n.txt) + '</span></div>';
    }).join('');
  }

  /* ---------------- PARTNER CARDS ---------------- */
  if ($('partnerCards')) {
    $('partnerCards').innerHTML = D.partnerCards.map(function (p) {
      return '<div class="pc ' + p.theme + '"><div class="tier">' + esc(p.tier) + '</div>' +
        '<h3>' + esc(p.name) + '</h3><p>' + esc(p.blurb) + '</p>' +
        (p.url ? '<a class="b" href="' + p.url + '" target="_blank" rel="noopener"><i class="ti ti-external-link"></i> ' + esc(p.cta) + '</a>'
               : '<a class="b" href="sponsors.html">' + esc(p.cta) + '</a>') + '</div>';
    }).join('');
  }

  /* ---------------- MOBILE BOTTOM BAR ---------------- */
  if ($('botBar')) {
    var nav = [
      { i: 'ti-home', l: 'Home', h: 'index.html', on: true },
      { i: 'ti-calendar', l: 'Fixtures', h: 'match-centre.html' },
      { i: 'ti-list-numbers', l: 'Ladder', h: 'match-centre.html' },
      { i: 'ti-users', l: 'Teams', h: 'seniors.html' },
      { i: 'ti-news', l: 'News', h: 'news.html' }
    ];
    $('botBar').className = 'botbar';
    $('botBar').innerHTML = '<div class="r">' + nav.map(function (n) {
      return '<a class="' + (n.on ? 'on' : '') + '" href="' + n.h + '"><i class="ti ' + n.i + '"></i>' + n.l + '</a>';
    }).join('') + '</div>';
  }
})();
