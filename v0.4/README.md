# LUNARA GLOBAL v0.4 — Hybrid Country Experience

A separate preview build. The v0.1 root, v0.2 folder and v0.3 public preview are not modified.

## New in v0.4
- Country is suggested automatically from the browser locale, with a time-zone fallback.
- Users can change the country manually at any time.
- Country-specific visual palettes, cultural symbols and hero artwork.
- Hybrid visual direction: futuristic gradients, orbital elements and local cultural motifs.
- Country-specific starter holiday labels for 12 countries.
- Preserves Month / Week / Day calendar, event categories, repeat rules, local event storage, JSON export, theme toggle and optional reminders while the app is open.
- Separate local-storage keys and service-worker cache for v0.4.

## Countries included
Vietnam, United States, United Kingdom, Japan, France, Germany, South Korea, China, Australia, Canada, India and Brazil.

## Important limitations
- Automatic country detection uses browser locale and a time-zone fallback. It does not use GPS and may need manual correction.
- Country holiday lists are a small fixed-date starter set, not an official complete holiday feed. Variable-date, regional and lunar holidays are not covered.
- Changing country changes the visual theme and starter holiday list; it does not change the device time zone.
- Events are stored on this browser/device. Cloud sync is not included.
- Reminders require the app/page to remain open; background delivery is not guaranteed.
- The cultural artwork in this preview uses built-in symbols and CSS-generated visuals; it does not download country photographs.
- No account or sign-in is required.

## Publish
Upload the contents of this folder into `v0.4/` in the `main` branch. The preview URL will be:
`https://lastsignalstudio.github.io/lunara/v0.4/`
