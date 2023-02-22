// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    sub_component_data: {
      variant: "default",
      attributes: new drupalAttribute(),
    },
    left_header_text: "JUDICIAL BRANCH OF CALIFORNIA",
    secondarynav_data: {
      variant: "",
      overflowing_variant: "",
      links: [
        {
          text: "Careers",
          url: "#",
          is_current: false,
        },
        {
          text: "Contact Us",
          url: "#",
          is_current: false,
        },
        {
          text: "Accessibility",
          url: "#",
          is_current: false,
        },
        {
          text: "Public Access To Records",
          url: "#",
          is_current: false,
        },
        {
          text: "Newsroom",
          url: "#",
          is_current: false,
        },
      ],
      attributes: new drupalAttribute()
    },
    attributes: new drupalAttribute()
  }
}
