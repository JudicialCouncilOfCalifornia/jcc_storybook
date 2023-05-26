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

  // const sidebarnav = Array.from(document.querySelectorAll('.sidebar-nav'));
  // sidebarnav.forEach(nav => {
  //   document.body.classList.remove("has-sidebar-nav");
  //   if (!nav.classList.contains('js-sidebar-nav-class-applied')) {
  //     nav.classList.add('js-sidebar-nav-class-applied');

  //     document.body.classList.add("has-sidebar-nav");
  //   }
  // });

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
})





// /**
// * Nav tabs enhancement from seven theme.
// **/

// (function ($, Drupal) {
//   function init(i, tab) {
//     var $tab = $(tab);
//     var $target = $tab.find('[data-drupal-nav-tabs-target]');
//     var isCollapsible = $tab.hasClass('is-collapsible');

//     function openMenu(e) {
//       $target.toggleClass('is-open');
//     }

//     function handleResize(e) {
//       $tab.addClass('is-horizontal');
//       var $tabs = $tab.find('.tabs');
//       var isHorizontal = $tabs.outerHeight() <= $tabs.find('.tabs__tab').outerHeight();
//       $tab.toggleClass('is-horizontal', isHorizontal);
//       if (isCollapsible) {
//         $tab.toggleClass('is-collapse-enabled', !isHorizontal);
//       }
//       if (isHorizontal) {
//         $target.removeClass('is-open');
//       }
//     }

//     $tab.addClass('position-container is-horizontal-enabled');

//     $tab.on('click.tabs', '[data-drupal-nav-tabs-trigger]', openMenu);
//     $(window).on('resize.tabs', Drupal.debounce(handleResize, 150)).trigger('resize.tabs');
//   }

//   Drupal.behaviors.navTabs = {
//     attach: function attach(context, settings) {
//       var $tabs = $(context).find('[data-drupal-nav-tabs]');
//       if ($tabs.length) {
//         var notSmartPhone = window.matchMedia('(min-width: 300px)');
//         if (notSmartPhone.matches) {
//           $tabs.once('nav-tabs').each(init);
//         }
//       }
//     }
//   };
// })(jQuery, Drupal);
