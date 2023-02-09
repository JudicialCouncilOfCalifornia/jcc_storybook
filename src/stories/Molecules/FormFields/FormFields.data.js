// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    example: "FormFields component goes here.",
    bg_tint: "accent-warm-dark-xx",
    background_image_url: "https://source.unsplash.com/random/900×700/?building",
    sub_component_data: {
      variant: "default",
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  },
  another_variant: {
    variant: "content-bg",
    sub_component_data: {
      variant: "default",
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute()
  },

}