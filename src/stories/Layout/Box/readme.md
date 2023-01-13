<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Box

The purpose of a box is to allow for the separation of concerns in our components. As a layout component, it's concerned with styles that are intrinsic to the Box, i.e.: 

 - padding
 - background
 - border

It may also be a good place to override the CSS variables that will be inherited by the elements contained within the box.

External properties of a Box should not be styled directly, i.e.:

  - margin
  - width
  - height

External properties should be applied by the context, as with the margin applied by wrapping Boxes in a Stack, or the flex components (Switcher, Cluster, Sidebar, etc.) that manage flex-basis, flex-grow and flex-shrink. Otherwise width and height should only grow to fit the content within it and not be directly set by CSS.

You might argue that a Box as a layout component is unnecessary, as we are simply applying styles we could apply to any div. The `.box` class doesn't seem that useful in and of itself. But it stands to help remind us to **think of the context**, to **separate concerns**, and that **this is a system**, not a collection of arbitrarily styled divs.

By default, the box only has equal padding set to the first point on the modular scale `var('--s1')`.  In many cases, it should be enough to simply add the `.box` class to the appropriate element to move it's content from the edge of it's container.

<details>
  <summary>Inherited CSS Variables:</summary>
   - `--bg`
   - `--heading-color`
   - `--accent-color`
   - `--color`
   - `--button-border`
   - `--button-bg`
   - `--button-fg`
</details>
