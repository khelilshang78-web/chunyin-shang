---
name: "ChunYin Shang"
description: "A two-city editorial profile connecting personal inquiry, authentic evidence, and long-form writing."
colors:
  field-blue: "#a8d0e6"
  field-red: "#F2482D"
  field-paper: "#e7e7e7"
  near-black: "#111111"
  text-secondary: "#35444b"
  text-on-blue: "#24353c"
  border-subtle: "#a5afaa"
typography:
  display:
    fontFamily: "Times New Roman, Times, serif"
    fontSize: "clamp(3.8rem, 6.65vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Times New Roman, Times, serif"
    fontSize: "clamp(3rem, 5.4vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Times New Roman, Times, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  longform:
    fontFamily: "Times New Roman, Times, serif"
    fontSize: "1.13rem"
    fontWeight: 400
    lineHeight: 1.78
  label:
    fontFamily: "Times New Roman, Times, serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  square: "0"
  circle: "50%"
spacing:
  page-gutter: "40px"
  mobile-gutter: "20px"
  section-space: "96px"
  mobile-section-space: "64px"
components:
  home-primary-action:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.field-paper}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
  home-primary-action-hover:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
  archive-arrow:
    backgroundColor: transparent
    textColor: "{colors.near-black}"
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  reading-progress:
    backgroundColor: "{colors.field-red}"
    height: "3px"
---

# Design System: ChunYin Shang

## Overview

**Creative North Star: "Two Cities, One Inquiry"**

The site connects life between Hangzhou and Hong Kong through two flat editorial fields: sky blue and vermilion. The homepage puts the governing question and authentic public-speaking evidence in the same first viewport; grey-white space then gives research, experience, and writing room to breathe. The result should feel direct, academically credible, personal, and printed rather than templated.

The visual system is deliberately economical: one serif family, hard colour fields, sharp rules, real photographs, and almost no ornament. Extend the same language to Profile, Writing, and Essay pages instead of inventing a separate visual identity for each route.

**Key Characteristics:**
- Equal blue/red colour split on the desktop opening, with content allowed to cross the divide.
- Times New Roman everywhere; roman type by default and italic used as a deliberate emphasis.
- Flat colour, near-black one-pixel rules, square corners, and no decorative shadows.
- Authentic photographs with factual captions; no stock, generated, or fictional evidence.

## Colors

The palette is a small set of flat editorial fields, not a general-purpose UI ramp.

### Primary
- **Sky Blue** (`field-blue`): homepage left field, shared navigation, Profile identity rail, Writing hero, and Essay header.
- **Vermilion** (`field-red`): homepage right field, Profile contents rail, contact/footer bands, reading progress, selection, focus, and active accents.

### Neutral
- **Grey White** (`field-paper`): main page and reading surfaces, homepage inquiry strip, and current-work section.
- **Near Black** (`near-black`): primary text, rules, image borders, and the primary homepage action.
- **Secondary Ink** (`text-secondary`, `text-on-blue`): supporting copy; preserve the darker blue-field variant where already used.
- **Subtle Rule** (`border-subtle`): secondary dividers only; major section boundaries use near black.

**The Hard-Stop Rule.** The opening uses a 50% blue / 50% red hard-stop split. Do not turn this into a decorative gradient, soften it into beige, or add extra accent colours.

## Typography

**Display, Body, and Label Font:** Times New Roman, with Times and generic serif fallbacks. Use it for navigation, controls, metadata, captions, headings, and body copy alike.

**Character:** Large, regular-weight headlines create the editorial voice. Tight headline spacing contrasts with relaxed body leading. Labels are small, semibold, uppercase, and letter-spaced without changing typeface.

### Hierarchy
- **Homepage Display:** use the `display` token; keep the question on two explicit lines and its second-line phrase in italic.
- **Section Headline:** use the `headline` token for major homepage statements; route heroes use their existing responsive clamps rather than enlarging body text.
- **Body:** 16 px / 1.6 globally; introductory copy stays compact, generally within 43–58 characters.
- **Long-form:** use `longform`, with a maximum article-body width of 70ch. Section headings remain regular weight.
- **Label:** use `label` for eyebrows, categories, indices, and metadata.

**The Italic Accent Rule.** Roman is the default. Italic is reserved for the key phrase in the homepage question and the selected-writing title hover; do not italicize whole pages, navigation, or every heading.

## Layout

### Homepage opening
- Desktop header is 80 px high; the opening fills `calc(100svh - 80px)` and uses a 12-column grid with 24 px column gaps and 40 px side gutters.
- The background split is exactly half blue and half red. Copy occupies columns 1–8; the photograph occupies columns 8–12. Their overlap at column 8 is intentional and makes the composition cross the colour divide.
- The opening headline is two lines, with the italic phrase crossing toward the photograph. Actions sit below the introduction.
- A full-width grey-white Current Inquiry strip closes the opening. Below it, Current Work is grey white, Selected Writing is blue, and Contact is red.

