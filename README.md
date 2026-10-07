# Backline Marketing

Responsive, static marketing website prepared for Netlify. No runtime dependencies or package installation required. Requires Node.js 22+ for the build and preview tools.

## Local preview

Run `npm run dev` and open http://127.0.0.1:4321.

## Build

Run `npm run build`. Production files are generated in `dist/`.

## Netlify

Import the GitHub repository `epdsn/backline-media-group` after the files are pushed. The included `netlify.toml` sets:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

Enable form detection in Netlify Forms and redeploy. Confirm that `project-inquiry` appears, then submit a test on the deployed site and verify receipt. Configure form notifications to the approved business inbox. Native POST submission redirects to `/thank-you.html` after acceptance. The local preview deliberately prevents sending and explains that the form is not live.

Reference: https://docs.netlify.com/manage/forms/setup/

## Content and assets

- Edit page copy and form fields in `public/index.html`.
- Edit colors, typography, and responsive layout in `public/styles.css`.
- The supplied brand board informed the services, taglines, and Yuma location.
- The current wordmark is live text; replace it with the official SVG or transparent logo when available. The supplied presentation image is not an original logo asset.
- No unconfirmed phone number, inbox, portfolio claims, testimonials, or performance figures were published.
- Google Fonts supplies DM Sans and Space Grotesk, with system font fallbacks.

## Verification

Production build passed. Reviewed desktop (1440px) and mobile (390px) layouts; mobile document width equals viewport width. Checked contact navigation and local form submission feedback. Live Netlify submission remains to be verified after deployment.
