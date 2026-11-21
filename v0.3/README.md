# LUNARA GLOBAL v0.3

Separate release folder for the v0.3 preview. It does not overwrite the repository root (v0.1) or `v0.2`.

## Included
- Responsive Month / Week / Day calendar views.
- Eight interface languages: English, Vietnamese, Spanish, French, German, Japanese, Korean and Chinese.
- Twelve selectable country holiday starter lists.
- Local time-zone display using the device/browser time zone.
- Event categories and daily / weekly / monthly / yearly repeat rules.
- Local browser storage and JSON export of events.
- Optional in-app/browser notification reminders while the page is open.
- Dark / light theme.
- Service worker cache for basic offline reopening after the first successful visit.
- Web app manifest for installable-ready behavior.

## Important limitations
- Holiday lists are a small fixed-date starter collection, not a complete official holiday feed. Variable-date, regional and lunar holidays are not covered.
- The country selector changes the holiday list; it does not change the device time zone.
- Events remain on this browser/device. Cloud sync is not included.
- Reminders require the app/page to be open; GitHub Pages cannot guarantee background notifications when the browser is closed or suspended.
- Offline support starts only after the site has been opened online once and the service worker has installed.
- No accounts or personal-data collection are required.
