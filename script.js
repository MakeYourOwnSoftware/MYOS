(function () {
  var grid = document.getElementById("gallery-grid");
  var list = window.PROJECTS || [];

  function esc(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var cards = list.map(function (p) {
    var thumb = p.image
      ? '<img src="' + esc(p.image) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" />'
      : '<span class="mark">' + esc(p.mark || p.title.charAt(0)) + "</span>";
    var tags = (p.tags || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    return (
      '<a class="card" href="' + esc(p.url) + '" target="_blank" rel="noopener" style="--c:' + esc(p.color || "#2b3a67") + '">' +
        '<div class="card-thumb">' + thumb + (p.grades ? '<span class="grade">' + esc(p.grades) + "</span>" : "") + "</div>" +
        '<div class="card-body">' +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="tagline">' + esc(p.tagline) + "</p>" +
          "<p>" + esc(p.desc) + "</p>" +
          '<ul class="tags">' + tags + "</ul>" +
          '<span class="try">Try it &rarr;</span>' +
        "</div>" +
      "</a>"
    );
  });

  cards.push(
    '<a class="card card-next" href="#request">' +
      '<div class="card-next-inner">' +
        '<span class="plus">+</span>' +
        "<h3>Your tool here</h3>" +
        "<p>Have an idea for your classroom? Tell me about it.</p>" +
      "</div>" +
    "</a>"
  );

  grid.innerHTML = cards.join("");
  document.getElementById("year").textContent = new Date().getFullYear();

  // Gentle fade-in on scroll
  if ("IntersectionObserver" in window) {
    var els = document.querySelectorAll(".card, .step, .about, .request");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
