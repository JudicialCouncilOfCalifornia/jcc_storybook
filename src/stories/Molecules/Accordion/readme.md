<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Accordion

An Accordion component is made from a label and a content element. The content is displayed/hidden when the label summary is clicked.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--name`: variant_name
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
    items: [
      {
        label: "Text String",
        content: "rendered content",
      },
      {
        label: "Text String",
        content: "rendered content",
      },
      {
        label: "Text String",
        content: "rendered content",
      },
      ...
    ],
    attributes: new drupalAttribute()
  ```
</details>
