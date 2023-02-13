<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Cover

The Cover layout provides a way to vertically align content (`.principal`) and provides an optional top and bottom element while still centering the `.principal` accordingly.

Another thing you could do with a Cover is use it for "Card" content, where you have a Heading, Text and Button as your top, principal and bottom elements.

While you may not wish to center your Text between the Heading and Button in this context, you could override the CSS in this context to remove the top margin on the principal. `margin-block-start: 0;` This will bring the Heading and the Text together, while still pushing the Button to the bottom of the available space.

<details>
  <summary>Basic Markup</summary>
  ```
  <div class="cover">
    <div></div>
    <div class="principal"></div>
    <div></div>
  </div>
  ```
</details>

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: *(--s0)* Sets the gap value between cover sections. Be sure to use the "Modal Scale" variables, `--s*`, though the default should be good for most cases.
  - `--cover-height`: *(100vh)* Sets the MINIMUM height of the cover.
  - `--cover-padding`: *(--s0)* By default the Cover layout has padding around the wrapping div. You may wish to have the cover go edge to edge (0), or some other padding value.
</details>
