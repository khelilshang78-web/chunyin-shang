---
name: "ChunYin Shang"
description: "A monochrome editorial portfolio grounded in personal inquiry, authentic photography, and long-form writing."
colors:
  paper: "#fafafa"
  ink: "#0a0a0a"
  muted: "#555555"
  line: "#e5e5e5"
  soft: "#f2f2f2"
typography:
  family: "Times New Roman, Times, serif"
  body: "17px / 1.6; 16px on mobile"
  longform: "1.13rem / 1.78; 70ch maximum"
  label: "0.72rem / 600 / uppercase / 0.11em tracking"
rounded:
  default: "0"
  archive-arrow: "50%"
spacing:
  page-gutter: "40px"
  mobile-gutter: "20px"
  mobile-breakpoint: "760px"
---

# Design System: ChunYin Shang

## Direction

A restrained, print-like editorial site: regular-weight serif headlines, generous white space, thin rules, square corners, and authentic documentary photography. Keep every route in the same visual language. Use hierarchy, spacing, and ruled lists rather than cards, shadows, gradients, decorative color, or extra typefaces.

## Palette and typography

- **Paper `#fafafa`**: page background, header, and text on black.
- **Ink `#0a0a0a`**: primary text, major rules, focus, progress, primary action, contact, and footer.
- **Muted `#555555`**: introductions, metadata, captions, and secondary copy.
- **Line `#e5e5e5`**: secondary dividers and control borders.
- **Soft `#f2f2f2`**: Current Work background, image loading surface, and pagination hover.

Use **Times New Roman**, with Times and generic serif fallbacks, for all headings, body copy, navigation, controls, labels, and captions. Headings use weight 400, tight tracking, and responsive clamps. Labels are small, semibold, uppercase, and letter-spaced. Italic is limited to deliberate emphasis, such as the homepage question and archive-title hover.

Default geometry is square with one-pixel rules. The circular 44 px archive arrow is the exception. Global keyboard focus is a 2 px ink outline with a 4 px offset; preserve visible focus and minimum 44 px interactive targets.

## Shared chrome

The homepage has its own static, rule-bound header. Profile, Writing, and Essay use the shared sticky header. Both use a compact wordmark and Profile, Writing, and Contact links; shared active links receive a simple underline. Inner-page footers and the homepage contact band are black with paper-colored text, a compact location line, and an email link.

## Homepage

Preserve this sequence:

1. **Question and introduction** — “How do institutions shape everyday life?” with an italic emphasis, concise introduction, and profile/writing actions.
2. **Panoramic MUN photograph** — a wide `2.15 / 1` crop with a factual two-part caption headed **“YMUN · May 2025.”**
3. **Current Work** — a soft-grey section led by **Research 01 · Working paper**, followed by two smaller ruled entries for reading/writing and student leadership. The featured research is visually primary, not equal in weight to the supporting entries.
4. **Experience** — two authentic images in an asymmetric grid: a large `3 / 2` presentation image and a narrower, offset `4 / 5` panel-discussion image, each captioned, followed by a Profile activities link.
5. **Selected writing** — full-width ruled essay rows with **“Read · Essay”** and year metadata, title, excerpt, and arrow; link to the complete archive.
6. **Contact** — a compact black band with location and email.

Feature Research 01 in a two-column, ink-ruled record: index, title, summary, and **View research record** link on the left; **Research question**, **Methods**, and **Status** (`Independent research · 2026`) on the right. The link targets `/profile#research`. Keep opening copy and captions constrained to readable measures while allowing the photograph and major section headings to carry the editorial scale.

## Profile

Use **one editorial column**, not sticky side rails:

