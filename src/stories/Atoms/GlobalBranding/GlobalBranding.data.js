// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    text: "Judicial Branch of California",
    destination: "https://courts.ca.gov",
    attributes: new drupalAttribute()
  },
}
