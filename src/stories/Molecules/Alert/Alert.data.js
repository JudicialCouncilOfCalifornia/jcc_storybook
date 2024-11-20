export default {
  default: {
    variant: "default",
    type: "info",
    icon_data: {},
    heading: 'Alert Message',
    content: [
      "<p>In Drupal this is a message. See section component for content variant.</p>"
    ],
    dismissible: true,
  },
  multiline: {
    variant: "default",
    type: "info",
    icon_data: {},
    heading: "Alert Message Set",
    content: [
      "<p>In Drupal this is an array of messages.</p>",
      "<p>This is another message.</p>",
      "<p>This is a third message.</p>"
    ],
    dismissible: true,
  },
};
