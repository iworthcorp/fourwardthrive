# Changelog

All notable changes to this project are documented in this file.

## 2026-09-15

### Fixed
- **17:23** — Fixed package image modal (`components/LightboxGallery.tsx`) not being scrollable. Tall package graphics were clipped with no way to scroll down and view the full image or caption, because the modal had no overflow handling of its own while background scroll was disabled. The modal now scrolls internally (`overflow-y-auto`), and the close/prev/next buttons were switched to fixed positioning so they stay pinned to the viewport while the content scrolls.
