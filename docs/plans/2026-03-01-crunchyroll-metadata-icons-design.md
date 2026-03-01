# Crunchyroll Metadata and Icon Refresh

## Goal

Replace any default-looking metadata and favicon treatment with app-specific branding that frames the site as an interactive cover letter and application experience for Crunchyroll Concept Labs.

## Approved Direction

- Keep the positioning as a cover letter and application experience.
- Remove personal-name phrasing from the description.
- Use product-style copy so search previews and link shares feel deliberate.
- Replace the default favicon with anime-inspired app icons that match the site's orange-on-dark visual system without copying Crunchyroll or anime IP directly.

## Implementation Notes

- Update the Next.js metadata export in `src/app/layout.tsx`.
- Add a custom SVG icon source in `src/app/icon.svg`.
- Generate raster assets from the SVG for Apple touch icons and the favicon.
- Verify no stale metadata or icon references remain.

## Privacy Hardening

- Remove discovery-oriented metadata such as keywords, Open Graph, and Twitter cards.
- Add strict `robots` and `googleBot` directives to block indexing, following, snippets, caching, and previews.
- Send an `X-Robots-Tag` header for every route through `next.config.ts`.
- Delete the unused stock SVG assets from `public/`.
