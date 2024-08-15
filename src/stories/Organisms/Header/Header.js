function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const header = document.querySelector('.header');
  const brand = document.querySelector('.site-branding');
  const hamburger = document.querySelector('.header .primary-nav__hamburger');
  const secondary_region = document.querySelector('.header__secondary');
  const secondary_nav = document.querySelector('.header__secondary-nav');

  if ('ResizeObserver' in window) {
    new ResizeObserver(entries => {
      // Element repositioning on smaller devices.
      if (secondary_nav) {
        console.log('secondary: ' + secondary_nav.offsetLeft);
        if (secondary_nav.offsetLeft <= 23) {
          // For site brand and secondary nav.
          secondary_region.classList.add('overflowing');
          // For hamburger.
          hamburger.classList.remove('secondary-adjust');
        } else {
          secondary_region.classList.remove('overflowing');
          hamburger.classList.add('secondary-adjust');
        }

        // Resets elements as needed for larger devices.
        if (brand.offsetLeft > 23) {
          // For site brand and secondary nav.
          secondary_region.classList.remove('overflowing');
        }
      }
    }).observe(header);
  }
});