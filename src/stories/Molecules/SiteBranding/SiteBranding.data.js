// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    logo: "../static/media/src/assets/icons/Council-Logo.svg",
    label: "California Courts",
    sub_label: "Language Access",
    attributes: new drupalAttribute()
  }
}
