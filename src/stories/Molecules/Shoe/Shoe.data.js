// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    shoeTitle: "JUDICIAL BRANCH OF CALIFORNIA",
    secondarynav_data: {
      variant: "",
      overflowing_variant: "",
      links: [
        {
          text: "Contact Us",
          url: "#",
          is_current: false,
        },
        {
          text: "Privacy",
          url: "#",
          is_current: false,
        },
        {
          text: "Terms Of Use",
          url: "#",
          is_current: false,
        },
        {
          text: "@ 2022",
          url: "#",
          is_current: false,
        },
      ],
      attributes: new drupalAttribute()
    },
    attributes: new drupalAttribute()
  }
}
