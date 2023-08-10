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

  // If reduced animation motion is preferred, set the speed to 0 (instant).
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animation_speed = mediaQuery.matches ? 0 : 200;

  const summaries = Array.from(document.querySelectorAll('details summary'));
  const expandallbtn = Array.from(document.querySelectorAll('.expand-all-btn'));

  // Expand / Close all button logic
  if (!expandallbtn[0].classList.contains('js-loaded')) {
    expandallbtn[0].classList.add('js-loaded');
    
    expandallbtn[0].addEventListener('click', (e) => {
      e.preventDefault();
      
      if (expandallbtn[0].hasAttribute('expanded')) {
        expandallbtn[0].removeAttribute('expanded');
        expandallbtn[0].setAttribute('aria-pressed', 'false');
        expandallbtn[0].innerHTML = 'Expand all';
        summaries.forEach(summary => {
          summary.closest('details').removeAttribute('open', '');
        })
      } else {
        expandallbtn[0].setAttribute('expanded', '');
        expandallbtn[0].setAttribute('aria-pressed', 'true');
        expandallbtn[0].innerHTML = 'Close all';
        summaries.forEach(summary => {
          summary.closest('details').setAttribute('open', '');
        })
      }
    });
  }

  summaries.forEach(summary => {
    // We only want to attach the click listener only to each details summary,
    // thats why we grab the summaries and then step back up to get the parent
    // detail. This way the click is not triggered by any content inside the
    // detail.

    if (!summary.classList.contains('js-accordion')) {
      summary.classList.add('js-accordion');
    
      summary.addEventListener('click', (e) => {
        // Override the default open/close behavior. We are going to animate the
        // opening and closing of details items.
        e.preventDefault();
        if (summary.closest('details').hasAttribute('open')) {
          // If already open when clicked, apply to closing class to trigger the
          // fade out animation. Once it's done, trigger closing of the detail.
          summary.closest('details').classList.add('closing');
          setTimeout(() => {
            summary.closest('details').removeAttribute('open');
            summary.closest('details').classList.remove('closing');
          }, animation_speed)
          if (expandallbtn[0].hasAttribute('expanded')) {
            expandallbtn[0].removeAttribute('expanded');
            expandallbtn[0].innerHTML = 'Expand all';
          }
        } else {
          // If closed when clicked, open the detail. The delay helps improve the
          // fade in animation of the content.
          setTimeout(() => {
            summary.closest('details').setAttribute('open', '');
          }, animation_speed)
        }

        // Close any open details who werent clicked.
        // const details = Array.from(document.querySelectorAll('details'));
        // details.forEach(detail => {
        //   if (detail.hasAttribute('open')) {
        //     detail.classList.add('closing');
        //     setTimeout(() => {
        //       detail.removeAttribute('open');
        //       detail.classList.remove('closing');
        //     }, animation_speed)
        //   }
        // });

      });
    }
  });
});
