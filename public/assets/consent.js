/* Cookie consent + Google Consent Mode v2 (analytics only).
   Consent defaults to denied (set inline before gtag config). This script
   restores a stored choice, or shows a banner to ask for one. */
(function () {
  var KEY = 'ukuva-consent';

  function grant() {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  }

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}
  if (choice === 'granted') { grant(); return; }
  if (choice === 'denied') { return; }

  function build() {
    var bar = document.createElement('div');
    bar.className = 'consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie consent');
    bar.innerHTML =
      '<p class="consent__text">We use Google Analytics cookies to understand how the site is used. ' +
      'See our <a href="/privacy">Privacy Policy</a>.</p>' +
      '<div class="consent__actions">' +
      '<button type="button" class="btn btn--outline btn--sm" data-consent="denied">Decline</button>' +
      '<button type="button" class="btn btn--primary btn--sm" data-consent="granted">Accept</button>' +
      '</div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('is-in'); });
    bar.addEventListener('click', function (e) {
      var v = e.target && e.target.getAttribute && e.target.getAttribute('data-consent');
      if (!v) return;
      try { localStorage.setItem(KEY, v); } catch (e) {}
      if (v === 'granted') grant();
      bar.classList.remove('is-in');
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 320);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
