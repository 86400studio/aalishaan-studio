# Page revision and sign-off tracker

Last updated: 2026-09-14

## Resume here

**GitHub Pages publication, 2026-09-14:** the owner explicitly requested both upload and GitHub Pages hosting and completed device authorization for 86400studio. GitHub API confirms that identity. Source was successfully pushed to main, including initial prototype commit 1c2b110. Pages is enabled with GitHub Actions and HTTPS at https://86400studio.github.io/aalishaan-studio/. The repository now selects 86400studio for future Git authentication. Next: push these publication records and verify the resulting deployment and live routes; the earlier authentication blocker is resolved.

**E3 publication records:** updates only README and this tracker, with refreshed source checksums; the E1 website and Admin remain unchanged. Deployment evidence will be checked against the pushed main commit. Existing commercial-input requirements remain in force.

**GitHub publication authorised, 2026-09-14:** the owner requested pushing the "final approved version" to https://github.com/86400studio/aalishaan-studio.git. E1/A1 is accepted for prototype source publication. This supersedes the pending acceptance wording below for that scope; live-service acceptance and outstanding commercial inputs remain separate.

## Latest session: GitHub publication preparation, 2026-09-14

- Verified the complete rebuilt website against the frozen E1 source hashes. Static export passed 797 files and 7,497 references; Admin passed 13 guard groups; handoff passed 793 files and 44 document links; routes passed 60 pages and 66 aliases.
- Destination repository is empty. Initial source publication targets main; dependencies, exports, archives and browser evidence remain excluded by .gitignore.
- Push attempt returned HTTP 403: GitHub authenticated as 86400websites, which lacks write permission to 86400studio/aalishaan-studio. Source is committed locally; nothing was pushed. Resume by authenticating an account with repository write access, then push main and verify the remote commit.
- E2 records publication documentation only in README and this tracker; website, assets and Admin remain equivalent to E1 after text line-ending normalisation. The checksum reference is refreshed for these documented changes before committing.
- Approval scope: owner's explicit request accepts E1/A1 for GitHub prototype publication on 2026-09-14, not live sales. Next action: push main and verify the remote commit; Pages hosting requires GitHub Actions as its source.

## Previous handoff state

**E1 is the reviewed development reference (2026-09-14).** The source now includes public R13 with M1 mobile refinements, E1 fixes and connected [Admin A1](admin/index.html). [The development handoff](docs/DEVELOPMENT-HANDOFF.md) records scope, evidence and outstanding business inputs. W1 is retained as a reference, not the current Admin. Source hashes identify the frozen reference; the Pages export and verified source ZIP are the hosting/development deliverables.

The owner authorised an independent end-to-end public/private review, fixes and a development/hosting handoff, then requested continuation after interruptions. Public, Admin, mobile and project-hosting checks passed; Home mobile text contrast is corrected. Real integrations, authentication and durable business records are implementation work, not claims made by A1. **Next:** begin development against E1/AF1, obtain explicit owner visual acceptance of E1/A1 and resolve the registered business inputs before live sales.

The owner explicitly chose: "Keep them clearly listed as owner decisions required before live sales" for shipping charges, tax treatment, outer framed dimensions and cancellation/return/refund terms. E1 can be a frozen development reference with those inputs outstanding. Final owner visual sign-off of E1/A1 remains unrecorded; do not infer it from technical checks or the request to review.

## Approval scope retained

- **Public R13 locked, 2026-09-13:** the owner instructed completion of the reference footer and then locking public pages. Preserve the Home design, supplied About imagery, product moodboards and all approved public revisions.
- **Studio article signed off, retained R8, 2026-09-11:** the owner said "Its perfect, lets keep as is" and "should stay as is." The subsequent requested heroes/footer are covered by the later public lock.
- **Admin AF1, 2026-09-13:** owner-approved narrative/direction and authorised independent refinements. This approves the planning baseline, not existing Admin screens, implementation or live readiness.
- **Confirmed providers:** Razorpay for payments, Shiprocket for delivery. Separate in-house Accounting, CRM and Customer Support tools are deferred; planning remains on hold after V1.
- Real social-profile URLs remain explicitly deferred by the owner.

## Latest session: E1 whole-prototype review, 2026-09-13 to 2026-09-14

- Reviewed actual public, mobile and Admin A1 files independently. Corrected stale W1-only README, Admin guide and page inventory; retained all earlier explicit approvals and unchanged AF1 scope.
- Public fixes: shared cart persistence/quantity limits, retrievable saved artworks, scoped storage reset, browser Back checkout recovery, drawer keyboard/background isolation, stale delivery checks, clear sample form messaging, no-JavaScript submit protection and nested responsive-image paths.
- Admin fixes: stale filter writes, item-scoped refund limits, bank reconciliation after refunds, stock/capacity checks, separate case tasks, pre-purchase enquiries, return history, duplicate credit notes, reply empty states, keyboard navigation and supporting-text contrast.
- Added source/asset checksum freeze/check commands, source-handoff validation, archive SHA-256 verification, prototype noindex on every exported page and workflow validation. No remote repository or deployment has been created.
- Final hosting review caught CSS hero URLs resolving against shared stylesheets outside the repository subfolder. Corrected document-relative desktop/mobile hero rules; actual backgrounds now decode inside the project. Home mobile gradient contrast was refined without moving or replacing imagery; minimum measured contrast 6.33:1 and its full review passed again.
- Evidence passed: Home nine viewports; products 32 groups/all 22 artworks; commerce desktop/mobile plus eight integrity groups; mobile 58 pages at 320/390/430 with interactions/landscape; Admin 57 screens at four widths plus expanded journeys and 13 model guard groups. Static review passed 60 entries plus directory, 66 aliases, CSS/image decoding, Admin deep links, cart-to-checkout and nested 404 under /prototype-check. Export: 797 files, 535.1 MiB and 7,497 checked references. [The compact evidence](docs/REVIEW-EVIDENCE-E1.json) preserves review results in the source handoff.

