// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    frame_h: 16,
    frame_v: 9,
    frame_item: "<img src='https://source.unsplash.com/random/900×700/?frame' />",
    attributes: new drupalAttribute()
  },
}
