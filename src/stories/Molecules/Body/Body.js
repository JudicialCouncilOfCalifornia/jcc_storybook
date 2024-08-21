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
    let aside = body.querySelector('.body__aside');

    if (aside) {
      let main = body.querySelector('.body__main');
      let mainHeading = main.querySelector('.body__heading');
      let lead = main.querySelector('.body__lead');
      let mainContent = main.querySelector('.body__content')

      if ('ResizeObserver' in window) {
        new ResizeObserver(entries => {
          if (aside.offsetLeft !== 18 || main.offsetLeft > 18) {
            // Align aside with main content block.
            let mainHeadingHeight = mainHeading.scrollHeight;
            let leadHeight = lead.scrollHeight;
            let leadBlockMargin = parseInt(window.getComputedStyle(lead).marginBlock, 10);

            asideTopSpacing = mainHeadingHeight + leadHeight + leadBlockMargin + leadBlockMargin + 'px';
            aside.style.marginTop = asideTopSpacing;
            mainContent.classList.add('divider');
            body.classList.remove('mobile');
          }
          else {
            // Reposition aside & adjust styling for mobile stacking.
            body.classList.add('mobile');
            aside.style.removeProperty('margin-top');
            mainContent.classList.remove('divider');
          }
        }).observe(body);
      }
    }
  });
});
