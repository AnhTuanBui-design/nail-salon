/* Shared behaviour for every page: booking links, mobile menu, opening hours, footer year. */
(function () {
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  window.siteEl = el;

  /* Booking links: every element with data-book opens the booking page once SALON.bookingUrl is set */
  if (SALON.bookingUrl) {
    document.querySelectorAll("[data-book]").forEach(function (a) {
      a.href = SALON.bookingUrl; a.target = "_blank"; a.rel = "noopener";
    });
  }

  /* Mobile menu */
  var menuBtn = document.getElementById("menuBtn"), mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    var setOpen = function (open) {
      mobileNav.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "Close" : "Menu";
    };
    menuBtn.addEventListener("click", function () { setOpen(mobileNav.hidden); });
    mobileNav.addEventListener("click", function (e) { if (e.target.tagName === "A") setOpen(false); });
  }

  /* Header height, used by sticky bars below the header */
  var head = document.querySelector(".site-head");
  function setHeadH() { if (head) document.documentElement.style.setProperty("--head-h", head.offsetHeight + "px"); }
  setHeadH(); window.addEventListener("resize", setHeadH);

  /* Opening hours and "Open now", in the salon's time zone */
  function toMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function fmt(t) {
    var m = toMin(t), h = Math.floor(m / 60), mm = m % 60, ap = h >= 12 ? "pm" : "am";
    h = h % 12 || 12; return h + (mm ? ":" + String(mm).padStart(2, "0") : "") + " " + ap;
  }
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  try {
    var parts = new Intl.DateTimeFormat("en-US", { timeZone: SALON.timezone, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(now);
    var get = function (t) { var f = parts.find(function (x) { return x.type === t; }); return f ? f.value : null; };
    var wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    if (wd >= 0) { day = wd; mins = (+get("hour") % 24) * 60 + +get("minute"); }
  } catch (e) {}

  var tbody = document.querySelector("#hoursTable tbody");
  if (tbody) {
    [1, 2, 3, 4, 5, 6, 0].forEach(function (d) {
      var h = SALON.hours[d], tr = el("tr", d === day ? "today" : "");
      tr.append(el("td", null, h[0] + (d === day ? " (today)" : "")), el("td", null, h[1] ? fmt(h[1]) + " – " + fmt(h[2]) : "Closed"));
      tbody.appendChild(tr);
    });
  }

  var today = SALON.hours[day], text, cls;
  if (today[1] && mins >= toMin(today[1]) && mins < toMin(today[2])) {
    text = "Open now · until " + fmt(today[2]); cls = "is-open";
  } else {
    var next = null;
    if (today[1] && mins < toMin(today[1])) next = "today at " + fmt(today[1]);
    else for (var k = 1; k <= 7; k++) { var nd = SALON.hours[(day + k) % 7]; if (nd[1]) { next = (k === 1 ? "tomorrow" : nd[0]) + " at " + fmt(nd[1]); break; } }
    text = "Closed now" + (next ? " · opens " + next : ""); cls = "is-closed";
  }
  document.querySelectorAll("[data-status]").forEach(function (s) { s.textContent = text; s.classList.add(cls); });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
