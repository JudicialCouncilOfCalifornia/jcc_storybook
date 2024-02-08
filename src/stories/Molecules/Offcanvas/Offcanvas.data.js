export default {
  default: {
    align: "right",
    heading: {
      text: "Offcanvas",
      icon: {
        name: "fa-thumbs-up",
      },
    },
    sub_component_data: "<p>Offcanvas content or subcomponent goes here.</p><p>This component can be toggled open with the provided open trigger or a custom standalone trigger using the <strong>.offcanvas__button-open</strong> class.</p><p>Use the close trigger in the canvas's upper-right to dismiss or add a custom trigger using the <strong>.offcanvas__button-close</strong> class.</p><p><button class='button button--secondary icon--arrow offcanvas__close-button'>Close</button></p>",
    trigger: {
      button: {
        label: "Open Canvas",
        aria_label: false,
      },
    },
  },
};
