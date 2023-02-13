// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
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
  stack_overflowing: {
    variant: "",
    overflowing_variant: "stack",
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
  hidden_overflowing: {
    variant: "",
    overflowing_variant: "hidden",
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
  with_divider: {
    variant: "with-divider",
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
}
