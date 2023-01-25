<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Colors

## Notes for Storybook

These color swatches are dynamically generated based on the CSS custom properties defined in the `*-scheme.css` file. It looks for `--color-*` variables.

Use `npm run scheme-data` to (re)generate the JSON file that drives the Scheme stories if the scheme css file changes.

When using these color values in your CSS prefix with `--color-` followed by the name of the color shown in the swatch label.
