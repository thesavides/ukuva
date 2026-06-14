/* Ukuva shared interactions */
(function () {
  'use strict';

  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {
    /* Header solidify on scroll */
    var header = document.querySelector('.site-header');
    if (header) {
      var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* Mobile nav */
    var burger = document.querySelector('.hamburger');
    var mnav = document.querySelector('.mobile-nav');
    if (burger && mnav) {
      var setOpen = function (open) {
        mnav.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        burger.setAttribute('aria-expanded', String(open));
      };
      burger.addEventListener('click', function () { setOpen(!mnav.classList.contains('open')); });
      var closeBtn = mnav.querySelector('.mobile-nav__close');
      if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
      mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    }

    /* Reveal on scroll */
    var reveals = document.querySelectorAll('[data-reveal]');
    if (reveals.length && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }

    /* FAQ accordion */
    document.querySelectorAll('.faq__item').forEach(function (item) {
      var q = item.querySelector('.faq__q');
      if (!q) return;
      q.addEventListener('click', function () {
        var open = item.classList.contains('open');
        item.classList.toggle('open', !open);
        q.setAttribute('aria-expanded', String(!open));
      });
    });

    /* Sticky sub-nav scrollspy (in-page anchors) */
    var subnav = document.querySelector('.sub-nav--top');
    if (subnav) {
      var links = [].slice.call(subnav.querySelectorAll('a[href^="#"]'));
      var map = links.map(function (l) {
        var t = document.querySelector(l.getAttribute('href'));
        return t ? { link: l, target: t } : null;
      }).filter(Boolean);
      if (map.length && 'IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              map.forEach(function (m) { m.link.classList.toggle('is-current', m.target === e.target); });
            }
          });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
        map.forEach(function (m) { spy.observe(m.target); });
      }
    }
  });
})();
