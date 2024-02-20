<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# BlurbBox

Similar to a Blurb in a HeroHangover, and BlurbBox allows for multiple items
(structured and rendered) to be placed into a blurb styled card box.

The structured output allows for a brow, heading, and text. For more flexibility,
any rendered content can be set to the rendered_content.

Recommend no more than 4-5 items depending on the data.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--name`: description...
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  data: [
    {
      brow: "Any string or rendered text",
      heading: "Any string or rendered text",
      text: "Any string or rendered text",
      rendered_content: 'Any rendered content',
    },
    {
      '...repeat for additional items...'
    },
  ]
  ```
</details>
