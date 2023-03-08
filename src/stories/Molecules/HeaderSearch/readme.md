<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Header Search

The Header Search component comes with an animated toggle icon to show/hide the form.

This expects the whole form mark up to be passed in as the `form` value. It will require some preprocessing to ensure the correct classes are on your form elements. See the component markup.

When visible, the search form obscures the containing and adjacent elements with `position: absolute`.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--accent-color`: The color of the search icon background.
  - `--icon-size:` (default: `var(--s2)`): can be set on the `.header-search` element. The icon buttons and search input will scale accordingly.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  form: "<form>...</form>",
  ```
</details>
