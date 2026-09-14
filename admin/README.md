# Admin A1 development reference

Open [Studio Admin](index.html). A1 follows [AF1](../docs/ADMIN-FINAL-FEATURES.md), the canonical 26 capabilities and 23 V1 acceptance stories. [The E1 handoff](../docs/DEVELOPMENT-HANDOFF.md) records the whole-site review and remaining inputs. [W1](wireframe/index.html) remains a visual reference with inactive operational controls.

## Review the connected journey

1. Start on Today and open Meera's AS-1001 order. Verify sample payment, reserve materials, record printing/framing, inspect and pack.
2. Book the sample pickup, record physical handover and delivery. Check separate payment, item, parcel, refund and settlement states and four customer milestones.
3. Use All orders filters, global search and original-record links. Reload to check persistence. Try Owner, Operations and Support role previews.
4. Open Review journeys for US01-US23. Each confirmed reset restores fictional records, making exceptions repeatable.
5. Open Settings > Readiness for all 26 capabilities. Tools keeps Accounting, CRM and Customer Support planned after V1.

## Boundaries

Use fictional details only. A1 supplies local state, validation, confirmations, sample documents and history. Browser role checks and sample login are design demonstrations, not authentication. Provider outcomes are chosen simulations; no payment, shipment or message is sent. Private files are represented by metadata. Hosted Admin screens are publicly viewable on GitHub Pages.

A1 uses its own browser-storage key. Reset demo restores only that sample workspace. Public bag/wishlist/order-preview controls are separate. Admin does not change catalogue sources or publish public pages. Browser storage is not durable shared business storage or a security boundary.

## Sources and checks

| File | Responsibility |
|---|---|
| catalogue.js | Initial 22-artwork catalogue with paise prices aligned to public inputs |
| state.js | Synthetic data, transitions, guards and persistence |
| app.js | Navigation, screen/dialog helpers and interaction handling |
| orders.js | Orders, production, shipping, payment and remedies |
| records.js | Customers, cases, privacy and reports |
| products.js | Catalogue, materials and imports |
| settings.js | Access, connections, rules, audit, recovery and review journeys |
| admin.css | Responsive layout and components |
| wireframe/scope.js | AF1 feature/story references shared with W1 |

Run `npm run check:admin`, `npm run review:admin` and `npm run check:handoff`. Local reports are in preview/admin-a1. [A1 alignment](../docs/ADMIN-PROTOTYPE-A1.md) maps feature coverage. Real permissions, shared records, provider verification, protected files, approved rules and measured recovery remain implementation work. Passing prototype checks does not mark A1 signed off.
