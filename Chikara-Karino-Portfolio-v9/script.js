(function () {
  var d = document, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  d.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  if (reduce || !('IntersectionObserver' in window)) return; // content stays fully visible
  d.documentElement.classList.add('js');

  function count(el) {
    var end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), pre = el.dataset.pre || '', suf = el.dataset.suf || '', t0 = null;
    (function step(t) {
      t0 = t0 || t; var k = Math.min((t - t0) / 1100, 1), e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + (end * e).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      if (k < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  var io = new IntersectionObserver(function (items) {
    items.forEach(function (i) {
      if (!i.isIntersecting) return;
      i.target.classList.add('in');
      i.target.querySelectorAll('[data-count]').forEach(count);
      io.unobserve(i.target);
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
  d.querySelectorAll('.reveal, .viz, .metric').forEach(function (el) { io.observe(el); });

  // subtle portrait drift while the hero is on screen
  var img = d.querySelector('.hero .portrait'), tick = false;
  if (img) addEventListener('scroll', function () {
    if (tick) return; tick = true;
    requestAnimationFrame(function () { img.style.setProperty('--p', Math.min(scrollY / 600, 1).toFixed(3)); tick = false; });
  }, { passive: true });

  // highlight current case study in the sticky sub-nav
  var links = d.querySelectorAll('.subnav a'), cases = d.querySelectorAll('.case');
  if (links.length) {
    var so = new IntersectionObserver(function (items) {
      items.forEach(function (i) {
        if (!i.isIntersecting) return;
        links.forEach(function (a) { a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + i.target.id); });
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    cases.forEach(function (c) { so.observe(c); });
  }
})();
