/* Gallery page: filter photos by style. */
(function () {
  var buttons = document.querySelectorAll("[data-filter]");
  var shots = document.querySelectorAll("#gallery figure");
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var f = b.dataset.filter;
      buttons.forEach(function (x) { var on = x === b; x.classList.toggle("active", on); x.setAttribute("aria-pressed", String(on)); });
      shots.forEach(function (s) { s.hidden = f !== "all" && s.dataset.tags.split(" ").indexOf(f) < 0; });
    });
  });
})();
