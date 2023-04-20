import logo from "../../Atoms/SiteBranding/Council-Logo.svg";

export default {
  default: {
    site_branding_data: {
      variant: "default",
      logo: logo,
      label: "California Courts",
      sub_label: "Language Access",
    },
    secondary_nav_data: {
      variant: "default",
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
          text: "Public Access to Records",
          url: "#",
          is_current: false,
        },
        {
          text: "Disclaimer",
          url: "#",
          is_current: false,
        },
      ],
    },
  },
};
