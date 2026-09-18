(function () {
  try { localStorage.setItem('capexa-lang', document.documentElement.lang); } catch (e) {}
  function closeAll() { var d = document.querySelectorAll('[data-dialog]'); for (var i = 0; i < d.length; i++) d[i].hidden = true; document.body.style.overflow = ''; }
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (el) {
      var a = el.getAttribute('data-action');
      if (a === 'menu') { var m = document.querySelector('[data-menu]'); if (m) { m.hidden = !m.hidden; el.setAttribute('aria-expanded', String(!m.hidden)); } }
      else if (a === 'open') { var d = document.getElementById(el.getAttribute('data-target')); if (d) { d.hidden = false; document.body.style.overflow = 'hidden'; } }
      else if (a === 'close') { closeAll(); }
      else if (a === 'copy') { if (navigator.clipboard) navigator.clipboard.writeText(el.getAttribute('data-text')); var done = el.getAttribute('data-done'); if (done) el.textContent = done; }
      return;
    }
    var ov = e.target.closest('[data-overlay]');
    if (ov && e.target === ov) closeAll();
  });
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
})();
