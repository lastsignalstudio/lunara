# LUNARA GLOBAL v0.4.3
## Complete Localization & Calendar Fix

### Included
- Unified localization layer for Vietnamese, English, Chinese, Japanese, Korean, French, German, Spanish, Portuguese, Arabic, Hindi, and Indonesian.
- Locale-aware calendar date formatting is retained from the shared calendar engine.
- Translation layer re-applies after calendar redraws and view changes.
- Arabic right-to-left layout refinements.
- Country color and visual themes retained.
- Service worker cache version bumped to v043.

### Deployment
Upload the contents of this folder directly into `v0.4.3/` in the `lastsignalstudio/lunara` repository.
Keep `v0.4/` and `v0.4.2/` unchanged. This version intentionally reuses the calendar engine and stylesheet from `../v0.4/`.

### Test before public release
1. Switch through all 12 languages.
2. Test Month, Week, and Day views after each language change.
3. Open the event form and check every label and dropdown.
4. Add, delete, and reload an event to confirm local persistence.
5. Check Arabic right-to-left layout.
6. Switch country themes and dark/light mode.

Events remain stored locally on each device; this release does not add cloud synchronization.
