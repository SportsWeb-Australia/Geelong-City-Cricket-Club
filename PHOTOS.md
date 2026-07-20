# Adding photos

Every photo is **optional**. With none supplied the site looks exactly as it
does now (navy gradients + crest). Add a file and that slot upgrades
automatically — no markup changes, no rebuild required.

## How to add one

1. Drop the file into **`assets/img/`**
2. Open **`assets/gc-data.js`** and put the filename in the matching slot
3. Refresh. That's it.

```js
photos: {
  hero:      "team-photo.jpg",   // ← was ""
  about:     "clubrooms.jpg",
  seniors:   "",
  juniors:   "",
  blast:     "",
  committee: "",
  contact:   ""
}
```

## Slots and sizes

| Slot | Where it shows | Recommended size | Notes |
|---|---|---|---|
| `hero` | Behind the homepage hero | **1800×1000** min, landscape | The big one. Team photo works best. |
| `about` | Panel beside the About copy | 1200×800 | Club-rooms or ground. |
| `seniors` | Senior Cricket page banner + page head | 1600×700 | |
| `juniors` | Junior Cricket page banner + page head | 1600×700 | |
| `blast` | Cricket Blast page banner | 1600×700 | |
| `committee` | Committee page banner + page head | 1600×700 | |
| `contact` | Contact page head | 1600×700 | Ground / entrance. |

**News covers** — add `img:"filename.jpg"` to any item in the `news` array.
Recommended 800×450. Without it you get the crest on navy, which looks fine.

**Sponsor logos** — add `logo:"qa-electrical.png"` to any sponsor in the
`sponsors` array. **Transparent PNG**, roughly 400×160, logo trimmed to its
own edges. Without it the sponsor's name shows as text.

**Headshots** — add `photo:"scott.jpg"` to any entry in `contacts`.
Square, 400×400, face centred. Without it you get a navy circle with initials.

## What's handled for you

- **Legibility.** Every photo sits under a navy scrim, plus an extra bottom
  fade on the hero so the glass score cards always land on darkness. Club
  photos are usually bright, busy and shot in full sun — which is exactly where
  white text normally disappears. That's already solved.
- **Focal point.** Backgrounds are anchored around 28–32% from the top, so faces
  in a team photo sit in frame rather than being cropped off.
- **Graceful fallback.** An empty slot hides that element entirely rather than
  leaving a gap.

## Try it now

A labelled sample is included so you can see the treatment working:

```js
hero: "hero-sample.jpg"
```

Then delete `assets/img/hero-sample.jpg` before going live — the label across
the top is deliberate so it can't ship by accident.

## Before you export

- **JPEG** for photos, **PNG** for logos with transparency
- Keep hero images **under ~400 KB** (they load first — quality 80–85 is plenty)
- Landscape everywhere except headshots
- Get permission for photos of juniors, in line with the club's child-safety
  commitments
