/* Homepage only: menu preview rows and the shade picker. */
(function () {
  var el = window.siteEl;

  /* Menu preview: one numbered row per category, tap to see its services */
  var list = document.getElementById("menuList"), rows = [];
  if (list) {
    SALON.menu.forEach(function (cat, i) {
      var row = el("div", "row");
      var btn = el("button", "row-btn"); btn.type = "button"; btn.setAttribute("aria-expanded", "false");
      var from = el("span", "from");
      from.appendChild(document.createTextNode("From $" + SALON.lowestPrice(cat)));
      from.appendChild(el("span", "arrow", "→"));
      btn.append(el("span", "num", String(i + 1).padStart(2, "0")), el("h3", null, cat.name), el("p", null, cat.blurb), from);
      var items = el("div", "items"); items.hidden = true; items.id = "cat-" + cat.id;
      btn.setAttribute("aria-controls", items.id);
      cat.items.forEach(function (it) {
        var r = el("div", "item");
        r.append(el("b", null, it.name), el("span", "dur", SALON.formatMinutes(it.min)), el("span", "price", SALON.formatPrice(it)));
        items.appendChild(r);
      });
      var more = el("a", "item more", "See full details on the services page →");
      more.href = "services.html#" + cat.id;
      items.appendChild(more);
      btn.addEventListener("click", function () { toggle(i); });
      row.append(btn, items);
      list.appendChild(row);
      rows.push({ row: row, btn: btn, items: items });
    });
    toggle(0, true);
  }
  function toggle(i, forceOpen) {
    var r = rows[i], open = forceOpen != null ? forceOpen : r.items.hidden;
    r.items.hidden = !open; r.row.classList.toggle("open", open); r.btn.setAttribute("aria-expanded", String(open));
  }

  /* Shade picker */
  var grid = document.getElementById("shadeGrid"), pickedText = document.getElementById("pickedText"), shadeBtns = [];
  if (grid) {
    SALON.shades.slice(0, 12).forEach(function (s) {
      var b = el("button", "shade"); b.type = "button"; b.setAttribute("aria-pressed", "false");
      var chip = el("span", "chip"); chip.style.setProperty("--c", s[1]);
      b.append(chip, el("b", null, s[0]), el("span", null, s[2]));
      b.addEventListener("click", function () {
        shadeBtns.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        pickedText.textContent = "";
        pickedText.append("Your shade: ", el("b", null, s[0]), " · " + s[2].toLowerCase() + " finish. Mention it in your booking notes.");
      });
      shadeBtns.push(b); grid.appendChild(b);
    });
  }
})();
