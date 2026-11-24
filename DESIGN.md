---
name: "ChunYin Shang"
description: "A neutral monochrome artistic portfolio with dedicated academic reading spaces for research and writing."
colors:
  paper: "#f7f7f7"
  ink: "#101010"
  muted: "#5c5c5c"
  line: "#d9d9d9"
  soft: "#efefef"
  white: "#ffffff"
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

The site operates as a **gallery outside and a reading room inside**. The homepage opening, identity areas, public-speaking galleries, and activity photography use an artistic portfolio language: carbon-black fields, large scale, full-bleed imagery, asymmetric composition, and restrained motion. Research records and long-form writing use a quieter academic editorial language: neutral white surfaces, readable measures, thin rules, and source metadata. The whole site is neutral monochrome; never reintroduce warm paper, cream, terracotta, or decorative color.

## Palette and typography

- **Paper `#f7f7f7`**: neutral page background and text on dark surfaces.
- **Ink `#101010`**: gallery surfaces, primary text, major rules, focus, contact, and footer.
- **Muted `#5c5c5c`**: introductions, metadata, captions, and secondary copy on light surfaces.
- **Line `#d9d9d9`**: secondary dividers and control borders.
- **Soft `#efefef`**: Current Work background, image loading surface, writing-row hover, and pagination hover.
- **White `#ffffff`**: the dedicated Profile research record.

On dark gallery surfaces, use paper for primary content and explicitly assigned light greys (`#bdbdbd`–`#e2e2e2`) for secondary copy. Do not use the light-surface muted token on black. Focus outlines switch to paper on dark surfaces.

Use **Times New Roman**, with Times and generic serif fallbacks, throughout the existing site. Headings use weight 400, tight tracking, and responsive clamps up to 6rem. Labels are small, semibold, uppercase, and letter-spaced. Italic is reserved for the homepage question, research emphasis, and selected title hovers.

Default geometry is square with thin rules. The circular archive arrow and small wordmark dot are exceptions. Preserve visible keyboard focus and minimum 44 px interactive targets.

## Shared chrome

All headers use a carbon-black gallery frame with paper-colored navigation and a small wordmark dot. The homepage header is static; Profile, Writing, and Essay use the shared sticky header. Active navigation uses a paper underline. Inner-page footers and the homepage contact band continue the dark frame with location and email.

## Homepage

Preserve this sequence and its gallery/reading-room alternation:

1. **Gallery opening** — a black field with “How do institutions shape everyday life?” in two masked lines, a concise introduction, and profile/writing actions. Primary action is paper on ink; secondary copy uses light grey.
2. **Asymmetric photographic opening** — a compact `1.65 / 1` landscape portrait of the seated Kenya representative at **Berkeley MUN China**, flanked by two smaller `4 / 5` photographs at different vertical offsets. The crop keeps the delegate’s face and upper body clear while reducing surrounding standing figures. The main caption reads **“Representing Kenya during a committee working session”**; satellite captions read **“Global Youth Shanghai Diplomats Summit · SISU”** and **“Panel discussion · SFLSHZ.”**
3. **Academic work record** — a soft neutral section led by **Research 01 · Working paper**, followed by two smaller ruled entries for reading/writing and student leadership. The featured research uses a two-column record, ink rule, and one scroll-triggered reveal.
4. **Gallery experience** — a full-width black section with six authentic activity photographs arranged in a compact continuous 3D ring: piano performance, football team, HSYLC, academic presentation, school-event hosting, and Halloween. None repeats the three opening photographs. The active photograph is full opacity with a precise caption; adjacent photographs provide spatial context. Autoplay rotates continuously at 10 degrees per second only while the region and browser tab are visible, with the active caption updating as each photograph reaches the front. Circular **Previous** and **Next** controls move one photograph at a time; there is no autoplay toggle. Only the active photograph pauses rotation on hover or keyboard focus; captions, controls, and surrounding empty space do not. Clicking a photograph opens an enlarged, keyboard-accessible dialog that pauses background rotation and closes by button, Escape, or backdrop. The piano photograph is cropped around the performer rather than the stage backdrop, and the Halloween portrait uses a tight upper-body crop; the distinct Halloween hosting panorama remains in Profile.
5. **Academic writing index** — neutral full-width ruled essay rows with **“Read · Essay”**, year metadata, title, excerpt, and arrow. Hover uses a soft neutral background and italic title.
6. **Contact** — a dark band with a subtle top rule, location, and generously scaled email link.

