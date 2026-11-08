# Pedi N Nails Howard website

Website for Pedi N Nails Howard, a nail salon in Toronto. Calm, editorial style: linen and espresso colours, large serif headlines, a clear price list.

Plain HTML, CSS and JavaScript. No build step and nothing to install.

**Live (draft):** https://anhtuanbui-design.github.io/nail-salon/

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Services & prices (with "plan your visit" total) | `services.html` |
| Book an appointment | `book.html` |
| Gallery (filter by style) | `gallery.html` |
| Our team | `team.html` |
| Shade picker | `shades.html` |
| E-Gift Cards | `gift-cards.html` |
| Offers & rewards (loyalty card) | `offers.html` |
| About us | `about.html` |
| Contact & hours | `contact.html` |
| FAQ & policies | `faq.html` |
| Journal + 3 articles | `journal.html`, `article-*.html` |
| Privacy policy (template) | `privacy.html` |
| Page not found | `404.html` |
| Website plan and AI prompt pack | `blueprint.html` |

## Shared files

| File | What it is |
|---|---|
| `salon-data.js` | **Salon data**: hours, services, prices, shades, booking link. Every page reads from it |
| `styles.css` | Styles for every page |
| `site.js` | Mobile menu, booking links, opening hours and "Open now" |
| `home.js`, `services.js`, `gallery.js`, `shades.js` | Page-specific scripts |

Each page has the same header, footer and phone bar written into it. If you change a menu link, change it on every page (search and replace across files).

## Preview

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Edit salon details

Hours, services and prices live in **`salon-data.js`**. Change them once and both pages update:

- `bookingUrl`: paste the Fresha, Square, Vagaro or Booksy booking link. Every Book button then opens it.
- `hours`: opening hours for each day. The "Open now / Closed" label uses the Toronto time zone.
- `menu`: categories and services. Each service has a name, minutes, price, a one-line description, and `from: true` when the price depends on length or design.
- `shades`: the colour swatches on the homepage.

Contact details are written straight into the pages. Search all `.html` files for these:

- `Street address`: the address (in the Visit section and the footer)
- `(416) 555-0142` and `tel:+14165550142`: the phone number
- `email@example.com`: the email address
- `@pedinnailshoward`: the Instagram handle (check it's the right one)
- `query=Pedi%20N%20Nails%20Howard%20Toronto`: the Get Directions link

## Still placeholder

- [ ] Address, phone, email, parking
- [ ] Opening hours
- [ ] Services and prices
- [ ] Reviews and the Google rating (currently marked "Sample")
- [ ] Photos: every grey-beige box marked "Your photo" (`class="ph"`) needs a real photo, using `<img src="..." alt="...">`
- [ ] Booking link
- [ ] Remove the "Draft" bar at the top of each page once everything is confirmed
- [ ] Remove the `<meta name="robots" content="noindex">` line from every page so Google can list the site

## Hosting

The site is on **GitHub Pages**, published from the `main` branch, root folder (repository Settings → Pages). Every push to `main` updates the live site within a minute or two.

- Live address: https://anhtuanbui-design.github.io/nail-salon/
- `.nojekyll` tells GitHub to serve the files as they are, with no Jekyll build.
- While the content is placeholder, every page has a `noindex` tag so search engines don't list it.

To use your own domain (for example `pedinnailshoward.com`): buy it from any registrar, enter it under Settings → Pages → Custom domain, then add the DNS records GitHub shows you at the registrar. Keep "Enforce HTTPS" ticked.

## Status

All pages are built, but only for **look and layout**. Still to do:

- [ ] Connect booking: paste the booking link in `salon-data.js`, or embed the booking widget on `book.html`
- [ ] Connect gift card payments (`gift-cards.html`)
- [ ] Make the contact form send email (`contact.html`)
- [ ] Replace placeholder content: contact details, hours, prices, team, reviews, photos, the About story and the privacy policy
- [ ] Write the three "Coming soon" journal articles, or remove them
