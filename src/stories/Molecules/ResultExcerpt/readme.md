<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# ResultExcerpt

Description of the ResultExcerpt in markdown.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--name`: description...
</details>

<details>
  <summary>Twig Variables:</summary>

  ```
    variant: "default",
    brow: {
      primary: "Text string",
      secondary: "Text string",
      notation: "Text string",
    },
    title: "Text string",
    url: "#",
    aria_label: "Custom string rather than simple default"
    content: "Rendered content",
    button_data: {
      label: "Text string",
      href: "#",
      variant: "[primary|secondary|text]",
      size: "[small|medium|large]",
    },
    detail_list_data: {
      label: "Text string",
      details: [
        "String 1",
        "String 2",
        "String 3",
        ...,
      ],
    },
    pills: {
      variant: "default",
      icon_data: {
        icon: "[icon_name]",
        color: false,
      },
      items: [
        {
          variant: "default",
          label: "Text string",
          url: "#",
        },
        {
          variant: "default",
          label: "Text string",
          url: "#",
        },
        ...
      ],
    },
    item_classes: [
      'result-extra-style__some__style',
    ],
  }
  ```
</details>