The research link targets `/profile#research`; the experience link targets `/profile#leadership`. Keep opening copy and captions constrained to readable measures while allowing photographs and major headings to carry the artistic scale.

## Profile

Use **one primary column**, introduced by a black identity gallery:

- The identity header pairs a 180 px `4 / 5` portrait with name, preferred name, and location, all on carbon black.
- A light horizontal section index sits between identity and content. Its buttons smooth-scroll to Direction, Research, Learning, Leadership, Education, and Capabilities without rewriting the URL.
- Navigation is hash-aware across routes: `/profile#research` and `/profile#leadership` scroll directly to their section starts; route changes without a matching hash reset to the top.
- The main record is centered at a maximum width of 1180 px. Direction, learning, leadership, education, and capabilities retain clear portfolio-style hierarchy without decorative paper textures.
- Direction, Research, Learning, Education, and Capabilities use a text-plus-evidence split above 1000 px: substantive content occupies the left column and one contextual photograph occupies a narrower right column. Their five right-column figures are respectively the reading collage, public-toilet working notes, Risk-Pilot demonstration, teacher discussion, and bass practice. Research notes may remain sticky beside the longer record; no other side figure needs motion.
- **Research is the dedicated academic reading space**: a white, ink-ruled band with generous internal padding, source metadata, readable summaries, research questions, current stages, and methods/themes tags. Its working-notes screenshot is cropped to remove application chrome.
- Keep the two content types distinct: **Research 01 · Read the record** and **Documentary 01 · Watch & listen**.
- Each leadership record has its own text-plus-evidence split. The kindergarten English-reading photograph and Halloween hosting panorama sit to the right of **Student Council President**; the former homepage China discussion photograph and two supplied MUN group photographs stack to the right of **Delegate & Bloc Leader**. On smaller screens each evidence group stacks below its own text. The five leadership figures, identity portrait, and five other right-column figures remain unique to Profile; no photograph repeats on the homepage.

## Writing archive and long-form reading

Writing is an academic reading surface inside the shared dark site frame.

### Archive

Use a two-column hero above a transparent, rule-led tool area on neutral paper. Search matches title, subtitle, excerpt, category, and tags; theme and year filters combine with the query. Show a live result count and a resettable empty state. The archive contains three personal/philosophical essays and one clearly labelled **Research Note**. Rows remain linear, with year/reading time, title, category, subtitle, excerpt, tags, and a circular arrow link—never a card grid.

### Essays and research note

- A fixed 3 px ink bar tracks reading progress.
- English is the default edited reading version. All three personal/philosophical essays provide an **English / 中文原文** switch with native, keyboard-accessible buttons. The wallet essay’s Chinese version contains the personal body only, excluding the subsequent AI dialogue.
- English translations use a natural, first-person student voice: direct sentences, concrete memories, visible curiosity, and room for uncertainty. Preserve philosophical precision without forced slang, grand conclusions, textbook-like exposition, or an artificially aged tone.
- The header contains an archive back link, large title, subtitle, byline metadata, and tags. Chinese titles use a CJK serif fallback after Times New Roman; Chinese body copy is never italicized.
- Desktop reading uses a narrow margin note beside a **70ch** article column; the margin note may link to the original Chinese publication or official research documents.
- Rousseau and Hegel portraits appear as inline documentary figures in both language versions of their respective articles. The research note includes two original policy screenshots, separates observation, documented evidence, hypotheses, working interpretation, and unresolved questions, and never presents the working hypothesis as settled.
- Body copy is `1.13rem / 1.78` in English and `1.9` line-height in Chinese; sections have clear spacing, and quotes use a simple ink left rule with a citation.
- Newer/older essay pagination splits into two columns on desktop. At the oldest entry, the next link returns to the archive. Unknown slugs show a simple not-found state with an archive link.

