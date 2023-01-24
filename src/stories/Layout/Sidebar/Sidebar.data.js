// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    space: '--s0',
    sidebar_width: '20ch',
    sidebar_direction: 'row',
    attributes: new drupalAttribute(),
  }
}
