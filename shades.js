/* Shade picker page: every shade from salon-data.js, grouped by colour family. */
(function () {
  var el = window.siteEl;
  var wrap = document.getElementById("shadeFamilies");
  if (!wrap) return;
  var pvChip = document.getElementById("pvChip"), pvName = document.getElementById("pvName"), pvMeta = document.getElementById("pvMeta");
  var all = [], sections = [];

  function select(s, btn) {
    all.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
    pvChip.style.setProperty("--c", s[1]);
    pvName.textContent = s[0];
    pvMeta.textContent = s[2] + " finish · " + s[3];
  }

  SALON.shadeFamilies.forEach(function (fam) {
    var list = SALON.shades.filter(function (s) { return s[3] === fam; });
    if (!list.length) return;
    var sec = el("section", "shade-family"); sec.dataset.family = fam;
    var h = el("div", "fam-head");
    h.append(el("h2", null, fam), el("span", "tag-pill", list.length + (list.length === 1 ? " shade" : " shades")));
    var grid = el("div", "shades");
    list.forEach(function (s) {
      var b = el("button", "shade"); b.type = "button"; b.setAttribute("aria-pressed", "false");
      var chip = el("span", "chip"); chip.style.setProperty("--c", s[1]);
      b.append(chip, el("b", null, s[0]), el("span", null, s[2]));
      b.addEventListener("click", function () { select(s, b); });
      all.push(b); grid.appendChild(b);
      if (s[0] === "Petal Hour") select(s, b);
    });
    sec.append(h, grid);
    wrap.appendChild(sec);
    sections.push(sec);
  });

  var chips = document.querySelectorAll("[data-family]");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var f = c.dataset.family;
      chips.forEach(function (x) { var on = x === c; x.classList.toggle("active", on); x.setAttribute("aria-pressed", String(on)); });
      sections.forEach(function (s) { s.hidden = f !== "all" && s.dataset.family !== f; });
    });
  });
})();
