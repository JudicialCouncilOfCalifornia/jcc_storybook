# Offcanvas

Hidden sidebar toggle that overlays page when visible.

To use a custom/standalone trigger, be sure to use the `offcanvas__open-button` and `offcanvas__close-button` classes to integrate the click handler.
The provided trigger is not required. See [**Drawer**](../../Organisms/Drawer/readme.md) component for example.

NOTE: At this time, the component only supports a single, native trigger+canvas content arrangement.
Multiple content and third-party trigger support such as JCC Chatbot is TBD.

<details>
  <summary>Twig Variables:</summary>

  ```
  align: "right (default) or left",
  heading: {
    text: "Offcanvas",
    icon: {
      name: "Name of icon in library"
      icon_path: "Path to icons.svg may be needed ... /themes/contrib/jcc_storybook/src/assets/icons.svg"
    },
  },
  close_aria_label: "Improved context for close action",
  trigger: {
    button: {
      variant: "secondary or text if not primary default",
      label: "Open Canvas",
      aria_label: "As needed context else the button label will be used",
      size: "small or large if not normal default",
    },
    custom: "Component or markup in place of the provided button"
  },
  sub_component_data: "Component or markup",
  ```
</details>
