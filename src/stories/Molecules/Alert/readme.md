<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# Alert

An Alert is a way to display a message to the user. There are 4 standard types of messages: "info", "status", "warning" and "error".

The type of alert is passed on to the Icon component, ensuring that the correct icon is displayed.

Text or any other rendered content can be added to the `content` element.

If the content is dismissable, an 'X' will appear in the upper corner.

<details>
  <summary>Inherited CSS Variables:</summary>
  - `--gap`: space between icon, dismiss button, and text
  - `--color`: The color of the text that goes with each Alert type.
  - `--accent-color`: The site accent color used on the active tab.
</details>

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
    type: "info", "status", "warning", or "error",
    content: "Text or other rendered content can be placed here.",
    dismissable: true or false,
  ```
</details>
