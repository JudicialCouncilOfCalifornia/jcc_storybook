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
  const setExpandedState = (control, expanded) => {
    if (!control) {
      return;
    }

    control.setAttribute('aria-expanded', expanded ? 'true' : 'false');

    const controlledId = control.getAttribute('aria-controls');
    if (!controlledId) {
      return;
    }

    const submenu = document.getElementById(controlledId);
    if (submenu) {
      submenu.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    }
  };

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
    const openGroups = Array.from(document.querySelectorAll('.primary-nav__desktop .primary-nav__group.submenu-open'));
    openGroups.forEach((group) => {
      if (exceptGroup && group === exceptGroup) {
        return;
      }
      const control = group.querySelector('.primary-nav__button[aria-controls]');
      closeDesktopSubmenu(group, control);
    });
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
          submenu.setAttribute('style', 'right: ' + (menuRightPosition - updatedSubmenuRightPosition) + 'px');
        }
      }
    }
  });

  const desktopGroups = Array.from(document.querySelectorAll('.primary-nav__desktop .primary-nav__group'));
  desktopGroups.forEach((group) => {
    const control = group.querySelector('.primary-nav__button[aria-controls]');
    if (!control) {
      return;
    }

    setExpandedState(control, false);

    // Keep mouse interaction behavior for pointer users.
    group.addEventListener('mouseenter', () => {
      closeAllDesktopSubmenus(group);
      openDesktopSubmenu(group, control);
    });

    group.addEventListener('mouseleave', () => {
      closeDesktopSubmenu(group, control);
    });

    // Keyboard/pointer intentional trigger only.
    control.addEventListener('click', (e) => {
      e.preventDefault();
      const willOpen = !group.classList.contains('submenu-open');
      closeAllDesktopSubmenus(group);
      if (willOpen) {
        openDesktopSubmenu(group, control);
      } else {
        closeDesktopSubmenu(group, control);
      }
    });

    control.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const willOpen = !group.classList.contains('submenu-open');
        closeAllDesktopSubmenus(group);
        if (willOpen) {
          openDesktopSubmenu(group, control);
        } else {
          closeDesktopSubmenu(group, control);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeDesktopSubmenu(group, control);
        control.focus();
      }
    });

    const submenuId = control.getAttribute('aria-controls');
    const submenu = submenuId ? document.getElementById(submenuId) : null;
    if (submenu) {
      submenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeDesktopSubmenu(group, control);
          control.focus();
        }
      });
    }
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

  // Mobile submenu toggle and Esc close.
  const buttons = Array.from(document.querySelectorAll('.primary-nav__mobile button.primary-nav__mobile__button[aria-controls]'));
  buttons.forEach((button) => {
    if (button.classList.contains('js-open')) {
      return;
    }

    button.classList.add('js-open');
    setExpandedState(button, button.classList.contains('open'));

    const closeMobile = () => {
      button.classList.remove('open');
      setExpandedState(button, false);
    };

    button.addEventListener('pointerdown', (e) => {
      const opened = document.querySelectorAll('.primary-nav__mobile .primary-nav__mobile__button.open');

      opened.forEach((item) => {
        if (item && item !== e.currentTarget) {
          item.classList.remove('open');
          setExpandedState(item, false);
        }
      });

      const expanded = !e.currentTarget.classList.contains('open');
      e.currentTarget.classList.toggle('open');
      setExpandedState(e.currentTarget, expanded);
    });

    button.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMobile();
        button.focus();
      }
    });

    const submenuId = button.getAttribute('aria-controls');
    const submenu = submenuId ? document.getElementById(submenuId) : null;
    if (submenu) {
      submenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeMobile();
          button.focus();
        }
      });
    }
  });
});
