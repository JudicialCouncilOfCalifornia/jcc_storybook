// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    num_items: 3,
    scroll: true,
    hint: false,
    attributes: new drupalAttribute(),
  },
  no_scroll: {
    num_items: 3,
    scroll: false,
    hint: false,
    attributes: new drupalAttribute(),
  },
  hint: {
    num_items: 3,
    scroll: false,
    hint: true,
    attributes: new drupalAttribute(),
  },
}
