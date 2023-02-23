// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    text: "Judicial Branch of California",
    destination: "https://courts.ca.gov",
    sub_component_data: {
      variant: "default",
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  },
}
