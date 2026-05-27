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
  const searchIcons = document.querySelectorAll('.header-search__search-toggle, .search-toggle');

  const toggleSearchIcon = (icon, triggerTarget = null) => {
    const actives = document.querySelectorAll('.header-search .search-icon.active, .header-search .header-search__search-toggle.active, .header-search .search-toggle.active');

    actives.forEach(active => {
      if (active && active !== triggerTarget && active !== icon) {
        active.classList.remove('active');
      }
    });

    icon.classList.toggle('active');
  };

  searchIcons.forEach(icon => {
    if (!icon.classList.contains('js-active')) {
      icon.classList.add('js-active');

      icon.addEventListener('pointerdown', (e) => {
        toggleSearchIcon(icon, e.target);
      });

      icon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();

          // search-toggle is a label+checkbox pattern, so manually mirror
          // native activation for Enter.
          const checkbox = icon.querySelector('input[type="checkbox"]');
          if (checkbox) {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
          }

          toggleSearchIcon(icon, e.target);
        }
      });
    }
  });
});
