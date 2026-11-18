# Prelaunch campaign setup

The owner created the D1 database, its initial migration is applied, and the Worker is deployed. The owner confirmed the deployed aggregate report loads; the live signup flow and subscriber-read denial remain to be verified. GitHub Pages will publish https://86400studio.github.io/aalishaan-studio/prelaunch/ and the report entry at prelaunch/report/. The report shows public aggregate counts; it exposes no subscriber list or CSV.

## Owner setup

1. In a VS Code terminal, run `npx wrangler login` and complete Cloudflare sign-in in your browser. Run the following commands from the campaign-worker directory. Never share tokens or store credentials in this repository.
2. The owner-created D1 database ID is already in wrangler.toml. Run `npx wrangler d1 migrations apply aalishaan-prelaunch --remote` to create its tables. Use a separate database for disposable testing.
3. Deploy with `npx wrangler deploy`. Put the Worker HTTPS origin, without a trailing slash, in prelaunch/config.js as API_ORIGIN. PUBLIC_ORIGIN must be the exact Pages origin.
4. LANDING_BASE_URL in prelaunch/config.js is the sole campaign-link base. Run `node scripts/generate-campaign-links.cjs` from the repository root after changing it. Commit the regenerated CSV. Change the Worker PUBLIC_ORIGIN separately when the domain changes.
5. Test submissions and the aggregate report with disposable data in a separate test database. Check that anonymous requests cannot retrieve names, emails or subscriber CSV. Do not put subscriber exports in this repository. The unconfigured page reports failure instead of faking success.

The owner can view subscriber records by signing in to the Cloudflare dashboard, opening Storage & databases > D1 SQL Database > aalishaan-prelaunch and choosing Explore Data or Console. Subscriber names, emails and answers are not exposed by the public report. Protect access to the Cloudflare account.

## Measurement and attribution

Each document load creates a fresh UUID. Retries for that load reuse it; the database primary key makes them idempotent. A signup is attributed to the visit linked to the first successfully stored signup for the trimmed lower-case email; later submissions do not change the name, answer or attribution. Stored answers are the literal selected text, or empty for no answer. A valid known artwork ID is attributed to that artwork; reel and image are separate formats and other/missing formats are other tagged views. Missing/unknown IDs are in the shared-bio/direct/unattributed row. Attribution tags are limited to simple tokens. Bio/direct traffic cannot be tied to a specific post. Counts include only successful event writes; ad blockers and network failures may cause undercounting. Staff should use the report URL without opening the landing page; the separate report route records no visit. Public POSTs are unauthenticated and can be spammed; arrange Cloudflare rate limiting and monitoring before promotion. Signup rate is distinct first signups divided by recorded page views. The stated-interest percentage uses answered questions only.

Catalogue data was extracted locally from `production-manifest` in the supplied storyboard, retaining string IDs, titles, slugs, rooms, sheet rows and archive asset paths. The embedded workbook and the discovered local workbook are byte-identical (SHA-256 `b2145288562da4bc9d6dcd7c9b89e85b89eb6c8af3384e18f46c53e8e034e875`), so there are no newer local workbook differences to reconcile. The 22 slugs and titles should be checked against the existing catalogue when regenerating.
