# Plan: Rebrand to Chris Vitorino Enfermeira Esteta

Transform the existing massotherapy website into a professional nursing aesthetic site for Chris Vitorino, incorporating the new color palette (green, beige, gold), updating all copy, and replacing images/logo.

## User Review Required

> [!IMPORTANT]
> - The new color palette uses a sophisticated dark green (`oklch(0.35 0.08 160)`) as the primary brand color, paired with gold and beige accents.
> - The copy has been adapted from the provided service descriptions to maintain the professional yet welcoming tone requested.
> - Testimonials have been updated to reflect the new aesthetic and nursing context.

## Technical Details

### Styling & Theming
- Update `src/styles.css` variables:
  - `--primary`: Dark green (`oklch(0.35 0.08 160)`)
  - `--background`: Warm beige (`oklch(0.98 0.01 80)`)
  - Keep `--gold` accents but refine gradients to blend with green.
  - Update `bg-brand-band` and `gold-frame` utilities to use the new green/gold combination.

### Assets & Content
- Replace logo and portrait assets with the new Chris Vitorino images.
- Update `src/lib/site-content.ts`:
  - `WHATSAPP_URL`: Update with the new phone number (+55 27 98104-6436).
  - `services`: Replace massotherapy list with the new 6 clinical services (Tricologia, Estética Avançada, etc.).
  - `benefits`, `howItWorks`, `testimonials`, `faqs`: Rewrite for an aesthetic nursing clinic.
- Update `src/routes/index.tsx`:
  - Update SEO metadata (title, description, JSON-LD).
  - Adjust section titles and components to reflect "Enfermeira Esteta".
  - Update hero section to feature the new profession.
  - Update the "About" section with the new bio information.

### Favicon Update
- Generate a new favicon from the Chris Vitorino logo mark.
- Update `src/routes/__root.tsx` to point to the new favicon.
- Remove old `public/favicon.ico`.