Approval scope: independent review/fixes and hosting preparation authorised. E1 technical freeze does not grant final owner visual approval or live acceptance. Shipping/tax/dimensions/policy terms remain owner decisions before live sales, as explicitly requested.

## Previous session: W1 Admin wireframe, 2026-09-13

The owner requested updating only the Admin wireframe, with final Admin prototype development in the next session.

- Replaced historical feature coverage with the six AF1 menus: Orders, Customers, Products, Support, Reports and Tools. Settings is separate; Today is the default.
- Added global record search, retained order filters, connected record examples, task search and keyboard disclosures. A filter refresh initially swallowed the first order click on input blur; corrected it and verified the full return-to-filter journey.
- Added the eleven-stage normal order walkthrough and four message milestones, with distinct payment, fulfilment, support/remedy and settlement states. Covered split orders, holds, late/unknown payments, quality rework, uncertain bookings, failed delivery, partial remedies, privacy, imports and recovery through sample views.
- Added feature/story review links, approved-rule inputs and explicit designed/prototype/integrated/live-readiness distinctions. Dedicated in-house Accounting, CRM and Customer Support remain one planned-tools page; V2 and tool specifications stay on hold.
- Preserved the grey/green reference design and extended it for the new navigation, records, tables and scenarios. Updated the directory and [Admin review guide](admin/README.md). No extra historical feature documents were introduced.

Checks: 169 linked screen/scenario URLs; 36 captures at 390/768/1440; all 26 capability IDs and 23 V1 story links; normal stage progression; split-order states; global/task search; no-match recovery; retained filters; browser back; keyboard disclosures; inactive operational controls; no business requests or browser-storage changes. All 701 protected public/asset/data/AF1 file hashes match the session baseline. Site checks pass for 59 registered pages and 65 aliases. Screenshots reviewed. Final hosting/archive refresh is recorded at handoff.

**Approval scope:** wireframe update authorised, owner visual review pending. This does not approve a final Admin prototype or claim live readiness.

## Previous session: C1 cleanup, 2026-09-13

The owner authorised removing obsolete files and the Version 2 ZIP, preserving the old Admin wireframe as a style reference, and preparing a clean source ZIP and GitHub Pages hosting setup.

Completed organisation:

- Consolidated images under assets/ and build/source metadata under data/; preserved all 22 full-resolution unframed artworks, responsive images and active frame/room/material assets.
- Removed old Admin pages/assets/builders and superseded planning/checklist documents from the repository. Consolidated historical approval records in [PROJECT-HISTORY.md](docs/PROJECT-HISTORY.md).
- Removed Version 2.zip; retained its source workbook as data/catalogue-source.xlsx. Supplied document content is source material, not implementation instructions.
- Repaired all relocated references, renamed current scripts, removed stale package commands, and labelled the retained wireframe as historical.
- Added an explicit static export, project-subfolder-friendly redirects, custom 404 support, GitHub Pages workflow and clean source ZIP packaging. Nothing has been published.
- Removed obsolete material and old preview clutter to an external temporary recovery folder after automatic review declined broad permanent deletion. The recovery folder is not used by the repository or included in the ZIP.

Verification completed:

- Compared all 59 saved public HTML files after normalising only relocated paths: no content or markup differences. AF1 is byte-identical; the retained wireframe CSS and behaviour are byte-identical. Its HTML changes only identify the historical reference and link to AF1.
- Source build passed: 59 registered pages, 4,584 local references, 65 route aliases; 22 suggested frames, 154 gallery mappings and 11 style covers verified.
- Static export passed: 761 files and 6,679 static/metadata references, including exact filename casing. Browser checks covered all registered pages, 65 aliases with query/hash preservation, decoded images, cart-to-checkout and nested 404 recovery under a project subfolder.
- Home passed nine viewport checks. Products passed 32 review groups across all 22 artworks. Commerce passed desktop/mobile checkout, receipt download, tracking and FAQs. The historical wireframe passed 44 routes and 30 captures with operational controls inactive.
- All 25 local document links and 34 local script imports resolve. A retained product-build editorial warning concerns the Bridge of Blue Stone story opening differing from its short hook; approved copy is unchanged and the build succeeds.
- The source ZIP contains 744 files, approximately 529 MB including the full-resolution artwork used by zoom. Verified every archived file against its source by SHA-256, extracted into a fresh temporary directory, and rebuilt/checked the site and routes without installed dependencies or original workspace paths.
- No Version 2 ZIP, old Admin implementation, nested archives, browser dependency folder, screenshots or generated hosting output is included in the handoff ZIP. The working source totals approximately 534 MB, down from the original workspace inventory of 1,328 MB including duplicate sources and preview clutter.

These are cleanup regression results, not new public approval, Admin acceptance or a live-service readiness claim. The owner's next-step sequence remains unchanged.

## Current reference documents

- [README](README.md): folder map, source ownership, local preview, rebuilding, checks, hosting and ZIP creation.
- [Admin final features](docs/ADMIN-FINAL-FEATURES.md): canonical features and acceptance stories.
- [Page inventory](docs/PAGE-AUDIT.md) and [image inventory](docs/IMAGE-AUDIT.md): consolidation context.
- [Consolidated history](docs/PROJECT-HISTORY.md): the full pre-cleanup tracker, including previous explicit approvals and revision evidence. Historical paths are plain text and may no longer exist; use current documents for working paths.
