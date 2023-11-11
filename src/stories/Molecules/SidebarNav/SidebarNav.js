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

  // Helper function to get the Visible pixel height of an element.
  function getVisibleHeight(element, pixel = true) {
    // Gather our starting variables for some awesome maths.
    const viewport = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + window.innerHeight
    };    
    const elementBoundingRect = element.getBoundingClientRect();
    const elementPos = {
      top: elementBoundingRect.y + window.pageYOffset,
      bottom: elementBoundingRect.y + elementBoundingRect.height + window.pageYOffset
    };

    // Element is not visible at all.
    if (viewport.top > elementPos.bottom || viewport.bottom < elementPos.top) {
      return 0;
    }

    // Element is fully within viewport
    if (viewport.top < elementPos.top && viewport.bottom > elementPos.bottom) {
      return pixel ? element.clientHeight : "100";
    }
    // Element is bigger than the viewport
    if (elementPos.top < viewport.top && elementPos.bottom > viewport.bottom) {
      return pixel ? element.clientHeight : "100";
    }

    // determine how much is viible here.
    const elementHeight = elementBoundingRect.height;
    let elementHeightInView = elementHeight;
    if (elementPos.top < viewport.top) {
      elementHeightInView = elementHeight - (window.pageYOffset - elementPos.top);
    }
    if (elementPos.bottom > viewport.bottom) {
      elementHeightInView = elementHeightInView - (elementPos.bottom - viewport.bottom);
    }

    // If not pixel, return as a percentage.
    if (!pixel) {
      const percentageInView = (elementHeightInView / window.innerHeight) * 100;
      return Math.round(percentageInView);
    }

    // return as a numerical pixel value by default.
    return Math.round(elementHeightInView);
  }

  // Set the max height of the sidebar nav, to fit within any available space.
  // This only renders on desktop (non-mobile) display, on load, scroll and 
  // resize events.
  let footer = document.querySelectorAll('.footer');
  let shoe = document.querySelectorAll('.shoe');

  if (footer[0] || shoe[0]) {
    ['load', 'scroll', 'resize'].forEach( event => 
      window.addEventListener(event, () => {

        // Get the total footer visible in pixels. This includes footer and shoe.
        let shoeHeight = shoe[0] ? getVisibleHeight(shoe[0]) : 0;
        let footerHeight = footer[0] ? getVisibleHeight(footer[0]) : 0;
        let total_footer_height = footerHeight + shoeHeight;

        const navs = Array.from(document.querySelectorAll('body:not(.mobile-sidebar-nav) .sidebar-nav'));
        navs.forEach(nav => {
          let sidebar_nav_position = nav.getElementsByClassName('sidebar-nav__position')
          if (sidebar_nav_position.length > 0) {
            // Remove previously applied styles.
            sidebar_nav_position[0].style.removeProperty("max-height");
            sidebar_nav_position[0].style.removeProperty("overflow");
            // We only adjust the sidebar height if the footer becomes visible.
            if (total_footer_height > 0) {
              // if the footer becomes visible, we add 40 pixels for spacing.
              total_footer_height = total_footer_height > 0 ? total_footer_height + 40 : total_footer_height;
              // Factor the max-height based on window height, minus the footer
              // height, minus any visible space on the top of the sidebar nav.
              let sidebar_nav_height = window.innerHeight - total_footer_height - nav.getBoundingClientRect().top;
              sidebar_nav_position[0].style.maxHeight = sidebar_nav_height + 'px';
              sidebar_nav_position[0].style.overflow = "auto";
            }
          }
        });
      })
    );
  };
})

