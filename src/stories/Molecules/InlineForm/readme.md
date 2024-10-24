<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# InlineForm

Inline form can be used for the search results page or any simple form. Default setup is just a single text field inline with a circular button. It is possible to have the inline form contain a few input fields.

The icon for the button should be rendered into the embedded form.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--accent-color`: Button background color.
</details>

<details>
  <summary>Twig Variables:</summary>

  ```
  variant: "default" // or 'multi',
  submit_color: "change submit button color",
  form: "rendered form with button/icon".
  ```
</details>
