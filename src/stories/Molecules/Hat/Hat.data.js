import * as data from "../../Data/DefaultData.data";

export default {
  default: {
    variant: "default",
    global_branding_data: data.global_branding_data,
    secondary_nav_data: {
      variant: "",
      overflowing_variant: "hidden",
      links: data.hat_secondary_nav_links_data,
    },
  },
};