- A compact identity header pairs a 180 px `4 / 5` portrait with name, preferred name, and location.
- A horizontal section index sits between identity and content. Its buttons smooth-scroll to Direction, Research, Learning, Leadership, Activities, Education, and Capabilities without rewriting the URL.
- Navigation is hash-aware across routes: `/profile#research` and `/profile#activities` scroll directly to their section starts; route changes without a matching hash reset to the top. Preserve section scroll margins and global scroll padding so targets clear the sticky header.
- The main record is centered at a maximum width of 1180 px. Use large section statements, readable introductions, ruled lists, timelines, and research details rather than cards.
- Keep the two research-area content types distinct: **Research 01 · Read the record** for the working paper and **Documentary 01 · Watch & listen** for the documentary. Both retain title, source metadata, summary, research question, current stage, and methods/themes tags; do not relabel the documentary as Research 01.
- Leadership includes a two-image public-speaking gallery. **Beyond the classroom** uses exactly six captioned photographs in an asymmetric 12-column mosaic, mixing wide and portrait crops. Each figure includes a concise title, precise factual category, and description.

## Writing archive and long-form reading

### Archive

Use a two-column hero above a transparent, rule-led tool area. Search matches title, subtitle, excerpt, category, and tags; theme and year filters combine with the query. Show a live result count and a resettable empty state. Essay rows remain linear, with year/reading time, title, category, subtitle, excerpt, tags, and a circular arrow link—never a card grid.

### Essay

- A fixed 3 px ink bar tracks reading progress.
- The header contains an archive back link, large title, subtitle, byline metadata, and tags.
- Desktop reading uses a narrow margin note beside a **70ch** article column; the margin note may link to the original Chinese publication when supplied.
- Body copy is `1.13rem / 1.78`; sections have clear spacing, and quotes use a simple ink left rule with a citation.
- Newer/older essay pagination splits into two columns on desktop. At the oldest essay, the next link returns to the archive. Unknown slugs show a simple not-found state with an archive link.

## Photography and content integrity

Use only authentic, supplied photographs in their **natural color**, with responsive `object-fit: cover` crops and accurate alt text. Captions provide context without overpowering the image. Do not add color overlays, stylized filters, decorative frames, or shadow treatments.

**Never substitute stock, AI-generated, or placeholder photographs. Never invent facts, events, dates, awards, publications, outcomes, testimonials, or other evidence.** Keep captions and metadata factual; do not infer specifics from appearance alone. Preserve these exact event facts on their corresponding images: **“YMUN · May 2025”** for committee negotiation, **“Global Youth Shanghai Diplomats Summit · SISU”** for the committee speech, **“HSYLC · Summer program”** for the Harvard Summit for Young Leaders in China, and **“Football · Top 8 in Fuyang, Hangzhou”** for the team photograph. Lazy-load below-the-fold documentary images and retain explicit dimensions where provided.

## Responsive behavior

The principal mobile breakpoint is **760 px**, with a 320 px minimum canvas and 20 px gutters. Verify at 375 px.

- Homepage introduction, section headings, featured research record, supporting work entries, experience grid, essay rows, contact, and footer stack. Metadata moves above essay titles.
- The MUN image becomes full bleed and changes to a `4 / 3` crop; its caption retains 20 px side padding. The secondary experience image becomes a 78%-width, right-aligned portrait.
- Shared navigation hides the secondary wordmark and Contact; keep navigation compact and usable. The homepage retains its own compact navigation.
- Profile identity shrinks to a 104 px portrait. The horizontal section index becomes a single-row, horizontally scrollable strip. Multi-column records, speaking gallery, capability list, and six-photo mosaic stack; mosaic images use simpler landscape or portrait ratios with 40 px separation.
- Archive filters stack. Essay metadata becomes inline above the title. Article margin note and body stack, and pagination becomes one column.
- Wrap or stack controls and ensure long titles and email addresses do not create horizontal page scrolling.

## Motion and reduced motion

Motion is restrained. Only the homepage MUN photograph uses the `image-unmask` entrance: an 800 ms reveal from a 16% bottom clip and 3 px blur to the fully visible, sharp image, using `cubic-bezier(0.16, 1, 0.3, 1)`. Link hover uses small opacity or arrow shifts; do not add parallax, card lifts, or broad scroll animation.

Run the image reveal only under `prefers-reduced-motion: no-preference`. Under `prefers-reduced-motion: reduce`, disable CSS smooth scrolling and reduce animation and transition durations to `0.01ms`, leaving content immediately visible and usable.
