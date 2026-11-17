/* Services page: full menu from salon-data.js and the sticky category jump bar. */
(function () {
  var el = window.siteEl;
  var catList = document.getElementById("catList"), jump = document.getElementById("jump");
  var jumpLinks = [];

  /* Render every category */
  SALON.menu.forEach(function (cat, ci) {
    var a = el("a", null, cat.name); a.href = "#" + cat.id; jump.appendChild(a); jumpLinks.push(a);

    var sec = el("section", "cat"); sec.id = cat.id; sec.setAttribute("aria-labelledby", cat.id + "-h");
    var intro = el("div", "cat-intro");
    var h = el("h2", null, cat.name); h.id = cat.id + "-h";
    intro.append(el("span", "num", String(ci + 1).padStart(2, "0")), h, el("p", null, cat.blurb));
    if (cat.note) intro.appendChild(el("p", "note", cat.note));

    var svcs = el("div", "svcs");
    cat.items.forEach(function (it) {
      var row = el("div", "svc" + (it.desc ? "" : " short"));
      var line = el("div", "line");
      line.append(el("h3", null, it.name), el("span", "dots"), el("span", "price", SALON.formatPrice(it)));
      row.appendChild(line);
      if (it.desc) row.appendChild(el("p", null, it.desc));
      svcs.appendChild(row);
    });
    sec.append(intro, svcs);
    catList.appendChild(sec);
  });

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
