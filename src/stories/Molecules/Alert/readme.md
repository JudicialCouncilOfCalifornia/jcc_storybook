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
  icon_data: {},
  content: "Text or other rendered content can be placed here. In Drupal this is an array of items to be rendered.",
  dismissible: true or false,
  ```
</details>
