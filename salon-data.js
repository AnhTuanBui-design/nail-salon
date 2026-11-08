/* =====================================================================
   SALON DATA: edit this file to change hours, services, prices and shades.
   Every page reads from here, so a change shows up everywhere at once.
   All prices, times and hours below are PLACEHOLDERS until confirmed.
   ===================================================================== */
var SALON = {
  name: "Pedi N Nails Howard",
  bookingUrl: "",                 // paste your Fresha / Square / Vagaro / Booksy link here
  timezone: "America/Toronto",

  // 0 = Sunday … 6 = Saturday. 24-hour times. Use [day, null, null] for closed days.
  hours: [
    ["Sunday",    "10:00", "18:00"],
    ["Monday",    "09:30", "19:30"],
    ["Tuesday",   "09:30", "19:30"],
    ["Wednesday", "09:30", "19:30"],
    ["Thursday",  "09:30", "19:30"],
    ["Friday",    "09:30", "19:30"],
    ["Saturday",  "09:30", "19:30"]
  ],

  // id: used in links (services.html#id). min: minutes. price: dollars.
  // from: true shows "from $X" because the price depends on length or design.
  menu: [
    { id: "manicures", name: "Manicures",
      blurb: "Shaping, cuticle care and a finish in regular polish, gel or dip.",
      items: [
        { name: "Classic Manicure",     min: 30, price: 25, desc: "Shape, cuticle care, a short hand massage and regular polish." },
        { name: "Gel Manicure",         min: 45, price: 40, desc: "Glossy gel colour cured under a lamp. Lasts two to three weeks." },
        { name: "Dip Powder Manicure",  min: 50, price: 45, desc: "Strong, chip-resistant powder colour on your natural nails." },
        { name: "Polish Change",        min: 15, price: 15, desc: "Fresh regular polish on hands. No cuticle work." }
      ] },
    { id: "pedicures", name: "Pedicures",
      blurb: "A warm soak, scrub, massage and polish. Take your time.",
      items: [
        { name: "Classic Pedicure",          min: 35, price: 35, desc: "Soak, nail and cuticle care, light scrub and regular polish." },
        { name: "Spa Pedicure",              min: 45, price: 45, desc: "Adds a sugar scrub, mask, hot towels and a longer massage." },
        { name: "Deluxe Hot Stone Pedicure", min: 60, price: 55, desc: "Our longest pedicure, with warm stones and paraffin for tired feet." },
        { name: "Gel Pedicure",              min: 50, price: 50, desc: "Classic pedicure finished in gel colour that lasts for weeks." }
      ] },
    { id: "combos", name: "Combos",
      blurb: "Hands and feet together, priced lower than booking each one.",
      items: [
        { name: "Classic Mani + Pedi",   min: 60, price: 55, desc: "Classic manicure and classic pedicure in one visit." },
        { name: "Gel Mani + Spa Pedi",   min: 90, price: 80, desc: "Gel manicure with the full spa pedicure." }
      ] },
    { id: "enhancements", name: "Enhancements",
      blurb: "Length and strength with Gel-X, acrylic and builder gel.",
      items: [
        { name: "Gel-X Extensions",     min: 75, price: 65, from: true, desc: "Soft gel tips for natural-looking length. Price depends on length." },
        { name: "Acrylic Full Set",     min: 75, price: 55, from: true, desc: "Classic acrylic extensions in any shape, finished in gel colour." },
        { name: "Acrylic Fill",         min: 60, price: 40, from: true, desc: "Fills the regrowth on a set that is two to three weeks old." },
        { name: "Builder Gel Overlay",  min: 60, price: 50, from: true, desc: "Strengthens natural nails without adding length." }
      ] },
    { id: "nail-art", name: "Nail Art",
      blurb: "From a single accent nail to a full custom set, priced by detail.",
      items: [
        { name: "Simple Art (2 nails)", min: 10, price: 5,  from: true, desc: "Dots, lines, a small flower or a single sticker design." },
        { name: "French Tips",          min: 15, price: 10, desc: "Classic white, coloured or micro French on any manicure." },
        { name: "Chrome or Cat-eye",    min: 10, price: 10, desc: "Mirror chrome powder or a magnetic cat-eye finish." },
        { name: "Custom Design",        min: 30, price: 20, from: true, desc: "Bring a photo. We'll quote before we start." }
      ] },
    { id: "add-ons", name: "Add-ons & Removal",
      blurb: "Extras and removals that pair with any service.",
      items: [
        { name: "Gel Removal",              min: 15, price: 10, desc: "Gentle soak-off of gel or dip polish." },
        { name: "Acrylic or Gel-X Removal", min: 30, price: 20, desc: "Safe removal of extensions without damaging the natural nail." },
        { name: "Nail Repair",              min: 10, price: 5,  desc: "Fix one broken or lifted nail." },
        { name: "Paraffin Treatment",       min: 10, price: 10, desc: "Warm paraffin wax for dry hands or feet." }
      ] },
    { id: "waxing", name: "Waxing",
      blurb: "Quick, clean facial and body waxing.",
      items: [
        { name: "Eyebrow Wax",  min: 15, price: 12, desc: "Shape and clean up the brows." },
        { name: "Lip Wax",      min: 10, price: 8,  desc: "Upper lip." },
        { name: "Full Face Wax",min: 30, price: 35, desc: "Brows, lip, chin and sides of the face." },
        { name: "Underarm Wax", min: 15, price: 20, desc: "Both underarms." }
      ] },
    { id: "kids", name: "Kids Under 10",
      blurb: "Gentle, quick services for little hands and feet.",
      items: [
        { name: "Kids Manicure",     min: 20, price: 15, desc: "Shape and regular polish. Fun colours welcome." },
        { name: "Kids Pedicure",     min: 30, price: 25, desc: "Short soak, nail care and polish." },
        { name: "Kids Polish Change",min: 10, price: 12, desc: "Fresh colour on hands or toes." }
      ] }
  ],

  // [name, colour, finish]
  shades: [
    ["Bare Silk", "#E9CDBE", "Cream"], ["Oatmeal", "#D8C0A5", "Cream"], ["Rosewater", "#EDBFC2", "Sheer"],
    ["Petal Hour", "#D98A9A", "Cream"], ["Berry Velvet", "#8E2344", "Cream"], ["Persimmon", "#D2563F", "Gloss"],
    ["Cinnamon Tea", "#8A4B32", "Cream"], ["Sage Leaf", "#9AAA8C", "Cat-eye"], ["Lagoon", "#2F6F73", "Shimmer"],
    ["Night Orchid", "#4B2B4F", "Shimmer"], ["Gilded", "#C9A96A", "Chrome"], ["Ink", "#1F1B24", "Cream"]
  ]
};

/* Helpers shared by every page */
SALON.formatPrice = function (it) { return (it.from ? "from $" : "$") + it.price; };
SALON.formatMinutes = function (m) {
  var h = Math.floor(m / 60), r = m % 60;
  return h ? h + " h" + (r ? " " + r + " min" : "") : r + " min";
};
SALON.lowestPrice = function (cat) {
  return Math.min.apply(null, cat.items.map(function (it) { return it.price; }));
};
