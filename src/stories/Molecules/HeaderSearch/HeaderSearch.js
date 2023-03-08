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
  // Toggle the search form.
  const searchIcons = document.querySelectorAll('.header-search__search-toggle');

  searchIcons.forEach(icon => {
    if (!icon.classList.contains('js-active')) {
      icon.classList.add('js-active');

      icon.addEventListener('pointerdown', (e) => {
        const actives = document.querySelectorAll('.header-search .search-icon.active');

        actives.forEach(active => {
          if (active && active != e.target) {
            alert('oops');
            active.classList.remove('active');
          }
        });

        icon.classList.toggle('active');
      });
    }
  });
});
