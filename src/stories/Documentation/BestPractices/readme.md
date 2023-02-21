<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Best Practices

As a general approach to building components for this library.

  - Read all the docs, and the external sources the reference.
  - Always be brutally minimalist with the amount of code you use to achieve something.
  - Always build off of existing foundations before creating new things. This means, know the systems and components in this library.
  - Start with all your necessary elements in the order they should appear. i.e. heading, text, image, etc.
  - Wrap your elements in layout (primitive) elements in order to get as close to the layout as possible with no other styles.
  - Add minor and natural layout adjustments for flex elements, i.e. justify-content, align-items, etc.
  - This should get you 100% of the way for layout, 98% of the time. [1]
  - Add aesthetic styling for variants. Use BEM style class names as needed for clarity in selectors.
  - Always use our Scheme values for Colors, sizes, fonts, etc.  If new values are required, add them to the Scheme first. Never hard code colors, sizes, etc into a component.
  - Avoid adding margin and padding to elements directly. It's better for their containing element to determine their spacing and relationship to other elements.

*[1] For the 2% of the time that you don't quite get there out of the box, understand intrinsic layout, or ask for guidance. *

*Remember that Web UI development is a collaboration between developer and designer. Ask for feedback, clarification, justification, or alternatives when something in the design does not integrate well with the system we're building or the browsers that render them.*



