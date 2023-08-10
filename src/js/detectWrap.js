function docReady(fn) {
  // See if DOM is already available.
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const detectWrap = (group) => {
    const top = Math.floor(group.children[0].getBoundingClientRect().top);
    for (let i = 1; i < group.children.length; i++) {
      const child = group.children[i];

      if (Math.floor(child.getBoundingClientRect().top) != top) {
        child.classList.add("wrapped");
        group.classList.add("wrapping");
      } else {
        child.classList.remove("wrapped");
        group.classList.remove("wrapping");
      }
    }
  };

  const wrappable = document.querySelectorAll(".detect-wrap");

  wrappable.forEach((item) => {
    if (!item.classList.contains("js-detect-wrap")) {
      item.classList.add("js-detect-wrap");

      detectWrap(item);

      if (item.classList.contains("detect-wrap--observed")) {
        if ("ResizeObserver" in window) {
          new ResizeObserver((entries) => {
            detectWrap(item);
          }).observe(item);
        }
      }
    }
  });
});