### Authentic photography
- The homepage source photograph is 1280 × 853 (3:2), rendered as a 4:5 portrait crop with `object-fit: cover` and object position `54% center`. Preserve the crop rather than stretching the image.
- Desktop photograph width is at most 580 px, height at most 62svh, with a one-pixel near-black border and a factual two-part caption.
- On entry, `clip-path` animates from `inset(18% 0 0 0)` to `inset(0)` while scale moves from 0.97 to 1 over 900 ms with `cubic-bezier(0.26, 1, 0.48, 1)`.
- Disable this reveal under `prefers-reduced-motion: reduce`; keep the complete photograph visible.

### Profile, Writing, and Essay
- **Profile:** desktop uses three columns—blue sticky identity rail, grey-white main record, red sticky contents rail. At 1100 px the contents rail disappears; at 760 px identity and content stack and sticky positioning is removed.
- **Writing:** blue two-column hero above a grey-white archive. Search, filters, metadata, and essay rows remain linear and rule-led rather than becoming cards.
- **Essay:** blue title header, then a centred reading grid no wider than 1200 px. Desktop uses a narrow margin note and a 70ch article column; mobile stacks them. Previous/next navigation splits in two on desktop and stacks on mobile.
- Shared footers remain compact red bands with near-black text and a top rule.

### Mobile and 375 px verification
- The principal mobile breakpoint is 760 px; 375 px is a required verification width, not a separate breakpoint. Keep the 320 px minimum canvas.
- At 375 px, use 20 px gutters. The homepage becomes one blue column: question, actions, photograph, then Current Inquiry. Do not preserve a squeezed 50/50 split.
- The photograph becomes a full-bleed red panel (`width: calc(100% + 40px)`, negative 20 px side margins), retaining 20 px internal padding and the 4:5 crop without the desktop height cap.
- Homepage display type uses `clamp(2.85rem, 12.6vw, 4.5rem)` and 0.92 line height. Section headings and archive rows stack; metadata moves above titles.
- Home navigation stays compact with 16 px gaps; the preferred name is hidden. Shared navigation hides Contact, while Profile and Writing remain available.
- Preserve minimum 44 px interactive targets, wrap or stack filter and footer controls, and check that long titles and the email address do not cause horizontal scrolling.

## Elevation & Depth

The system is flat: no card shadows, floating panels, or ambient elevation. Depth comes from colour-field changes, sticky desktop rails, the intentional copy/photo overlap, and the single photographic reveal. Do not add shadows to make content feel important.

## Shapes

Use square corners and one-pixel rules as the default geometry. Major dividers are near black; secondary dividers may use the subtle rule token. The circular 44 px archive arrow is a deliberate exception, not permission to round every control. Image clipping belongs only to the established homepage reveal.

## Components

### Navigation
- Shared headers are blue, sticky, and rule-bound; homepage navigation is part of the split opening on desktop.
- Active shared-navigation links retain near-black text and gain a vermilion underline. Keep labels in Times New Roman and preserve keyboard focus.

### Links and actions
- The primary homepage action is a square near-black rectangle; hover reverses it to grey white with near-black text.
- Secondary links are underlined text links. Standard hover motion is 200 ms with `cubic-bezier(.23,1,.32,1)`; arrow movement is only 3 px horizontally and -3 px vertically.
- Selected Writing titles become italic on hover. Do not replace this with a card lift or shadow.

### Search and filters
- Search and filters remain transparent and rule-led. Active filters use a two-pixel vermilion underline; search focus uses a two-pixel vermilion outline with a 3 px offset.
- Global keyboard focus uses a two-pixel vermilion outline with a 4 px offset. Never remove it without an equivalent visible replacement.

### Reading
- Essay progress is a fixed three-pixel vermilion bar at the top. Article quotes use a near-black left rule, not a coloured card.
- Pagination hover uses the blue field. Reduced-motion mode disables smooth scrolling and collapses transition durations.

## Do's and Don'ts

### Do:
- **Do** preserve the dual-city concept as two flat fields and carry the blue / red / grey-white rhythm through every route.
- **Do** use the final token values in this file and the end of `src/index.css`; earlier warm-paper declarations are superseded legacy layers.
- **Do** use only the real images in `public/images/` with accurate alt text, provenance, and captions.
- **Do** keep new sections editorial, spacious, keyboard accessible, and readable at 375 px.
- **Do** check the actual cascade after editing: later rules currently define the shipping design.

### Don't:
- **Don't** reintroduce a generic beige / cream template, card grid, decorative gradient, glass effect, or shadow-heavy interface.
- **Don't** introduce another font family or make italics the default heading style.
- **Don't** substitute stock, AI-generated, placeholder, or uncaptioned imagery for authentic evidence.
- **Don't** invent awards, publications, testimonials, project outcomes, interviews, or other visual/content proof.
- **Don't** force the desktop split, sticky rails, or multi-column reading layout into mobile widths.
