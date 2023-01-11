// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    example: "{{titleCase name}} component goes here.",
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
  }
}
