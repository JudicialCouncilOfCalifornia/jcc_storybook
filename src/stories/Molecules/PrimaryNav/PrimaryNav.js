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
  const buttons = Array.from(document.querySelectorAll('.primary-nav__button'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');

      button.addEventListener('pointerdown', (e) => {
        // const sibling = e.target.nextElementSibling;
        const opened = document.querySelector('.open:not(.primary-nav__hamburger-toggle)');

        if (opened && opened != e.target) {
          opened.classList.remove('open');
        }

        e.target.classList.toggle('open');
      });
    }
  });

  // Toggle the hamburger menu.
  const burgers = Array.from(document.querySelectorAll('.primary-nav__hamburger-toggle'));

  burgers.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');

      button.addEventListener('pointerdown', (e) => {
        // const sibling = e.target.nextElementSibling;
        const opened = document.querySelector('.open');

        if (opened && opened != e.target) {
          opened.classList.remove('open');
        }

        button.classList.toggle('open');
      });
    }
  });
});
