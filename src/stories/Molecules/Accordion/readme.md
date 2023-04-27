<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Accordion

An Accordion component is made from a label and a content element. The content is displayed/hidden when the label summary is clicked.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--heading-color`: Summary color.
  - `--accent-color`: For the arrow icon color.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
    variant: "default",
    open_first: false, // Set the first accordion item to be open on load.
    heading: 'A title for the Accordion',
    lead: 'any rendered text',
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
  ```
</details>
