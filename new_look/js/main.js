(function () {
  'use strict'

  /* -------------------------------------------------------
     Desktop nav — highlight active page
     ------------------------------------------------------- */
  function initActiveNav() {
    const path = location.pathname.split('/').pop() || 'index.html'
    document.querySelectorAll('.desktop-nav a').forEach(function (link) {
      const href = link.getAttribute('href')
      if (href && path === href.split('/').pop()) {
        link.classList.add('active')
      }
    })
  }

  /* -------------------------------------------------------
     Off-canvas menu — hamburger trigger
     ------------------------------------------------------- */
  function initOffcanvas() {
    const hamburger = document.querySelector('.hamburger-btn')
    const overlay = document.querySelector('.offcanvas')
    const closeBtn = document.querySelector('.offcanvas-close')

    if (!hamburger || !overlay) return

    function open() {
      overlay.classList.add('is-open')
      hamburger.classList.add('is-open')
      hamburger.setAttribute('aria-label', 'Close menu')
      document.body.classList.add('menu-open')
    }

    function close() {
      overlay.classList.remove('is-open')
      hamburger.classList.remove('is-open')
      hamburger.setAttribute('aria-label', 'Open menu')
      document.body.classList.remove('menu-open')
    }

    hamburger.addEventListener('click', function () {
      if (overlay.classList.contains('is-open')) {
        close()
      } else {
        open()
      }
    })
    if (closeBtn) closeBtn.addEventListener('click', close)

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close()
    })

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        close()
      }
    })

    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', close)
    })
  }

  /* -------------------------------------------------------
     Back to top FAB
     ------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top')
    if (!btn) return

    function toggle() {
      if (window.scrollY > 300) {
        btn.classList.add('is-visible')
      } else {
        btn.classList.remove('is-visible')
      }
    }

    window.addEventListener('scroll', toggle, { passive: true })
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  /* -------------------------------------------------------
     Init all
     ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initActiveNav()
    initOffcanvas()
    initBackToTop()
  })
})()
