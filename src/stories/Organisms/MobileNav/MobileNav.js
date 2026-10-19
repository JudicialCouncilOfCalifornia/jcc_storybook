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
  const buttons = Array.from(document.querySelectorAll('.mobile-nav .button.mobile-nav__button'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');

      button.addEventListener('pointerdown', (e) => {
        // Only show/hide only with touch or left mouse button.
        let allowedInteraction = false;
        if (e.pointerType === 'touch' || e.button === 0) {
          allowedInteraction = true;
        }

        if (allowedInteraction) {
          if (e.target.classList.contains('open')) {
            e.target.classList.remove('open');
          }
          else {
            e.target.classList.add('open');
          }
        }
      });
    }
  });
});
