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

  // Toggle the sub menus.
  const buttons = Array.from(document.querySelectorAll('.mobile-nav .mobile-nav__button'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');

      button.addEventListener('pointerdown', (e) => {
        const opened = document.querySelectorAll('.mobile-nav .mobile-nav__button.open');

        opened.forEach(item => {
          if (item && item != e.target) {
            item.classList.remove('open');
          }
        });

        e.target.classList.toggle('open');
      });
    }
  });
});
