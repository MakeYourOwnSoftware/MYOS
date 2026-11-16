(function () {
  var PAGE = 6; // cards shown before "Show more"
  var all = (window.PROJECTS || []).slice();
  var state = { cat: "All", q: "", expanded: false };

  function esc(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function thumb(p) {
    return p.image
      ? '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" />'
      : '<span class="mark">' + esc(p.mark || p.title.charAt(0)) + "</span>";
  }

  /* ---------- Featured ---------- */
  var feat = document.getElementById("featured-grid");
  if (feat) {
    feat.innerHTML = (window.FEATURED || []).map(function (p) {
      var pts = (p.points || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
      return (
        '<a class="feature" href="' + esc(p.url) + '" target="_blank" rel="noopener" style="--c:' + esc(p.color) + '">' +
          '<div class="feature-thumb">' + thumb(p) + '<span class="grade">' + esc(p.grades) + "</span></div>" +
          '<div class="feature-body">' +
            '<p class="feature-tag">' + esc(p.tagline) + "</p>" +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.desc) + "</p>" +
            '<ul class="checks">' + pts + "</ul>" +
            '<span class="btn feature-btn">Visit site &rarr;</span>' +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  /* ---------- Gallery filters ---------- */
  var cats = ["All"];
  all.forEach(function (p) { if (p.category && cats.indexOf(p.category) < 0) cats.push(p.category); });
  var chipBox = document.getElementById("chips");
  chipBox.innerHTML = cats.map(function (c) {
    var n = c === "All" ? all.length : all.filter(function (p) { return p.category === c; }).length;
    return '<button type="button" class="chip' + (c === "All" ? " on" : "") + '" data-cat="' + esc(c) + '">' + esc(c) + ' <span>' + n + "</span></button>";
  }).join("");
  chipBox.addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    state.cat = b.getAttribute("data-cat"); state.expanded = false;
    chipBox.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("on", x === b); });
    render();
  });
  document.getElementById("search").addEventListener("input", function (e) {
    state.q = e.target.value.trim().toLowerCase(); state.expanded = false; render();
  });
  document.getElementById("more").addEventListener("click", function () {
    state.expanded = !state.expanded; render();
  });

  /* ---------- Gallery render ---------- */
  var grid = document.getElementById("gallery-grid");
  var moreBtn = document.getElementById("more");
  var empty = document.getElementById("empty");

  function card(p) {
    var tags = (p.tags || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    return (
      '<a class="card in" href="' + esc(p.url) + '" target="_blank" rel="noopener" style="--c:' + esc(p.color || "#2b3a67") + '">' +
        '<div class="card-thumb">' + thumb(p) +
          (p.grades ? '<span class="grade">' + esc(p.grades) + "</span>" : "") +
          (p.category ? '<span class="cat">' + esc(p.category) + "</span>" : "") +
        "</div>" +
        '<div class="card-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="tagline">' + esc(p.tagline) + "</p>" +
          "<p>" + esc(p.desc) + "</p>" +
          '<ul class="tags">' + tags + "</ul>" +
          '<span class="try">Try it &rarr;</span>' +
        "</div>" +
      "</a>"
    );
  }
  var nextCard =
    '<a class="card card-next in" href="#request"><div class="card-next-inner">' +
    '<span class="plus">+</span><h3>Your tool here</h3>' +
    "<p>Have an idea for your classroom? Tell me about it.</p></div></a>";

  function render() {
    var list = all.filter(function (p) {
      if (state.cat !== "All" && p.category !== state.cat) return false;
      if (!state.q) return true;
      var hay = [p.title, p.tagline, p.desc, p.grades, p.category].concat(p.tags || []).join(" ").toLowerCase();
      return hay.indexOf(state.q) >= 0;
    });
    var shown = state.expanded ? list : list.slice(0, PAGE);
    grid.innerHTML = shown.map(card).join("") + (list.length && (state.expanded || list.length <= PAGE) ? nextCard : "");
    empty.hidden = list.length > 0;
    moreBtn.hidden = list.length <= PAGE;
    moreBtn.textContent = state.expanded ? "Show fewer" : "Show all " + list.length + " tools";
  }
  render();

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Gentle fade-in ---------- */
  if ("IntersectionObserver" in window) {
    var els = document.querySelectorAll(".step, .about, .request");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
