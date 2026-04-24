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
  const desktopGroups = Array.from(document.querySelectorAll('.primary-nav__desktop .primary-nav__group'));

  desktopGroups.forEach(group => {
    const trigger = group.querySelector('.primary-nav__button.parent_link, .primary-nav__button.button');
    const submenu = group.querySelector('.primary-nav__list');
    if (!trigger || !submenu) {
      return;
    }

    const setExpanded = (expanded) => {
      trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    setExpanded(false);

    group.addEventListener('mouseenter', () => setExpanded(true));
    group.addEventListener('mouseleave', () => setExpanded(false));
    group.addEventListener('focusin', () => setExpanded(true));
    group.addEventListener('focusout', () => {
      setTimeout(() => {
        if (!group.contains(document.activeElement)) {
          setExpanded(false);
        }
      }, 0);
    });
  });

  // Submenu position management on mouseover.
  addEventListener('mouseover', (event) => {
    // Adjust non-mega submenu position if no space on its right.
    let element = event.target;
    if (element.classList.contains('primary-nav__mobile__button')) {
      let submenu = element.nextElementSibling;

      if (submenu && !submenu.classList.contains('primary-nav__mobile__item--mega')) {
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
  const buttons = Array.from(document.querySelectorAll('.primary-nav__mobile .primary-nav__mobile__button'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');

      const submenu = button.nextElementSibling;
      if (submenu && submenu.classList.contains('primary-nav__mobile__list')) {
        submenu.hidden = true;
      }

      button.addEventListener('pointerdown', (e) => {
        const opened = document.querySelectorAll('.primary-nav__mobile .primary-nav__mobile__button.open');

        opened.forEach(item => {
          if (item && item !== e.currentTarget) {
            item.classList.remove('open');
            item.setAttribute('aria-expanded', 'false');
            const openedSubmenu = item.nextElementSibling;
            if (openedSubmenu && openedSubmenu.classList.contains('primary-nav__mobile__list')) {
              openedSubmenu.hidden = true;
            }
          }
        });

        const currentButton = e.currentTarget;
        currentButton.classList.toggle('open');

        const isOpen = currentButton.classList.contains('open');
        currentButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (submenu && submenu.classList.contains('primary-nav__mobile__list')) {
          submenu.hidden = !isOpen;
        }
      });
    }
  });
});
