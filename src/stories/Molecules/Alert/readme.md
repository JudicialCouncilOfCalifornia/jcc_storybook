<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Alert

An Alert is a way to display a message to the user. There are 4 standard types of messages: "info", "status", "warning" and "error".

The type of alert is passed on to the Icon component, ensuring that the correct icon is displayed.

Text or any other rendered content can be added to the `content` element.

If the content is dismissible, an 'X' will appear in the upper corner.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: space between icon, dismiss button, and text
  - `--color`: The color of the text that goes with each Alert type.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  type: "info", "status", "warning", or "error",
  icon_data: {
    attributes: (For now just make sure you send a clean attributes object.
    The actual icon_data will be rebuilt by the component, controlled by the
    "type" value above. This is just needed for Drupal, but I'd like to
    refactor so it's not needed.)
  },
  content: "Text or other rendered content can be placed here.",
  dismissible: true or false,
  ```
</details>
