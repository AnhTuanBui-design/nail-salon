/* Shared behaviour for every page: booking links, mobile menu, opening hours, footer year. */
(function () {
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  window.siteEl = el;

  var NS = "http://www.w3.org/2000/svg";
  function icon(paths, cls) {
    var s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
    if (cls) s.setAttribute("class", cls);
    paths.forEach(function (d) { var p = document.createElementNS(NS, "path"); p.setAttribute("d", d); s.appendChild(p); });
    return s;
  }
  var ICON_PHONE = ["M6.6 3.5h2.6l1.4 4-1.9 1.4a11 11 0 0 0 6.4 6.4l1.4-1.9 4 1.4v2.6a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z"];
  var ICON_MENU = ["M4 7h16", "M4 12h16", "M4 17h16"], ICON_CLOSE = ["M6 6l12 12", "M18 6L6 18"];
  var ICON_IG = ["M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z", "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M17.2 6.8h.01"];
  var ICON_FB = ["M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.5l.5-3.5h-3V8.5A.5.5 0 0 1 14 8z"];
  var tel = "tel:" + SALON.phone;

  /* Mobile menu: hamburger icon, full-screen panel with numbered links, Book / Call, address, hours and socials */
  var menuBtn = document.getElementById("menuBtn"), mobileNav = document.getElementById("mobileNav");
  var head = document.querySelector(".site-head");
  if (menuBtn && mobileNav) {
    var label = el("span", "sr-only", "Open menu");
    menuBtn.textContent = "";
    menuBtn.append(icon(ICON_MENU, "i-open"), icon(ICON_CLOSE, "i-close"), label);

    var inner = mobileNav.querySelector(".wrap");
    var links = el("div", "m-links");
    Array.prototype.slice.call(inner.querySelectorAll("a")).forEach(function (a) { links.appendChild(a); });
    var extra = el("div", "m-extra");
    var book = el("a", "btn btn-solid", "Book now"); book.href = "book.html"; book.setAttribute("data-book", "");
    var call = el("a", "btn btn-line m-call"); call.href = tel;
    call.append(icon(ICON_PHONE), document.createTextNode("Call " + SALON.phoneDisplay));
    var info = el("div", "m-info");
    info.append(el("p", null, SALON.address.join(", ")));
    var st = el("p", "status"); st.setAttribute("data-status", ""); info.appendChild(st);
    var social = el("div", "m-social");
    [[SALON.instagram, ICON_IG, "Instagram"], [SALON.facebook, ICON_FB, "Facebook"]].forEach(function (s) {
      if (!s[0]) return;
      var a = el("a"); a.href = s[0]; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", s[2]);
      a.appendChild(icon(s[1])); social.appendChild(a);
    });
    extra.append(book, call, info, social);
    inner.textContent = ""; inner.append(links, extra);

    var setOpen = function (open) {
      if (open) mobileNav.style.top = Math.max(0, head.getBoundingClientRect().bottom) + "px";
      mobileNav.hidden = !open;
      menuBtn.setAttribute("aria-expanded", String(open));
      label.textContent = open ? "Close menu" : "Open menu";
      document.body.classList.toggle("menu-open", open);
    };
    menuBtn.addEventListener("click", function () { setOpen(mobileNav.hidden); });
    mobileNav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !mobileNav.hidden) { setOpen(false); menuBtn.focus(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 1020 && !mobileNav.hidden) setOpen(false); });
  }

  /* Header height, used by sticky bars below the header */
  function setHeadH() { if (head) document.documentElement.style.setProperty("--head-h", head.offsetHeight + "px"); }
  setHeadH(); window.addEventListener("resize", setHeadH);

  /* Homepage: header sits see-through over the hero, then turns solid once you scroll */
  var hero = document.querySelector(".hero");
  if (head && hero) {
    document.body.classList.add("has-hero");
    var onScroll = function () { head.classList.toggle("solid", window.scrollY > 8); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile bottom bar: big Book now, small Call with an icon. Hidden over the footer and the Visit section, which have their own buttons. */
  var bar = document.querySelector(".action-bar");
  if (bar) {
    var barCall = bar.querySelector('a[href^="tel:"]');
    if (barCall) { barCall.href = tel; barCall.classList.add("bar-call"); barCall.textContent = ""; barCall.append(icon(ICON_PHONE), el("span", null, "Call")); barCall.setAttribute("aria-label", "Call " + SALON.phoneDisplay); }
    var targets = document.querySelectorAll("footer, #visit");
    if (targets.length && "IntersectionObserver" in window) {
      var seen = new Set();
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) seen.add(en.target); else seen.delete(en.target); });
        bar.classList.toggle("tucked", seen.size > 0);
      }, { rootMargin: "0px 0px -15% 0px" });
      targets.forEach(function (t) { io.observe(t); });
    }
  }

  /* Maps: any element with class "map" becomes a Google Map of SALON.mapQuery */
  if (SALON.mapQuery) {
    document.querySelectorAll(".map").forEach(function (m) {
      var f = document.createElement("iframe");
      f.src = "https://www.google.com/maps?output=embed&q=" + encodeURIComponent(SALON.mapQuery);
      f.title = "Map: " + SALON.mapQuery; f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
      m.textContent = ""; m.classList.add("live"); m.removeAttribute("aria-label"); m.appendChild(f);
    });
  }

  /* Booking links: every element with data-book opens the booking page once SALON.bookingUrl is set */
  if (SALON.bookingUrl) {
    document.querySelectorAll("[data-book]").forEach(function (a) {
      a.href = SALON.bookingUrl; a.target = "_blank"; a.rel = "noopener";
    });
  }

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
