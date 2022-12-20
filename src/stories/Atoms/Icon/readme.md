# Icon

An svg icon.

### Inherited CSS Variables

  - `--color` : Sets the icon color, assuming monochromatic SVG.

### Modifier Variables

  - **icon**: Available icons are in an svg "sprite" file built from the icons in `assets/icons`.  i.e. `documents`, `speaker`, `toolkit`
  - **color**: Can be any color defined in the scheme CSS file, i.e. `assets/css/scheme-default.css` or any scheme file that overrides it.
    - If the defined color is `--color-primary-dark-x` then the color name is `primary-dark-x`.
