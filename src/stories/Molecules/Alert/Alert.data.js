// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    type: "info",
    icon_data: {
      icon: "info",
      color: false,
      attributes: new drupalAttribute(),
    },
    content: "<p>Text or other rendered content will display here. If the content is dismissable, an X will appear in the upper corner. This content is here just to force the alert to go into a second line.</p>",
    dismissable: true,
    attributes: new drupalAttribute()
  }
}
