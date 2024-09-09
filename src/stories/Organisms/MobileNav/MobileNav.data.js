import * as data from "../../Data/DefaultData.data";

export default {
  default: {
    variant: "default",
    desktop_dropdown_overview_link: false,
    primary_nav_data: {
      label: 'Primary Navigation',
      show_label: false,
      links: data.default_mobile_nav_primary_nav_links_data,
    },
    secondary_nav_data: {
      variant: "stacked",
      overflowing_variant: "",
      label: 'Secondary Navigation',
      show_label: false,
      links: data.default_mobile_nav_secondary_nav_links_data,
    },
    search_form: {
      variant: "no-toggle",
      form: data.mobile_search_form_data,
    },
  },
};
