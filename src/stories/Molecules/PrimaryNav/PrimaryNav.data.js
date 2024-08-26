import * as Data from "../../Data/DefaultData.data";

export default {
  default: {
    variant: "default",
    desktop_dropdown_overview_link: false,
    label: 'Primary Navigation',
    show_label: true,
    display_mobile_version: true,
    links: Data.default_primary_nav_links_data,
    mobile_links: Data.default_primary_nav_mobile_links_data,
    nav_trigger_data: {
      label: 'Primary Navigation',
      show_label: true,
    }
  },
  alternate: {
    variant: "alternate",
    desktop_dropdown_overview_link: false,
    label: '2nd District',
    show_label: true,
    display_mobile_version: true,
    links: Data.default_primary_nav_links_data,
    mobile_links: Data.default_primary_nav_mobile_links_data,
    nav_trigger_data: {
      label: '2nd District',
      show_label: true,
    }
  },
};