## Photography and content integrity

Use only authentic, supplied photographs in their **natural color**, with responsive `object-fit: cover` crops and accurate alt text. Natural photography provides the color within the otherwise monochrome interface. Do not add color overlays, stylized filters, decorative frames, or shadow treatments.

Each supplied image appears in exactly one site location. Never repeat a photograph across the homepage, Profile, or articles, and never simulate a new photograph through cropping, compression, or renaming. If all available images are already placed, remove a redundant gallery slot rather than reuse an image.

**Never substitute stock, AI-generated, or placeholder photographs. Never invent facts, events, dates, awards, publications, outcomes, testimonials, or other evidence.** Preserve these exact event facts: **“YMUN · May 2025”**, **“Global Youth Shanghai Diplomats Summit · SISU”**, **“HSYLC · Summer program”**, and **“Football · Top 8 in Fuyang, Hangzhou”** on their corresponding images. Lazy-load below-the-fold documentary images and retain explicit dimensions where provided.

## Responsive behavior

The principal mobile breakpoint is **760 px**, with a 320 px minimum canvas and 20 px gutters. Verify at 375 px.

- Homepage introduction, section headings, research record, supporting entries, photo ring, essay rows, contact, and footer stack. The black gallery regions remain full bleed.
- The opening gallery places the landscape Kenya portrait first, followed by the two satellite photographs in an equal two-column row; all three align to the 20 px content gutters. The ring uses a 58 vw active card, a 230 px radius, and a 260 px viewport so adjacent photographs remain visible without horizontal page overflow. Previous and next buttons retain 44 px touch targets.
- Shared navigation hides the secondary wordmark and Contact; keep navigation compact and usable.
- Profile identity shrinks to a 104 px portrait. The research band removes negative margins and uses vertical padding only. The horizontal section index becomes a single-row scrollable strip.
- Multi-column records and the capability list stack. Each Profile side figure stacks below its corresponding text at 1000 px and below, retains its natural aspect ratio, and uses a 40 px gap.
- Archive filters stack. Essay metadata becomes inline above the title. Article margin note and body stack, and pagination becomes one column.
- Ensure long titles and email addresses do not create horizontal page scrolling. Touch devices do not depend on hover; all ring controls retain 44 px targets.

## Motion and reduced motion

Motion is authored at three scales: two masked homepage title lines, one coordinated opening-gallery reveal, and one-time in-view reveals for the featured research record and experience gallery. The title lines use a 680 ms exponential ease-out with a 90 ms stagger. The main photograph unmasks first, followed by the two satellite images at 120 ms and 220 ms delays. Research combines a short rise with a clip reveal; the gallery uses opacity and a 24 px rise. The ring uses requestAnimationFrame for continuous, uniform rotation at 10 degrees per second while visible; React updates only when the active photograph changes, never on every animation frame. Do not add parallax, particles, custom cursors, scroll-jacking, card lifts, or broad animation to every section.

Run entrance motion only under `prefers-reduced-motion: no-preference`. The reveal hook immediately exposes content when reduced motion is requested or IntersectionObserver is unavailable. Reduced motion disables ring autoplay and 3D transition timing while preserving immediate previous/next navigation. Under `prefers-reduced-motion: reduce`, disable CSS smooth scrolling, reduce animation and transition durations to `0.01ms`, and leave all content visible without transforms or clipping.
