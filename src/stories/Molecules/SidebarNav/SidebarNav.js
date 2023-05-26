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
  // Apply class to body if sidebar nav is present.
  // This class can be used to adjust content components to allow space for
  // the floating sidebarnav.
  const sidebars = Array.from(document.querySelectorAll('.sidebar-nav .with-sidebar'));
  const toggleOverflowClass = elem => {
    // If main section (larger sidebar) is the same as the full sidebar
    // container, It means that the sidebars have stacked.
    let trigger = elem.contentRect.width == elem.target.lastElementChild.clientWidth;
    elem.target.classList.toggle('stacked-sidebars', trigger);
    // Apply class to body if sidebar navigation is stacked (mobile display).
    document.body.classList.toggle('mobile-sidebar-nav', trigger);
  };

  for (let sidebar of sidebars) {
    if (!sidebar.classList.contains('js-open')) {
      sidebar.classList.add('js-open');
      if ('ResizeObserver' in window) {
        new ResizeObserver(entries => {
          toggleOverflowClass(entries[0]);
        }).observe(sidebar);
      }
    };
  }

  // Toggle the sub menus.
  const buttons = Array.from(document.querySelectorAll('.sidebar-nav__button'));
  buttons.forEach(button => {
    if (!button.classList.contains('js-open')) {
      button.classList.add('js-open');
      button.addEventListener('pointerdown', (e) => {
        e.target.classList.toggle('open');
      });
    }
  });

  // Toggle the hamburger menu.
  const burgers = Array.from(document.querySelectorAll('.sidebar-nav__hamburger-toggle'));
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

  // Make sure the content area has enought height for the sidebar nav.
  const navs = Array.from(document.querySelectorAll('.sidebar-nav'));
  navs.forEach(nav => {
    let sidebar_nav_position = nav.getElementsByClassName('sidebar-nav__position')
    if (sidebar_nav_position.length > 0) {
      let sidebar_nav_height = sidebar_nav_position[0].clientHeight;
      if (sidebar_nav_height >= nav.parentNode.clientHeight) {
        nav.parentNode.style.minHeight = sidebar_nav_height + 'px';
      } else {
        nav.parentNode.style.removeProperty("minHeight");
      }
    }
  });

})
