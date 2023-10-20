import logo from "../../Atoms/SiteBranding/Council-Logo.svg";
import Body from "../../Molecules/Body/Body.twig";
import SidebarNav from "../../Molecules/SidebarNav/SidebarNav.twig";

let body_content = [
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia. Prave, nequiter, turpiter cenabat; Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus.</p>",
];

export default {
  default: {
    hat: {
      variant: "default",
      global_branding_data: {
        text: "Judicial Branch of California",
        destination: "https://courts.ca.gov",
      },
      secondary_nav_data: {
        variant: "",
        overflowing_variant: "hidden",
        links: [
          {
            text: "Supreme Court",
            url: "#",
            is_current: false,
          },
          {
            text: "Courts of Appeal",
            url: "#",
            is_current: false,
          },
          {
            text: "Superior Courts",
            url: "#",
            is_current: false,
          },
          {
            text: "Judicial Council",
            url: "#",
            is_current: false,
          },
        ],
      },
    },
    header: {
      variant: "default",
      site_branding_data: {
        variant: "default",
        logo: logo,
        label: "California Courts",
        sub_label: "Language Access",
      },
      primary_nav_data: {
        links: [
          {
            text: "Language Access Information",
            is_current: true,
            id: "nav-section-one",
            links: [
              {
                text: "Navigation link 1",
                url: "#",
              },
              {
                text: "Navigation link 2",
                url: "#",
              },
              {
                text: "Navigation link 3",
                url: "#",
              },
              {
                text: "Navigation link 4",
                url: "#",
              },
              {
                text: "Navigation link 5",
                url: "#",
              },
              {
                text: "Navigation link 6",
                url: "#",
              },
              {
                text: "Navigation link 7",
                url: "#",
              },
            ],
            section_link: {
              text: "Language Access Information",
              url: "#",
            },
          },
          {
            text: "Court Interpreters",
            links: [
              {
                text: "Navigation link 1",
                url: "#",
              },
              {
                text: "Navigation link 2",
                url: "#",
              },
              {
                text: "Navigation link 3",
                url: "#",
              },
              {
                text: "Navigation link 4",
                url: "#",
              },
              {
                text: "Navigation link 5",
                url: "#",
              },
              {
                text: "Navigation link 6",
                url: "#",
              },
              {
                text: "Navigation link 7",
                url: "#",
              },
            ],
            section_link: {
              text: "Navigation link",
              url: "#",
            },
          },
          {
            text: "Become a Court Intrepreter",
            url: "#",
          },
          {
            text: "About",
            links: [
              {
                text: "Navigation link 1",
                url: "#",
              },
              {
                text: "Navigation link 2",
                url: "#",
              },
              {
                text: "Navigation link 3",
                url: "#",
              },
              {
                text: "Navigation link 4",
                url: "#",
              },
              {
                text: "Navigation link 5",
                url: "#",
              },
              {
                text: "Navigation link 6",
                url: "#",
              },
              {
                text: "Navigation link 7",
                url: "#",
              },
              {
                text: "Navigation link 8",
                url: "#",
              },
              {
                text: "Navigation link 9",
                url: "#",
              },
              {
                text: "Navigation link 10",
                url: "#",
              },
              {
                text: "Navigation link 11",
                url: "#",
              },
              {
                text: "Navigation link 12",
                url: "#",
              },
              {
                text: "Navigation link 13",
                url: "#",
              },
              {
                text: "Navigation link 14",
                url: "#",
              },
              {
                text: "Navigation link 15",
                url: "#",
              },
              {
                text: "Navigation link 16",
                url: "#",
              },
              {
                text: "Navigation link 17",
                url: "#",
              },
              {
                text: "Navigation link 18",
                url: "#",
              },
            ],
            section_link: {
              text: "Navigation link",
              url: "#",
            },
          },
        ],
      },
      secondary_nav_data: {
        variant: "with-divider",
        overflowing_variant: "hidden",
        links: [
          {
            text: "Search for an Interpreter",
            url: "#",
            is_current: false,
          },
          {
            text: "Questions?",
            url: "#",
            is_current: false,
          },
          {
            text: "Complaints",
            url: "#",
            is_current: false,
          },
          {
            text: "Contact Us",
            url: "#",
            is_current: false,
          },
        ],
      },
      header_search_data: {
        variant: "default",
        form: "<form action='/search' class='header-search__form' role='search'><label class='sr-only' for='header-search'>Search</label><input id='header-search' type='search' name='search' placeholder='Search' /><button class='header-search__icon' type='submit'><span class='header-search__search-line'></span><span class='header-search__search-circle'></span><span class='sr-only'>Search</span></button></form>",
      },
      header_search_data_duplicate: {
        variant: "no-toggle",
        form: "<form action='/search2' class='header-search__form' role='search'><label class='sr-only' for='header-search'>Search</label><input id='header-search' type='search' name='search' placeholder='Search' /><button class='header-search__icon' type='submit'><span class='header-search__search-line'></span><span class='header-search__search-circle'></span><span class='sr-only'>Search</span></button></form>",
      },
    },
    breadcrumb: [
      {
        url: '#',
        text: 'Home',
      },
      {
        url: '#',
        text: 'FIrst Level Parent',
      },
      {
        url: '#',
        text: 'Second Level Parent',
      },
      {
        url: false,
        text: 'Current page',
      },
    ],
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
      first_component: false,
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
      first_component: false,
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
      first_component: false,
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
    shoe: {
      variant: "default",
      global_branding_data: {
        text: "Judicial Branch of California",
        destination: "https://courts.ca.gov",
      },
      secondary_nav_data: {
        variant: "",
        overflowing_variant: "stack",
        links: [
          {
            text: "Contact Us",
            url: "#",
            is_current: false,
          },
          {
            text: "Privacy",
            url: "#",
            is_current: false,
          },
          {
            text: "Terms Of Use",
            url: "#",
            is_current: false,
          },
        ],
      },
    },
  },
};
