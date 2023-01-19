# Grid

The Grid will give you uniform columns and rows of equal height based on the space required by the grid item content.

The number and width of the columns will expand or contract based on **the number of items in the grid** and the intrinsic width of the content of each item. A minimum grid item width can be set.

The minimum width should be thought about as width of content. As such, the `ch` unit allows the browser to set the width algorithmically for the fundamental content of the web, text. See [Units](https://every-layout.dev/rudiments/units/).

Setting content width as pixels is hardware specific and we don't use display specific breakpoints here.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: Sets the gap value between cluster items. Be sure to use the "Modal Scale" variables, `--s0`, though the default should be good for most cases.
  - `--grid-min-width`: *(20ch)* The minimum width of a grid item. Items will expand if space allows, or more columns will be added if needed.
</details>

*No media queries were used in the making of this layout.*
