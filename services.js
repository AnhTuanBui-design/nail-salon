/* Services page: full menu from salon-data.js, category jump bar, and the "plan your visit" total. */
(function () {
  var el = window.siteEl;
  var catList = document.getElementById("catList"), jump = document.getElementById("jump");
  var STORE = "pnn-visit";
  var picked = load();
  var addButtons = {};
  var jumpLinks = [];

  function key(cat, i) { return cat.id + ":" + i; }
  function load() { try { return JSON.parse(localStorage.getItem(STORE) || "[]"); } catch (e) { return []; } }
  function save() { try { localStorage.setItem(STORE, JSON.stringify(picked)); } catch (e) {} }

  /* Render every category */
  SALON.menu.forEach(function (cat, ci) {
    var a = el("a", null, cat.name); a.href = "#" + cat.id; jump.appendChild(a); jumpLinks.push(a);

    var sec = el("section", "cat"); sec.id = cat.id; sec.setAttribute("aria-labelledby", cat.id + "-h");
    var intro = el("div", "cat-intro");
    var h = el("h2", null, cat.name); h.id = cat.id + "-h";
    intro.append(el("span", "num", String(ci + 1).padStart(2, "0")), h, el("p", null, cat.blurb), el("span", "low", "From $" + SALON.lowestPrice(cat)));

    var svcs = el("div", "svcs");
    cat.items.forEach(function (it, i) {
      var k = key(cat, i);
      var row = el("div", "svc");
      var meta = el("div", "meta");
      meta.append(el("span", "price", SALON.formatPrice(it)), el("span", "dur", SALON.formatMinutes(it.min)));
      var add = el("button", "add"); add.type = "button";
      add.setAttribute("aria-label", "Add " + it.name + " to your visit");
      add.addEventListener("click", function () { togglePick(k); });
      addButtons[k] = add;
      row.append(el("h3", null, it.name), meta, el("p", null, it.desc), add);
      svcs.appendChild(row);
    });
    sec.append(intro, svcs);
    catList.appendChild(sec);
  });

  /* Plan your visit */
  function find(k) {
    var p = k.split(":"), cat = SALON.menu.find(function (c) { return c.id === p[0]; });
    return cat ? cat.items[+p[1]] : null;
  }
  picked = picked.filter(find);

  function togglePick(k) {
    var i = picked.indexOf(k);
    if (i >= 0) picked.splice(i, 1); else picked.push(k);
    save(); update();
  }

  var bar = document.getElementById("visitBar");
  function update() {
    Object.keys(addButtons).forEach(function (k) {
      var on = picked.indexOf(k) >= 0, b = addButtons[k];
      b.setAttribute("aria-pressed", String(on));
      b.textContent = on ? "Added ✓" : "+ Add";
    });
    var items = picked.map(find);
    bar.hidden = items.length === 0;
    document.body.classList.toggle("has-visit", items.length > 0);
    if (!items.length) return;
    var mins = 0, price = 0, anyFrom = false;
    items.forEach(function (it) { mins += it.min; price += it.price; if (it.from) anyFrom = true; });
    document.getElementById("visitTotal").textContent =
      "Your visit: " + items.length + (items.length === 1 ? " service" : " services") +
      " · about " + SALON.formatMinutes(mins) + " · " + (anyFrom ? "from $" : "$") + price;
    document.getElementById("visitList").textContent = items.map(function (it) { return it.name; }).join(", ");
  }
  document.getElementById("visitClear").addEventListener("click", function () { picked = []; save(); update(); });
  update();

  /* Highlight the category in view */
  function onScroll() {
    var offset = (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--head-h"), 10) || 73) + 90;
    var current = 0;
    SALON.menu.forEach(function (cat, i) {
      var s = document.getElementById(cat.id);
      if (s && s.getBoundingClientRect().top - offset <= 0) current = i;
    });
    jumpLinks.forEach(function (a, i) {
      var on = i === current;
      if (on !== a.classList.contains("active")) {
        a.classList.toggle("active", on);
        if (on && a.scrollIntoView && jump.scrollWidth > jump.clientWidth) {
          jump.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
        }
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Arriving from a link like services.html#waxing: jump there after the menu is drawn */
  function goToHash() {
    var target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
  if (location.hash) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    goToHash();
    // Fonts and layout settle after load, so jump again once everything is in place
    window.addEventListener("load", function () { setTimeout(goToHash, 50); });
  }
})();
