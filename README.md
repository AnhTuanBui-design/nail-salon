# Pedi N Nails Howard website

Website for Pedi N Nails Howard, a nail salon in Toronto. Calm, editorial style: linen and espresso colours, large serif headlines, a clear price list.

Plain HTML, CSS and JavaScript. No build step and nothing to install.

## Files

| File | What it is |
|---|---|
| `index.html` | The homepage |
| `blueprint.html` | The website plan: sitemap, every page, booking flow, design direction, and a prompt pack for building the remaining pages with AI |

## Preview

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Edit salon details

Most of the data is in one block near the bottom of `index.html`, marked `SALON DATA`:

- `bookingUrl`: paste the Fresha, Square, Vagaro or Booksy booking link. Every Book button then opens it.
- `hours`: opening hours for each day. The "Open now / Closed" label uses the Toronto time zone.
- `menu`: service categories, services, minutes and prices.
- `shades`: the colour swatches in the Shades section.

The rest is written straight into the page. Search `index.html` for these:

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
- [ ] Remove the "Draft homepage" bar at the top once everything is confirmed

## Hosting

GitHub Pages on a private repository needs a paid GitHub plan. Netlify and Vercel both host private repositories for free:

1. Import this repository.
2. Leave the build command empty and set the publish directory to the repository root.
3. Connect the domain in the host's settings.

## Next pages

Build them in this order, using the prompt pack in `blueprint.html`: Services & Pricing, Book, Gallery, Contact, then Team, Gift Cards, Shade Picker, Journal, About and FAQ.
