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
