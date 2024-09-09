import Body from "../../Molecules/Body/Body.twig";

// Default data for this page.
import * as Data from "../../Data/DefaultData.data";

let body_content = [
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia. Prave, nequiter, turpiter cenabat; Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus.</p>",
];

export default {
  default: {
    hat: {
      variant: "default",
      global_branding_data: Data.global_branding_data,
      secondary_nav_data: {
        variant: "",
        overflowing_variant: "hidden",
        links: Data.hat_secondary_nav_links_data,
      },
    },
    header: {
      variant: "default",
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
    },
    breadcrumb: Data.breadcrumb_links_data,
    hero_hangover: {
      hangover_hide_compact: false,
      hangover_offset: 22,
      background: null,
      brow: false,
      heading: "This is a heading for this sub page example",
      text: "",
      hangover_content: "",
      bottom_content: "",
      blurb: false,
    },
    sidebar_nav: {
      variant: "default",
      menu_heading: {
        title: 'Parent menu item',
        url: "#",
      },
      links: [
        {
          title: "Simple link",
          url: "#",
          attributes: [],
          active: false,
        },
        {
          title: "Link with sublinks",
          url: "#",
          attributes: [],
          active: false,
          links: [
            {
              title: "Simple link with extra words to test spacing",
              url: "#",
              attributes: [],
              active: false,
            },
            {
              title: "Simple link",
              url: "#",
              attributes: [],
              active: false,
              links: [
                {
                  title: "Simple link",
                  url: "#",
                  attributes: [],
                  active: true,
                },
                {
                  title: "Simple link",
                  url: "#",
                  attributes: [],
                  active: false,
                },
              ],
            },
          ],
        },
        {
          title: "Simple Link",
          url: "#",
          attributes: [],
          active: false,
        },
        {
          title: "Simple link with extra words to test spacing",
          url: "#",
          attributes: [],
          active: false,
        },
        {
          title: "Link with sublinks with extra words to test spacing",
          url: "#",
          attributes: [],
          active: false,
          links: [
            {
              title: "Simple link",
              url: "#",
              attributes: [],
              active: false,
            },
            {
              title: "Simple link",
              url: "#",
              attributes: [],
              active: false,
            },
          ],
        },
      ],
    },
    section_1: {
      variant: "default",
      sub_component_layout: "switcher",
      align_items: false,
      measure: 69,
      gap: false,
      grid_min_width: false,
      sidebar_direction: false,
      sidebar_width: false,
      brow_data: false,
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_data: [
        Body({
          variant: "default",
          heading: "This is a body heading",
          lead: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia.</p>",
          content: body_content.join(' '),
          subheading: false,
          aside: false,
        }),
      ],
    },
    section_2: {
      variant: "warm-dark-x",
      sub_component_layout: "switcher",
      align_items: false,
      measure: 69,
      gap: false,
      grid_min_width: false,
      sidebar_direction: false,
      sidebar_width: false,
      brow_data: false,
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_data: [
        Body({
          variant: "default",
          heading: false,
          lead: false,
          content: body_content.join(' '),
          subheading: false,
          aside: false,
        }),
      ],
    },
    section_3: {
      variant: "default",
      sub_component_layout: "switcher",
      align_items: false,
      measure: 69,
      gap: false,
      grid_min_width: false,
      sidebar_direction: false,
      sidebar_width: false,
      brow_data: false,
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_data: [
        Body({
          variant: "default",
          heading: false,
          lead: false,
          content: body_content.join(' '),
          subheading: false,
          aside: false,
        }),
      ],
    },
    footer: {
      site_branding_data: Data.site_branding_data,
      footer_upper_nav_data: {
        variant: "with-divider",
        overflowing_variant: "stack",
        links: Data.default_secondary_links_long_data,
      },
      footer_about_content: Data.footer_about_data,
      footer_social_link: Data.default_social_media_links_data,
      footer_lower_nav_data: {
        links: Data.default_primary_nav_links_long_data,
      },
    },
    shoe: {
      variant: "default",
      global_branding_data: Data.global_branding_data,
      secondary_nav_data: {
        variant: "default",
        overflowing_variant: "",
        links: Data.shoe_secondary_nav_links_data,
      },
    },
  },
};
