// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    type: "info",
    icon_data: {
      attributes: new drupalAttribute(),
    },
    content: [
      "<p>In Drupal this is an array of messages.</p>",
    ],
    dismissible: true,
    attributes: new drupalAttribute()
  }
}
