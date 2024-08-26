import * as data from "../../Data/DefaultData.data";

export default {
  default: {
    site_branding_data: data.site_branding_data,
    primary_nav_data: {
      links: data.default_primary_nav_links_data,
    },
    secondary_nav_data: {
      variant: "with-divider",
      overflowing_variant: "hidden",
      links: data.default_secondary_links_data,
    },
    header_search_data: {
      variant: "default",
      form: data.header_search_form_data,
    },
    nav_trigger_data: {
      label: "Menu",
      show_label: false,
    },
    mobile_nav_data: {
      primary_nav_data: {
        links: data.default_mobile_nav_primary_nav_links_data,
      },
      secondary_nav_data: {
        variant: "stacked",
        overflowing_variant: "",
        links: data.default_mobile_nav_secondary_nav_links_data,
      },
      search_form: {
        variant: "no-toggle",
        form: data.mobile_search_form_data,
      },
    },

  },
};

