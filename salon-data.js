/* =====================================================================
   SALON DATA: edit this file to change hours, services, prices, social links and shades.
   Every page reads from here, so a change shows up everywhere at once.
   Services and prices follow the Pedi N Nails Dundas East menu. Hours are PLACEHOLDERS until confirmed.
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

  // Social links. The footer on every page reads these, so change them here once.
  social: {
    instagram: { handle: "@pedinnailshoward", url: "https://www.instagram.com/" },
    facebook:  { label: "Facebook",          url: "https://www.facebook.com/" }
  },

  // id: used in links (services.html#id). price: dollars, used for the "from" price and the visit total.
  // from: true adds "+" because the final price depends on length or design.
  // label: optional, shown instead of the price when a service has several prices ("$15 / $20").
  // upgrade: true for add-ons that sit inside a category but are left out of its "From $" price.
  // desc: optional. Leave it out for a short name-and-price line (like waxing).
  menu: [
    { id: "manicures", name: "Hand Treatment",
      blurb: "Natural-nail care for hands, finished in regular polish or long-wearing shellac.",
      items: [
        { name: "Manicure",         price: 29, desc: "Natural nail shaping and tidy-up with classic manicure care and a polished finish." },
        { name: "Shellac Manicure", price: 40, desc: "A manicure finished with durable gel polish cured for a glossy, longer-lasting finish." }
      ] },
    { id: "pedicures", name: "Foot Treatment",
      blurb: "Classic and deluxe pedicures, finished in regular polish or shellac.",
      items: [
        { name: "Pedicure",                         price: 40, desc: "Classic foot and nail care finished with regular polish." },
        { name: "Shellac Pedicure",                 price: 50, desc: "Pedicure care completed with glossy, durable gel polish." },
        { name: "Deluxe Pedicure (Regular Polish)", price: 65, desc: "An upgraded pedicure experience with additional care beyond the classic service, finished with regular polish." },
        { name: "Deluxe Shellac Pedicure",          price: 75, desc: "The deluxe pedicure experience finished with long-wearing shellac gel polish." }
      ] },
    { id: "combos", name: "Combo Promotion",
      blurb: "Hands and feet in a single visit.",
      note: "Deluxe Add On applies to eligible services. The salon confirms eligibility when you book.",
      items: [
        { name: "Manicure & Pedicure",                 price: 60, desc: "Classic manicure and pedicure combined into one visit." },
        { name: "Shellac Manicure & Regular Pedicure", price: 75, desc: "Shellac manicure paired with a classic regular-polish pedicure." },
        { name: "Shellac Manicure & Shellac Pedicure", price: 85, desc: "Gel-polish manicure and pedicure combined for longer-lasting colour." },
        { name: "Deluxe Add On",                       price: 25, upgrade: true, desc: "Upgrade an eligible service to the deluxe experience." }
      ] },
    { id: "enhancements", name: "Nail Enhancement",
      blurb: "Structure, strength and length with acrylic, UV gel, Bio Gel, Gel-X and dipping systems.",
      note: "Prices marked + are starting prices. The final cost depends on length, shape and design.",
      items: [
        { name: "Acrylic / UV Full Set",        price: 55, from: true, desc: "A full enhancement set designed to add length, structure and a defined shape." },
        { name: "Acrylic / UV Refill",          price: 45, from: true, desc: "Maintenance for existing acrylic or UV enhancements: the grown-out area is refreshed and the shape restored." },
        { name: "Bio Gel Full Set",             price: 65, from: true, desc: "A gel enhancement designed to create added structure and/or length with a smooth finished appearance." },
        { name: "Bio Gel Refill",               price: 50, from: true, desc: "Maintenance for an existing Bio Gel set, refreshing the growth area and restoring the finish." },
        { name: "Bio Gel Overlay",              price: 60, desc: "Bio Gel applied over the natural nails for reinforcement without a traditional extension." },
        { name: "Gel-X Full Set",               price: 65, from: true, desc: "A full-cover soft-gel extension system used to create added length and a consistent shape." },
        { name: "Gel-X Refill",                 price: 50, from: true, desc: "Maintenance for eligible existing Gel-X enhancements." },
        { name: "Dipping Overlay",              price: 55, from: true, desc: "A strengthening overlay using dipping powder over the natural nail." },
        { name: "Toe Nail Extension + Pedi",    price: 90, desc: "Pedicure paired with toenail extension work where additional length or reconstruction is needed." },
        { name: "Shellac Change on Fake Nails", price: 35, desc: "Colour change with shellac gel polish on existing artificial nails." },
        { name: "French / Cat-eye / Chrome",    price: 15, upgrade: true, label: "$15 / $20", desc: "Specialty finish upgrades. The price depends on the finish you choose." },
        { name: "Ombre",                        price: 20, upgrade: true, desc: "A gradient colour effect that transitions smoothly between shades." }
      ] },
    { id: "add-ons", name: "Extras",
      blurb: "Removals, polish changes, shaping and finishing touches.",
      items: [
        { name: "Design",                       price: 10, from: true, desc: "Custom nail art. The final cost depends on the detail." },
        { name: "Fake Nail Removal",            price: 20, desc: "Removal of existing artificial nail enhancements." },
        { name: "Shellac Removal",              price: 10, desc: "Removal of existing shellac gel polish." },
        { name: "Manicure Add On",              price: 10, desc: "Add manicure care to an eligible nail service." },
        { name: "Cutting & Shaping",            price: 15, from: true, desc: "Reshaping and length adjustment of the nails." },
        { name: "Regular Polish Change",        price: 22, desc: "Refresh existing colour with regular polish." },
        { name: "Shellac Change on Real Nails", price: 30, desc: "Gel-polish colour change on natural nails." },
        { name: "French on Real Nails",         price: 8,  desc: "French-tip finish on natural nails." }
      ] },
    { id: "waxing", name: "Waxing",
      blurb: "Brow, face and body waxing, plus eyebrow tinting.",
      items: [
        { name: "Eyebrows",                   price: 15 },
        { name: "Lips",                       price: 8 },
        { name: "Sideburn",                   price: 10 },
        { name: "Chin",                       price: 10 },
        { name: "Eyebrows, Lips & Chin",      price: 30 },
        { name: "Full Face",                  price: 35 },
        { name: "Under Arm",                  price: 15 },
        { name: "Half Arm / Full Arm",        price: 25, label: "$25 / $35" },
        { name: "Half Leg / Full Leg",        price: 30, label: "$30 / $50" },
        { name: "Bikini",                     price: 30 },
        { name: "Brazilian",                  price: 45 },
        { name: "Belly / Back / Chest",       price: 15, label: "$15 / $40 / $35+" },
        { name: "Eyebrow Tinting",            price: 15 },
        { name: "Eyebrow Tinting & Shaping",  price: 30 }
      ] },
    { id: "spa", name: "Spa",
      blurb: "Focused facial appointments.",
      items: [
        { name: "Mini Facial (30 mins)",     price: 50, desc: "A shorter facial for a focused skin-care appointment." },
        { name: "Deep Cleansing (60 mins)",  price: 80, desc: "A longer facial centred on deeper cleansing and skin care." }
      ] },
    { id: "kids", name: "Kids Under 10",
      blurb: "Gentle nail services for children under 10.",
      items: [
        { name: "Regular / Shellac Manicure", price: 20, label: "$20 / $30" },
        { name: "Regular / Shellac Pedicure", price: 30, label: "$30 / $40" },
        { name: "Regular Mani & Pedi",        price: 45 },
        { name: "Shellac Mani & Pedi",        price: 70 },
        { name: "Polish Change",              price: 12 }
      ] }
  ],

  // [name, colour, finish, family]. The homepage shows the first 12.
  shadeFamilies: ["Nudes", "Pinks", "Reds", "Browns", "Purples", "Blues & greens", "Metallics", "Darks"],
  shades: [
    ["Bare Silk", "#E9CDBE", "Cream", "Nudes"], ["Oatmeal", "#D8C0A5", "Cream", "Nudes"], ["Rosewater", "#EDBFC2", "Sheer", "Pinks"],
    ["Petal Hour", "#D98A9A", "Cream", "Pinks"], ["Berry Velvet", "#8E2344", "Cream", "Reds"], ["Persimmon", "#D2563F", "Gloss", "Reds"],
    ["Cinnamon Tea", "#8A4B32", "Cream", "Browns"], ["Sage Leaf", "#9AAA8C", "Cat-eye", "Blues & greens"], ["Lagoon", "#2F6F73", "Shimmer", "Blues & greens"],
    ["Night Orchid", "#4B2B4F", "Shimmer", "Purples"], ["Gilded", "#C9A96A", "Chrome", "Metallics"], ["Ink", "#1F1B24", "Cream", "Darks"],
    ["Linen Veil", "#E6D3C3", "Sheer", "Nudes"], ["Toasted Almond", "#C9A587", "Cream", "Nudes"], ["Ballet Slip", "#F2CFD3", "Sheer", "Pinks"],
    ["Peony Blush", "#E79AB0", "Cream", "Pinks"], ["Cherry Lacquer", "#A3152B", "Gloss", "Reds"], ["Coral Reef", "#EE7B62", "Cream", "Reds"],
    ["Mocha Latte", "#8C6A56", "Cream", "Browns"], ["Espresso Bean", "#4A2E25", "Cream", "Browns"], ["Lilac Hour", "#B9A2D0", "Cream", "Purples"],
    ["Plum Wine", "#5E2A4A", "Shimmer", "Purples"], ["Harbour Navy", "#1F2A44", "Cream", "Blues & greens"], ["Olive Grove", "#6B6B3A", "Cream", "Blues & greens"],
    ["Silver Screen", "#C8C9CE", "Chrome", "Metallics"], ["Rose Gold", "#D4A08F", "Chrome", "Metallics"], ["Smoke", "#3B3A3F", "Cat-eye", "Darks"]
  ]
};

/* Helpers shared by every page */
SALON.formatPrice = function (it) { return it.label || "$" + it.price + (it.from ? "+" : ""); };
SALON.lowestPrice = function (cat) {
  var items = cat.items.filter(function (it) { return !it.upgrade; });
  return Math.min.apply(null, (items.length ? items : cat.items).map(function (it) { return it.price; }));
};
