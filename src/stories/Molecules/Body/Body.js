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
  const bodies = Array.from(document.querySelectorAll('.body'));

  // Aside positioning & theme.
  bodies.forEach(body => {
    let regionLeftPosition = 18;
    let parent = body.parentElement;
    // Adjust region left position if nested in a custom section.
    if (parent.classList.contains('section__main')) {
      regionLeftPosition = 22;
    }
    let aside = body.querySelector('.body__aside');

    if (aside) {
      let main = body.querySelector('.body__main');

      if ('ResizeObserver' in window) {
        new ResizeObserver(entries => {
          let mainHeading = main.querySelector('.body__heading');

          // Aside theme & responsive positioning support.
          if (aside.offsetLeft !== regionLeftPosition || main.offsetLeft !== regionLeftPosition) {
            // Align aside block with content block by matching the height for the main heading & lead.
            // Height is the combination of element and the element's bottom margin.
            if (mainHeading) {
              let mainHeadingHeight = 0;
              if (mainHeading) {
                let mainHeadingElemHeight = mainHeading.scrollHeight;
                let mainHeadingBlockMargin = parseInt(window.getComputedStyle(mainHeading).marginBlockEnd, 10);
                mainHeadingHeight = mainHeadingElemHeight + mainHeadingBlockMargin;
              }

              // Add top margin to aside.
              aside.style.marginTop = mainHeadingHeight + 'px';
            }
            main.classList.add('divider');
            body.classList.remove('mobile');
          }
          else {
            // Reposition aside & adjust styling when mobile stacking.
            body.classList.add('mobile');
            aside.style.removeProperty('margin-top');
            main.classList.remove('divider');
          }
        }).observe(body);
      }
    }
  });
});
