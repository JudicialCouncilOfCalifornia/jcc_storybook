function docReady(fn) {
  // See if DOM is already available.
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function adjustHeadings(subcomponents) {
  // Migrate to new heading tags.
  subcomponents.forEach(function(subcomponent) {
    let subcompHeadings = subcomponent.querySelectorAll("h1, h2, h3, h4, h5, h6");

    subcompHeadings.forEach(function(subcompHeading) {
      let headingTag = subcompHeading.tagName;
      let headingLevel = Number(headingTag.charAt(1));
      let headingClass = subcompHeading.className;
      let newHeading = document.createElement("h" + (headingLevel + 1));
      // Migrate classes.
      if (headingClass) {
        newHeading.classList.add(headingClass);
      }
      // Migrate text & replace original heading.
      while(subcompHeading.firstChild) {
        newHeading.appendChild(subcompHeading.firstChild);
      }
      subcompHeading.parentNode.replaceChild(newHeading, subcompHeading);
    });
  });
}

function adjustSubcomponents(subcomponents, type) {
  // Extend cards component styling - see Section.css.
  if (type === "cards") {
    const rect = subcomponents[0].getBoundingClientRect();
    if (rect.left.toFixed() <= 23) {
      subcomponents[0].classList.remove("unwrapped");
    } else {
      subcomponents[0].classList.add("unwrapped");
    }
  }
}

docReady(function () {
  // Select sections that require auto-adjusting headings.
  const headingsAdjust = ".headings-mgt";
  const sectionsWithHeadingMgt = document.querySelectorAll(headingsAdjust);
  // Select cards.
  const cards = document.querySelectorAll(".cards");

  // Adjust subcomponent headings if parent section has H2.
  if (sectionsWithHeadingMgt.length > 0) {
    sectionsWithHeadingMgt.forEach(function(section) {
      if (!section.classList.contains('headings-adjusted')) {
        let sectionHeading = section.querySelector(headingsAdjust + " > .section__content > .container > .section__header");
        let sectionHeadingTagName = sectionHeading ? sectionHeading.querySelector('h1, h2').tagName : null;

        // Apply to library components only.
        if (sectionHeading && sectionHeadingTagName !== 'H1') {
          const componentIds = ".accordion, .action-list, .cards, .steps, .teaser-list, .profile-cards, .view-results";
          let subcomponents = section.querySelectorAll(componentIds);
          adjustHeadings(subcomponents);
          // Since scripts can execute per component instance, flag parent as processed.
          section.classList.add('headings-adjusted');
        }
      }
    });
  }

  // Adjust for cards support.
  if (cards.length > 0) {
    adjustSubcomponents(cards, "cards");
    window.onresize = function () {
      adjustSubcomponents(cards, "cards");
    };
  }
});
