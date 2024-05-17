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
});
