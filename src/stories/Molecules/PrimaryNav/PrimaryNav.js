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
  const closeDesktopSubmenu = (group, control) => {
    if (!group || !control) {
      return;
    }
    group.classList.remove('submenu-open');
    setExpandedState(control, false);
  };

  const openDesktopSubmenu = (group, control) => {
    if (!group || !control) {
      return;
    }
    group.classList.add('submenu-open');
    setExpandedState(control, true);
  };

  const closeAllDesktopSubmenus = (exceptGroup = null) => {
    const groups = Array.from(document.querySelectorAll('.primary-nav__desktop .primary-nav__group.submenu-open'));
    groups.forEach((group) => {
      if (exceptGroup && group === exceptGroup) {
        return;
      }
      const control = group.querySelector('.primary-nav__button[aria-controls]');
      closeDesktopSubmenu(group, control);
    });
  };

  const setExpandedState = (control, expanded) => {
    if (!control) {
      return;
    }

    control.setAttribute('aria-expanded', expanded ? 'true' : 'false');

    const controlledId = control.getAttribute('aria-controls');
    if (!controlledId) {
      return;
    }

  };

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

  const desktopGroups = Array.from(document.querySelectorAll('.primary-nav__desktop .primary-nav__group'));
  desktopGroups.forEach(group => {
    const control = group.querySelector('.primary-nav__button[aria-controls]');
    if (!control) {
      return;
    }

    setExpandedState(control, false);

    // Close any intentionally-opened submenu when mouse enters a different group,
    // so hover and explicit-open don't stack. CSS :hover handles visual display.
    group.addEventListener('mouseenter', () => {
      closeAllDesktopSubmenus(group);
    });

    control.addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !group.classList.contains('submenu-open');
      closeAllDesktopSubmenus(group);
      if (willOpen) {
        openDesktopSubmenu(group, control);
      }
      else {
        closeDesktopSubmenu(group, control);
      }
    });

    control.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') {
        return;
      }

      e.preventDefault();
      const willOpen = !group.classList.contains('submenu-open');
      closeAllDesktopSubmenus(group);
      if (willOpen) {
        openDesktopSubmenu(group, control);
      }
      else {
        closeDesktopSubmenu(group, control);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDesktopSubmenus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    if (!e.target.closest('.primary-nav__desktop')) {
      closeAllDesktopSubmenus();
    }
  });

  // Toggle the sub menus.
  const buttons = Array.from(document.querySelectorAll('.primary-nav__mobile button.primary-nav__mobile__button[aria-controls]'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');
      setExpandedState(button, button.classList.contains('open'));

      button.addEventListener('pointerdown', (e) => {
        const opened = document.querySelectorAll('.primary-nav__mobile .primary-nav__mobile__button.open');

        opened.forEach(item => {
          if (item && item !== e.currentTarget) {
            item.classList.remove('open');
            setExpandedState(item, false);
          }
        });

        const expanded = !e.currentTarget.classList.contains('open');
        e.currentTarget.classList.toggle('open');
        setExpandedState(e.currentTarget, expanded);
      });
    }
  });
});
