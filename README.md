# Geelong City Cricket Club — RDCA-style website

A duplicate of the RDCA / SportsWeb One build, rebuilt for Geelong City Cricket
Club in the club's own colours. **14 separate pages**, shared chrome, one content file.

Open **index.html**.

## Accent colours — pick one
The base stays navy `#102b5e` / white / grey `#dfdddd`. On top of that there are
**three accent options**, switchable while you review:

| Class | Accent | Where it comes from |
|---|---|---|
| `accent-teal` | `#0d8fa0` **Shark Teal** | Brightened from the shield's own linework — deep teal `#002030` is **41%** of the crest artwork |
| `accent-steel` | `#7f95ad` **Steel** | The shield's silver `#b0b0b0` (**13%** of the mark), lifted |
| `accent-gold` | `#c9a227` **Premiership Gold** | Classic cricket honour-board gold — not in the logo, but a club convention |

**How to choose:** open the site and use the switcher bottom-right. Your choice
follows you from page to page.

**To lock it in:** delete `assets/gc-switch.js`, remove its `<script>` tag from
the 14 pages, and hard-code the winner on `<body>` — e.g.
`<body class="accent-teal" data-page="index">`. Or set the default in `build.py`
and re-run it.

## Woolworths Cricket Blast
The official Blast logo you supplied is now used wherever the program appears:

- **Homepage** — a full-colour Blast band with the logo on a frosted-glass panel
- **Cricket Blast page** — a colourful hero with the logo, plus glass feature
  cards each edged in a different Blast splash colour
- **Juniors page** — the same Blast band as a "just starting out" prompt

Its palette is sampled from the logo itself: green `#18a848`, magenta `#d80078`,
blue `#1890c0`, orange `#f04818`, purple `#483090`, teal `#00a8a8`. These are
used **only** in Blast contexts, so the club's navy identity stays intact
everywhere else. The logo file is placed exactly as supplied — not redrawn.

## Glass (frosted) effect
`.glass` / `.glass-soft` — blurred, semi-transparent panels with a light inner
edge. Used where there's a colourful backdrop for the blur to work against:

- **Match strip** — the three score cards now float *on* the hero gradient as
  glass panels instead of sitting on flat white below it
- **Teams & Programs** — glass cards on the dark band
- **Stat blocks** — glass over their own gradient
- **Blast band and Blast page** — glass panels over the colour splashes

Never used over flat white, where it just reads as a grey box. Includes a
`@supports` fallback to a solid tint for browsers without `backdrop-filter`.

## Why it no longer looks flat
Colour was only half the problem — the other half was **rhythm**. Every band was
white cards on white/grey. `assets/gc-theme.css` adds:
- mesh gradients on the hero and page heads, with a crest watermark
- a shark-water **wave** motif taken from the shield
- a **dark section** on the homepage so the page reads light → dark → grey → light
- **dark stat blocks** with accent numerals (they were plain white cards)
- accent chips behind card icons, and an accent rule that wipes in on hover
- accent-tinted ladder highlight rows and news covers

## Club palette (base)
| | Hex | Use |
|---|---|---|
| Navy | `#102b5e` | Nav, headings, footers, buttons |
| White | `#ffffff` | Cards, surfaces |
| Grey | `#dfdddd` | Alternate bands, sample flags, highlight rows |

Supporting tints `#173a78` / `#2a4f96` / `#4a72c0` and a deep `#0a1a38` are
**tints of the same navy** — they replace the RDCA red accent so no foreign hue
is introduced.

> The grey was supplied as `#dfddd` (5 characters — not a valid hex). Read as
> **`#dfdddd`**. If it should be `#dddddd`, change `--grey` in
> `assets/gc-shared.css` — one line, applies everywhere.

## Pages
Home · About Us · Senior Cricket · Junior Cricket · Cricket Blast ·
Match Centre · Registration · News · Committee & Coaches · Sponsors ·
**Communications** · Child Safety · Documents & Policies · Contact

## Architecture (same as RDCA)
- `assets/gc-data.js` — **all content in one file** (`window.GCC`)
- `assets/gc-site.js` — injects topbar, nav, mobile menu, ticker, footer and
  renders every data-driven section
- `assets/gc-shared.css` — the RDCA design language, recoloured
- `build.py` — regenerates all 14 pages
- `assets/logos/` — the three club logos

Edit copy in `gc-data.js` and every page updates.

## Logos — fixed
The three PNGs you supplied had **no alpha channel** — transparency had been
flattened to black on export, which is why the shark appeared as a black box.
All three have been repaired:
- `sharks-shield.png` — background removed by edge flood-fill, so the genuine
  black *inside* the artwork (the shark's eye, the "Geelong City CC" banner
  text) is preserved. Anti-aliased edges feathered and un-multiplied.
- `crest-navy.png` — keyed to alpha and recoloured to club navy `#102b5e`
  (for light backgrounds).
- `crest-white.png` — keyed to alpha, pure white (for dark backgrounds).

## Real vs sample
**Real** (carried from geelongcitycc.com.au): club history and 1928 founding,
address (Richmond Crescent, Geelong VIC **3220**), senior men's and women's
program copy, junior program copy, Cricket Blast, all coordinators, all 12
sponsors, partner bodies, every PlayHQ registration link, Match Centre deep
links per grade, sponsorship-package PDF, socials, motto.

**Sample** (flagged in the UI): ladder, fixtures, results, news, ticker items.

## Photos
Every photo slot is optional and degrades gracefully — see **PHOTOS.md**.
Drop a file into `assets/img/`, name it in the `photos` block of `gc-data.js`,
refresh. Slots exist for the hero, About panel, section banners, news covers,
sponsor logos and committee headshots. A labelled sample hero is included so
you can see the treatment before the real photo arrives.

## Committee (updated)
The site reflects the change of leadership:

**Executive** — President Chris Bambury · Vice President Sam Cust ·
Secretary Hope Smith · Treasurer Jack Driver

**Cricket coordinators** — Senior Men Sam Cust · Senior Women Melissa Rolfe ·
Junior Coordinator Trevor Elliot

These are two separate lists in `gc-data.js` (`committee` and `coordinators`),
so the Committee page shows both, the About page shows the executive, and the
Registration sidebar shows only the coordinators — i.e. who to ask about
actually playing.

## To finish
1. **Photos.** The club site lazy-loads its images, so their URLs aren't exposed
   in the page source and couldn't be pulled automatically. Drop the team photo,
   action shots and sponsor logos into `assets/img/` and reference them — the
   hero and news covers currently use the crest on a navy gradient.
2. **Ladder/fixtures/results** → connect to SportsWeb One / PlayHQ feeds.
3. **Committee list** — the club page lists roles but the names sit inside
   images; ask the club for the current roster.
4. **Contact form** → point at the club inbox.
5. **Confirm Sam Cust's roles.** He is listed as both Vice President and Senior
   Men coordinator — common in community clubs, but worth confirming.
