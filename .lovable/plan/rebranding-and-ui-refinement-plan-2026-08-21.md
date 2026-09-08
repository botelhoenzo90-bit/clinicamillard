# Rebranding and UI Refinement Plan

Update the site aesthetics and content to match Chris Vitorino's clinical branding, focusing on the requested color palette and specific section styling.

## User Preferences
- **Palette**: Green, beige, and gold.
- **Hero Section (Session 1)**: Remove green glow and marble background.
- **Other Sections**: Use beige, green, and gold colors; restrict marble background ONLY to the first session.
- **Services Carousel**: Update images to match specific clinical service titles (Tricologia, Estética, Regenerativa, Harmonização, PEIM, Home Care).

## Proposed Changes

### Styling Refinement (src/styles.css)
- Review and refine utility classes for backgrounds.
- Ensure `bg-marble` and `bg-marble-soft` are used appropriately according to the request.

### Data Update (src/routes/index.tsx)
- **Service Image Mapping**:
  - `tricologia`: Keep `relaxante.jpg` or look for a hair-related one if available (otherwise stick to current placeholders but try to align better). *Actually, I'll update the imports to match clinical aesthetics.*
  - `estetica-personalizada`: Use `terapeutica.jpg`.
  - `regenerativa`: Use `ventosas.jpg`.
  - `harmonizacao`: Use `pedras.jpg`.
  - `peim`: Use `miofascial.jpg`.
  - `home-care`: Use `shiatsu.jpg`.
  *Note: Since these were remixed from a massotherapy site, I will select the most clinical-looking existing assets.*

### Component Updates (src/routes/index.tsx)
- **Hero Component**:
  - Remove the `bg-marble` utility.
  - Remove the green/gold glow divs (`bg-primary/20 blur-3xl` and `bg-gold-soft/30 blur-3xl`).
  - Set background to a clean beige/solid green as requested.
- **Other Sections**:
  - Replace `bg-marble-soft` with solid beige or themed green backgrounds in `HowItWorks`, `About`, and other sections where marble was present.

### Content Correction
- Fix the WhatsApp button text in the About section (currently says "Falar com a Gabriela").

## Technical Details
- Use Tailwind utility classes for colors and backgrounds.
- Update `serviceImages` record in `src/routes/index.tsx`.
