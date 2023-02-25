// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    sub_component_data: {
      variant: "default",
      attributes: new drupalAttribute(),
    },
    hatTitle: "JUDICIAL BRANCH OF CALIFORNIA",
    secondarynav_data: {
      variant: "",
      overflowing_variant: "",
      links: [
        {
          text: "Supreme Court",
          url: "#",
          is_current: false,
        },
        {
          text: "Courts of Appeal",
          url: "#",
          is_current: false,
        },
        {
          text: "Superior Courts",
          url: "#",
          is_current: false,
        },
        {
          text: "Judicial Council",
          url: "#",
          is_current: false,
        }
      ],
      attributes: new drupalAttribute()
    },
    attributes: new drupalAttribute()
  }
}
