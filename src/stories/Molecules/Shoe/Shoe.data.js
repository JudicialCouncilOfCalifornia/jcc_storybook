// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    variant: "default",
    global_branding_data: {
      text: "Judicial Branch of California",
      destination: "https://courts.ca.gov",
      attributes: new drupalAttribute()
    },
    secondary_nav_data: {
      variant: "",
      overflowing_variant: "hidden",
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
        }
      ],
      attributes: new drupalAttribute()
    },
    attributes: new drupalAttribute()
  }
}
