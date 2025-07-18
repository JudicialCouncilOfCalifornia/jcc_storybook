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
  // Items per page javascript helper
  if (document.querySelectorAll('[name="items_per_page"]')[0]) {
    document.querySelectorAll('[name="items_per_page"]')[0].onchange = function(){
      if (document.forms[this.getAttribute('form')]) {
        document.forms[this.getAttribute('form')].submit();
      } else {
        console.log(this.getAttribute('form') + ' is missing.')
      }
    };
  }

  // Collapsible filters
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animation_speed = mediaQuery.matches ? 0 : 200;
  const fieldsets = Array.from(document.querySelectorAll('.views-exposed-form fieldset.collapsible legend'));

  fieldsets.forEach(fieldset => {
    // We only want to attach the click listener only to each details summary,
    // thats why we grab the summaries and then step back up to get the parent
    // detail. This way the click is not triggered by any content inside the
    // detail.

    if (!fieldset.classList.contains('js-accordion')) {
      fieldset.classList.add('js-accordion');

      fieldset.addEventListener('click', (e) => {
        // Override the default open/close behavior. We are going to animate the
        // opening and closing of details items.
        e.preventDefault();
        if (fieldset.closest('fieldset').hasAttribute('open')) {
          // If already open when clicked, apply to closing class to trigger the
          // fade out animation. Once it's done, trigger closing of the detail.
          fieldset.closest('fieldset').classList.add('closing');
          setTimeout(() => {
            fieldset.closest('fieldset').removeAttribute('open');
            fieldset.closest('fieldset').classList.remove('closing');
          }, animation_speed)
        } else {
          // If closed when clicked, open the detail. The delay helps improve the
          // fade in animation of the content.
          setTimeout(() => {
            fieldset.closest('fieldset').setAttribute('open', '');
          }, animation_speed)
        }
      });
    }
  });


});
