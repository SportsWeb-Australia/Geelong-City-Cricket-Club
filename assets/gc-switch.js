/* ============================================================================
   GEELONG CITY CC — accent switcher            (assets/gc-switch.js)
   ----------------------------------------------------------------------------
   REVIEW ONLY. Lets you flip between the three accent options while looking at
   the live site, and remembers the choice as you click between pages.

   TO GO LIVE: delete this file, remove its <script> tag from the 14 pages, and
   hard-code the chosen class on <body> — e.g. <body class="accent-teal" ...>
   ========================================================================== */
(function () {
  var OPTS = [
    { key: 'accent-teal',  name: 'Shark Teal',  sw: '#0d8fa0' },
    { key: 'accent-steel', name: 'Steel',       sw: '#7f95ad' },
    { key: 'accent-gold',  name: 'Gold',        sw: '#c9a227' }
  ];
  var KEY = 'gcAccent';
  var saved;
  try { saved = window.localStorage.getItem(KEY); } catch (e) { saved = null; }
  var current = saved || 'accent-teal';

  function apply(k) {
    OPTS.forEach(function (o) { document.body.classList.remove(o.key); });
    document.body.classList.add(k);
    current = k;
    try { window.localStorage.setItem(KEY, k); } catch (e) {}
    Array.prototype.forEach.call(document.querySelectorAll('#gcSwitch button'), function (b) {
      b.classList.toggle('on', b.getAttribute('data-k') === k);
    });
  }

  function build() {
    apply(current);
    var box = document.createElement('div');
    box.id = 'gcSwitch';
    box.innerHTML = '<p>Accent — pick one</p><div class="row">' +
      OPTS.map(function (o) {
        return '<button data-k="' + o.key + '"><span class="sw" style="background:' + o.sw + '"></span>' + o.name + '</button>';
      }).join('') + '</div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (b) apply(b.getAttribute('data-k'));
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
