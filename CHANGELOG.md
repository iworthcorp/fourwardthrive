# Changelog

All notable changes to this project are documented in this file.

## 2026-09-16

### Added
- **00:20** — Added the Fourward Thrive logo as the site favicon via Next.js's automatic icon convention (`app/icon.jpg`).
- **00:25** — Added the Fourward Thrive logo (`public/assets/images/fourward-thrive-logo.jpg`) to the homepage hero (`app/page.tsx`), presented as a glowing circular badge with a pulsing halo and a hover scale/tilt transition.
- **00:15** — Added a client-logo gallery to the Clients page's Business Page section, sourced from `public/assets/images/gallery/business_logo/` (`lib/businessLogos.ts`), using the shared `LightboxGallery` component with a grayscale-to-color hover reveal, 8 logos shown by default and a "See more / See less" toggle for the rest.

### Changed
- **00:25** — Reworked the homepage hero (`app/page.tsx`) to fit entirely within the viewport with no scrolling: the hero's height and the logo/halo sizing now scale with viewport height (`min()`/`vh` units) instead of fixed padding, and the headline/tagline were resized so the larger logo still fits above the fold alongside the header and footer.
- **00:20** — Swapped the order of the Business Page section's content so the logo gallery appears before the marquee of business page names, and removed the "Pages We've Branded" heading above the gallery.
- **23:51** — Restructured the "Clients" nav item to hold "Services", "Products", and "Business Page" as a dropdown of anchor links into three sections on a single `/clients` page (`app/clients/page.tsx`), instead of three separate top-level nav items and routes. Removed the now-orphaned `app/services`, `app/products`, and `app/business-page` route folders and consolidated their marquee content into the Clients page.
- **23:46** — Extended the About-style dropdown submenu pattern to the Clients nav item, and fixed a mobile-menu bug where every dropdown item shared one open/closed state — opening one item's submenu was opening every item's submenu at once. Each item now tracks its own open state (`app/_components/Header.tsx`).

### Fixed
- **00:15** — Fixed the image lightbox (`components/LightboxGallery.tsx`) rendering inside a transformed ancestor (a `data-reveal` scroll-reveal wrapper), which made that wrapper the containing block for the modal's `position: fixed` — constraining the "fullscreen" modal to the wrapper's box instead of the real viewport. This caused cropped, off-center images and made click-outside-to-close stop working outside that smaller box. The modal is now rendered through a React portal to `document.body` so it always fixes to the true viewport, fitting any image responsively without cropping.
- **00:15** — Removed the body-scroll lock that applied while the lightbox was open, so the page behind it stays scrollable instead of being frozen.

## 2026-09-15

### Fixed
- **17:23** — Fixed package image modal (`components/LightboxGallery.tsx`) not being scrollable. Tall package graphics were clipped with no way to scroll down and view the full image or caption, because the modal had no overflow handling of its own while background scroll was disabled. The modal now scrolls internally (`overflow-y-auto`), and the close/prev/next buttons were switched to fixed positioning so they stay pinned to the viewport while the content scrolls.
