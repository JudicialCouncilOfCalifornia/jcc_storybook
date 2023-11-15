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
  // Submenu position management on mouseover.
  addEventListener('mouseover', (event) => {
    // Adjust non-mega submenu position if no space on its right.
    let element = event.target;
    if (element.classList.contains('primary-nav__button')) {
      let submenu = element.nextElementSibling;

      if (submenu && !submenu.classList.contains('primary-nav__item--mega')) {
        // Always start with original position.
        submenu.removeAttribute('style');
        let submenuRightPosition = window.innerWidth - submenu.getBoundingClientRect().right;

        if (submenuRightPosition <= 20) {
          // If insufficient right spacing, right align.
          submenu.setAttribute('style', 'right: 0');
          // Adjust right alignment with target menu item.
          let menuRightPosition = window.innerWidth - element.getBoundingClientRect().right;
          let updatedSubmenuRightPosition = window.innerWidth - submenu.getBoundingClientRect().right;
          submenu.setAttribute('style','right: ' + (menuRightPosition - updatedSubmenuRightPosition) + 'px');
        }
      }
    }
  });

  // Toggle the sub menus.
  const buttons = Array.from(document.querySelectorAll('.primary-nav__mobile .primary-nav__button'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');

      button.addEventListener('pointerdown', (e) => {
        const opened = document.querySelectorAll('.primary-nav__mobile .primary-nav__button.open:not(.primary-nav__hamburger-toggle)');

        opened.forEach(item => {
          if (item && item != e.target) {
            item.classList.remove('open');
          }
        });

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
        const opened = document.querySelector('.open');

        if (opened && opened != e.target) {
          opened.classList.remove('open');
        }

        button.classList.toggle('open');
      });
    }
  });
});
