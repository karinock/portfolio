# Chikara Karino — portfolio

Static personal-brand site (HTML, CSS, one small JS file). No build step, no dependencies, no external fonts or requests.

## Preview

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Pages

| File | Purpose |
|---|---|
| `index.html` | Hero with portrait, four selected-work cards, About, Contact |
| `case-studies.html` | Four case studies (`#madison`, `#roadbum`, `#renaissance`, `#truesummit`) |
| `resume.html` | Resume page (the site never links to a DOCX) |
| `styles.css` / `script.js` | Shared styling; reveals, counters, subtle portrait drift, active case-study nav |
| `DESIGN-PLAN.md` | Visual system and image decisions |

Each case study follows: Context, Challenge/Opportunity, My role, Methodology, Evidence, Results, What it shows, Notes/attribution.

## Image audit

| Original | Decision | Why |
|---|---|---|
| `chikara-karino-headshot.jpg` | **Kept** (hero), re-cropped 4:5, 84 KB | Professional, clean, fits the system |
| `chikara-karino-outdoor.jpg` | **Kept** (About only), re-cropped 4:5, 54 KB | Adds warmth; casual, so delete it from `index.html` if you prefer one portrait |
| `outreach-email-redacted.png` | **Kept, re-cropped** (`madison-sponsorship-tiers.png`) | Shows the offer structure; the old crop cut text mid-sentence |
| `roadbum-display-ad.png` | **Kept, re-cropped** | Clear creative; removed Google Ads preview label |
| `roadbum-search-ads.png` | **Reduced to one ad** (`roadbum-search-ad.png`) | Original was an overlapping collage with ad-platform UI text |
| `true-summit-product-detail.jpg` | **Kept, re-cropped**, alt text corrected | It shows stickers, not apparel; the old alt text overclaimed |
| `true-summit-sales-by-week.png` | **Rebuilt as an SVG chart** | Low-res dark graph; rebuilt using only its six printed values |
| `renaissance-*.png` (3 slides) | **Rebuilt as native charts** | Clashing palette and clip art; rebuilt using only printed percentages |

All originals remain untouched in `assets/source/` (not referenced by the site).

## Fact handling

- Madison: $9,950 is labeled organization-wide everywhere; 150+ and 35.6% are labeled as my work; the email rate is labeled opens-only.
- RoadBum: metrics are labeled click/cost metrics only; no revenue claim. "+6.6 points" and "about 12% lower CPC" are arithmetic from the stated figures.
- Renaissance: $302,400 is labeled modeled/not realized in the metric card, the formula, and a note. The one-night assumption and the application of the 40% rate to all 21,000 attendees are stated. 8,400 is 21,000 × 40%.
- TRUE SUMMIT: revenue, 206%, and ~$2,800/day are labeled as reported figures.

## Please verify before publishing

1. **TRUE SUMMIT weekly chart vs. totals.** The six weekly values in the original graph add up to about $6,550, which does not match the ~$14,000 revenue total. The page captions them as separate figures, but a reader may still ask. Confirm what the chart covers.
2. **Madison dates.** The resume previously said "Sep. 2026–Present". I changed it to Sep.–Dec. 2026 to match your fact list. Confirm that, and that the Nov. 7 event and $9,950 result are final.
3. **Carried over unchanged from your resume/previous site:** GPA 3.97, BYU–Idaho Testing Center details, "300+ students and faculty", the "Red Lodge, Montana" $300 hotel price, and the 21,000 attendance figure.
4. Placeholder-free: nothing was invented, but I removed two earlier claims not in your fact list ("300+ reached" badge on the homepage and "6% CTR increase within five weeks").
