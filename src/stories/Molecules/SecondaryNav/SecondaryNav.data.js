import * as data from "../../Data/DefaultData.data";

export default {
  default: {
    variant: "",
    overflowing_variant: "",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_data,
  },
  stack_overflowing: {
    variant: "",
    overflowing_variant: "stack",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_long_data,
  },
  hidden_overflowing: {
    variant: "",
    overflowing_variant: "hidden",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_long_data,
  },
  stacked: {
    variant: "stacked",
    overflowing_variant: "",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_long_data,
  },
  with_divider: {
    variant: "with-divider",
    overflowing_variant: "",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_long_data,
  },
  alternate: {
    variant: "alternate",
    overflowing_variant: "stack",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_data,
  },
  alternate_with_divider: {
    variant: "alternate-with-divider",
    overflowing_variant: "stack",
    show_label: false,
    label: "Secondary Navigation",
    links: data.default_secondary_links_long_data,
  },
};