export default {
  default: {
    variant: "default",
    type: "info",
    icon_data: {},
    heading: 'Alert Message',
    content: [
      "<p>In Drupal this is one continuous message using a single paragraph that will wrap. Additional content will break into a new line. See section/content alert banner variant.</p><p><a href='#'>Link example for style testing</a></p>"
    ],
    dismissible: true,
  },
  multiple: {
    variant: "default",
    type: "info",
    icon_data: {},
    heading: "Multiple Alert Messages",
    content: [
      "<p>In Drupal this is an array of messages. <a href='/?path=/story/organisms-section--alerts'>See section/content alert variant</a></p>",
      "<p>This is another message.</p>",
      "<p>This is a third message.</p>"
    ],
    dismissible: true,
  },
};
