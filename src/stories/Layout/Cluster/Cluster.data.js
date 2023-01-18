// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    num_items: 5,
    attributes: new drupalAttribute()
  }
}
