<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Center

The Center provides a centered column with a max width to maintain a good "measure" (characters per line). 

The Center will expand to fit content to the max width of it's "measure". Any sub elements that have less width than the Center element CAN be centered, relative to the width of this component. See the heading and the button in the second example on the **Canvas**.

You may want to combine `.center` with `.stack` in some cases. 
  - `class="center stack"` 

In the Center example, `.stack` is responsible for the margins between the sub elements, `<h1>, <p>, <a>`.

### Inherited CSS Variables:

  - `--measure`: characters per line. Set at the root, and although it could be overridden, it should be avoided to maintain consistency and readability.
  - `--align-items`: for "intrinsic" centering of sub elements inside the "Center" element. It's best to set this in the CSS for the element that requires it.  
  ```
  .section > * > .center {
      --align-items: center;
  }
  ```
  ```
  .card--striped .card,
  .card.card--striped {
      --align-items: center;
      ...
  }
  ```


