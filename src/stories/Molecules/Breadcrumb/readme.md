<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Breadcrumb

This renders a breadcrumb of the current pages menu structure. It uses the default output of Drupal's breadcrumb variables.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: Gap size.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  breadcrumb: [
    {
      title: "Text for link",
      url: "A url path or False"
    },
    ... More breadcrumb items.
  ]
  ```
</details>
