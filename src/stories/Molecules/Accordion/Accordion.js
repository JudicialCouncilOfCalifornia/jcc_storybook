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
  const summaries = Array.from(document.querySelectorAll('details summary'));
  summaries.forEach(summary => {

    // We only want to attach the click listener only to each details summary,
    // thats why we grab the summaries and then step back up to get the parent
    // detail. This way the click is not triggered by any content inside the
    // detail.
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
        }, 200)
      } else {
        // If closed when clicked, open the detail. The delay helps improve the
        // fade in animation of the content.
        setTimeout(() => {
          summary.closest('details').setAttribute('open', '');
        }, 200)
      }
    });

  });
});
