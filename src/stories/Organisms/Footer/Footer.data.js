import * as Data from "../../Data/DefaultData.data";

export default {
  default: {
    site_branding_data: Data.site_branding_data,
    footer_upper_nav_data: {
      variant: "with-divider",
      overflowing_variant: "stack",
      links: Data.default_secondary_links_long_data,
    },
    footer_about_content: Data.footer_about_data,
    footer_lower_nav_data: {
      links: Data.default_primary_nav_links_long_data,
    },
    footer_social_link: Data.default_social_media_links_data,
  },
};
