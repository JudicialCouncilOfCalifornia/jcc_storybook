import drupalAttribute from 'drupal-attribute'
import logo from '../../Atoms/SiteBranding/Council-Logo.svg'
import Card from '../../Molecules/Card/Card.twig'
import Sidebar from '../../Layout/Sidebar/Sidebar.twig'
import Pills from "../../Molecules/Pills/Pills.twig";
import {Default as PillsDefault} from "../../Molecules/Pills/Pills.stories";

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
          }
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
            text: "Outreach",
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
    pagetitle: {
      variant: "striped",
      background: null,
      hangover_content: "",
      bottom_content: "",
      heading: "Research, Statistics and Publications",
      text: "",
    },
    section_1: {
      variant: 'default',
      first_component: false,
      sub_component_layout: 'stack',
      sub_component_data: [
        '<div class="box"><h3>Explore Our Library of Policy, Programs and Legal Research Publications</h3><p>The California Courts convene working groups, committees and other formal and informal collaborative efforts to work towards a fair and transparent legal system that the residents of California can count on. These include work on citizen access to the justice system, data on court performance, research projects to study litigation processes and procedures and a whole host of other topics. \n' +
        'Below you’ll find featured publications as well as filers and search features that allow you to sort through our extensive publications library. Have questions? See our FAQ  or contact us. </p></div>',
      ],
    },
    empty_message: "No publications to display.",
    publications: [
      {
        variant: "default",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "#",
        content:
            "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
        main_file: "#",
        button_data: {
          label: "Download pdf",
          href: "#",
          variant: "primary",
          size: "small",
        },
        detail_list_data: {
          label: "DETAILS",
          details: [
            "Topic",
            "July 12, 2022",
            "Case Type",
            "Office/Division: CFCC",
            "Report",
          ],
        },
        pills: Pills({ ...PillsDefault.args }),
      },
      {
        variant: "default",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "#",
        content:
            "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
        main_file: "#",
        button_data: {
          label: "Download pdf",
          href: "#",
          variant: "primary",
          size: "small",
        },
        detail_list_data: {
          label: "DETAILS",
          details: [
            "Topic",
            "July 12, 2022",
            "Case Type",
            "Office/Division: CFCC",
            "Report",
          ],
        },
        pills: Pills({ ...PillsDefault.args }),
      },
      {
        variant: "default",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "#",
        content:
            "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
        main_file: "#",
        button_data: {
          label: "Download pdf",
          href: "#",
          variant: "primary",
          size: "small",
        },
        detail_list_data: {
          label: "DETAILS",
          details: [
            "Topic",
            "July 12, 2022",
            "Case Type",
            "Office/Division: CFCC",
            "Report",
          ],
        },
        pills: Pills({ ...PillsDefault.args }),
      },
    ],
    filters: [
      {
        type: 'input',
        placeholder: 'Search Publication',
        id: 'search',
        name: 'search'
      },
      {
        type: 'select',
        placeholder: 'Topic/Case Type',
        id: 'topic',
        name: 'topic',
        options: [
          {
            value: 'opt1',
            label: 'Option 1'
          },
          {
            value: 'opt2',
            label: ' Option 2'
          },
          {
            value: 'opt3',
            label: 'Option 3'
          }
        ]
      },
      {
        type: 'select',
        placeholder: 'Office/Division',
        id: 'office',
        name: 'office',
        options: [
          {
            value: 'opt1',
            label: 'Option 1'
          },
          {
            value: 'opt2',
            label: ' Option 2'
          },
          {
            value: 'opt3',
            label: 'Option 3'
          }
        ]
      },
      {
        type: 'select',
        placeholder: 'Publication Type',
        id: 'put_type',
        name: 'put_type',
        options: [
          {
            value: 'opt1',
            label: 'Option 1'
          },
          {
            value: 'opt2',
            label: ' Option 2'
          },
          {
            value: 'opt3',
            label: 'Option 3'
          }
        ]
      }
    ],
    filters_buttons: [
      {
        variant: 'secondary',
        size: 'small',
        label: "Submit",
        href: "#",
      },
      {
        variant: 'primary',
        size: 'small',
        label: "Reset",
        href: "#",
      },
    ],
    popular_topics: [
      {
        variant: 'pill',
        size: 'small',
        label: "Family law",
        href: "#",
      },
      {
        variant: 'pill',
        size: 'small',
        label: "Small Claims",
        href: "#",
      },
      {
        variant: 'pill',
        size: 'small',
        label: "Wills and Estates",
        href: "#",
      },
    ],
    pager: true,
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
          }
        ]
      }
    }
  }
}
