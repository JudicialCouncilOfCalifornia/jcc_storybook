<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Sidebar

The Sidebar solves the problem of placing content side by side, where one side, the sidebar, takes up less horizontal space. In the past it was common to use `@media-query` to reconfigure this side by side layout at a "breakpoint" defined by the hardware, rather than the content needs.

With this sidebar layout we can define the preferred width of the side bar with `flex-basis` and then allow the "not-sidebar" side take up the remaining space as it needs to.

When the available horizontal space is no longer enough to have the "sidebar" be narrower than the "not-sidebar", it ceases to be a sidebar, and the layout naturally switches to a stacked configuration. **Without** the use of a breakpoint. It switches based on the space that the content naturally requires.

<details>
  <summary>Basic Markup</summary>
  ```
  <div class="with-sidebar">
    <!-- sidebar -->
    <div></div>
    <!-- not sidebar -->
    <div></div>
  </div>
  ```
</details>

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: *(--s0)* Sets the gap value between cluster items. Be sure to use the "Modal Scale" variables, `--s*`, though the default should be good for most cases.
  - `--sidebar-width`: *(20ch)* Sets the sidebar width.
  - `--sidebar-direction`: *(row)* To move the sidebar to the right instead of the left, use `row-reverse`.
</details>

*No media queries were used in the making of this layout.*
