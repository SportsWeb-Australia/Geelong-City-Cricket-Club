# Geelong City Cricket Club — Three Website Design Directions

Three complete, mobile-friendly, **multi-page** websites for the Sharks.
Open **index.html** to review all three.

## The three directions
| | Design | Character |
|---|---|---|
| A | **Association** | Closest to the RDCA build — dark navy chrome, sticky nav with active pill, dense card grid, floating match strip. Bebas Neue + DM Sans. |
| B | **Match Day** | Photo-led hero, full-width dark scoreboard strip, grey slab panels, condensed uppercase headings. Anton + Inter. |
| C | **Heritage** | Crest-forward and classic — traditional *Facile Princeps* crest, Playfair serif, navy on warm grey. Playfair Display + Source Sans 3. |

## Ten pages each (multi-page, not one long scroll)
Home · About Us · Teams · Cricket Blast · Match Centre · Registration ·
**Communications** · News · Sponsors · Contact

## Club colours (the only three used)
- Navy `#102b5e`
- White `#ffffff`
- Grey `#dfdddd`  ← *you wrote `#dfddd` (5 chars, invalid hex); read as `#dfdddd`*

The palette has no accent colour, so links, hovers and active states use a
**lighter tint of the same navy** (`#2a4f96` / `#4a72c0`) rather than
introducing a foreign hue.

## Architecture (this is the skin model)
- `assets/gc-data.js` — **all content, one file.** Edit copy in one place; all
  three designs and all 30 pages update.
- `assets/gc-site.js` — injects nav + footer and renders every data-driven
  section (programs, match tables, comms channels, sponsors, contacts…).
- `design-*/theme.css` — **the only thing that differs between designs.**
  Same content, same markup, different look — i.e. these three *are* skins.
- `build.py` — regenerates all 30 pages from the shared page definitions.

## Real vs sample content
- **Real** (carried from geelongcitycc.com.au): club history, teams and grades,
  coordinators, contacts, all 12 sponsors, partner bodies, PlayHQ registration
  links, Woolworths Cricket Blast, sponsorship-package PDF, address, socials.
- **Sample** (clearly flagged in the UI): ladder, fixtures, results, news.
  These connect to live SportsWeb One / PlayHQ feeds with **no page changes**.

## To finish
- Swap sample ladder/fixtures/results for live feeds.
- Add real news items and sponsor logo images (names + links are already wired).
- Hook the contact form up to the club inbox.
- Add a hero team photo for Design B (currently a navy gradient stands in).
