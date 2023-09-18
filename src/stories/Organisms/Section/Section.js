function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function adjustSubcomponents(subcomponents, type) {
  // Extend cards component styling - see Section.css.
  if (type == 'cards') {
    const rect = subcomponents[0].getBoundingClientRect();
    if (rect.left.toFixed() <= 23) {
      subcomponents[0].classList.remove("unwrapped");
    } else {
      subcomponents[0].classList.add("unwrapped");
    }
  }
}

docReady(function () {
  const cards = document.querySelectorAll(".cards");
  if (cards.length > 0) {
    adjustSubcomponents(cards, 'cards');
    window.onresize = function () {
      adjustSubcomponents(cards, 'cards');
    }
  }
});
