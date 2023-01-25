<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Backgrounds

## Notes for Storybook

These background swatches are dynamically generated based on the CSS custom properties defined in the `*-scheme.css` file. It looks for `--background-*` variables.

Use `npm run scheme-data` to (re)generate the JSON file that drives the Scheme stories if the scheme css file changes.

When using these background values in your CSS prefix with `--background-` followed by the name of the background shown in the swatch label.
