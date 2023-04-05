// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    label: "Pill",
    href: "#",
    attributes: new drupalAttribute()
  }
}
