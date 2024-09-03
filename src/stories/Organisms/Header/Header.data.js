import * as Data from "../../Data/DefaultData.data";

export default {
  default: {
    site_branding_data: Data.site_branding_data,
    primary_nav_data: {
      links: Data.default_primary_nav_links_data,
    },
    secondary_nav_data: {
      variant: "with-divider",
      overflowing_variant: "hidden",
      links: Data.default_secondary_links_data,
    },
    header_search_data: {
      variant: "default",
      form: Data.header_search_form_data,
    },
    nav_trigger_data: {
      label: "Menu",
      show_label: false,
    },
    mobile_nav_data: {
      primary_nav_data: {
        links: Data.default_mobile_nav_primary_nav_links_data,
      },
      secondary_nav_data: {
        variant: "stacked",
        overflowing_variant: "",
        links: Data.default_mobile_nav_secondary_nav_links_data,
      },
      search_form: {
        variant: "no-toggle",
        form: Data.mobile_search_form_data,
      },
    },
    section_nav_data: {
      variant: "alternate",
      label: "2nd District",
      show_label: true,
      display_mobile_version: true,
      links: Data.default_primary_nav_links_data,
      mobile_links: Data.default_primary_nav_mobile_links_data,
      nav_trigger_data: {
        label: "2nd District",
        show_label: true,
      }
    },
  },
};

