import logo from "../../Atoms/SiteBranding/Council-Logo.svg";
import Body from "../../Molecules/Body/Body.twig";
import Accordion from "../../Molecules/Accordion/Accordion.twig";
import ActionList from "../../Molecules/ActionList/ActionList.twig";

let body_content = [
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia. Prave, nequiter, turpiter cenabat; Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus.</p>",
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
      heading: "This page is for testing a mix of content elements",
      text: "",
      hangover_content: "",
      bottom_content: "",
      blurb: false,
    },
    section_1: {
      variant: "default",
      sub_component_layout: "default",
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
        Accordion({
          variant: "default",
          open_first: false,
          open_on_load: "",
          expand_button: false,
          heading: 'Accordion example 1',
          lead: "",
          items: [
            {
              id: "judicial_council_role",
              label:
                "What is the Judicial Council of California's role in the current court interpreter program?",
              content:
                "<p>This is text in a paragraph. This content can realistically be any type of content. Cards, Sections, Media...any rendered content could be passed in.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Elit penatibus dignissim placerat</h3> <h4> Ac non lacus sollicitudin</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "which_judicial_council_panel_oversees_the_court_interpreters_program",
              label:
                "Which Judicial Council panel oversees the court interpreters program?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Ac non lacus sollicitudin</h3> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "how_can_courts_identify_certified_or_registered_court_interpreters",
              label:
                "How can courts identify certified or registered court interpreters?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
          ],
        }),
        Accordion({
          variant: "default",
          open_first: false,
          open_on_load: "",
          expand_button: true,
          heading: 'Accordion example 2',
          lead: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
          items: [
            {
              id: "judicial_council_role",
              label:
                "What is the Judicial Council of California's role in the current court interpreter program?",
              content:
                "<p>This is text in a paragraph. This content can realistically be any type of content. Cards, Sections, Media...any rendered content could be passed in.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Elit penatibus dignissim placerat</h3> <h4> Ac non lacus sollicitudin</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "which_judicial_council_panel_oversees_the_court_interpreters_program",
              label:
                "Which Judicial Council panel oversees the court interpreters program?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Ac non lacus sollicitudin</h3> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "how_can_courts_identify_certified_or_registered_court_interpreters",
              label:
                "How can courts identify certified or registered court interpreters?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
          ],
        }),
        Accordion({
          variant: "default",
          open_first: false,
          open_on_load: "",
          expand_button: false,
          heading: 'Accordion example 3',
          lead: "",
          items: [
            {
              id: "judicial_council_role",
              label:
                "What is the Judicial Council of California's role in the current court interpreter program?",
              content:
                "<p>This is text in a paragraph. This content can realistically be any type of content. Cards, Sections, Media...any rendered content could be passed in.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Elit penatibus dignissim placerat</h3> <h4> Ac non lacus sollicitudin</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "which_judicial_council_panel_oversees_the_court_interpreters_program",
              label:
                "Which Judicial Council panel oversees the court interpreters program?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Ac non lacus sollicitudin</h3> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "how_can_courts_identify_certified_or_registered_court_interpreters",
              label:
                "How can courts identify certified or registered court interpreters?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
          ],
        }),
        Body({
          variant: "default",
          heading: "",
          lead: "",
          content: body_content.join(' '),
          subheading: false,
          aside: false,
        }),
      ],
    },
    section_2: {
      variant: "warm-dark-x",
      sub_component_layout: "default",
      align_items: false,
      measure: 69,
      gap: false,
      grid_min_width: false,
      sidebar_direction: false,
      sidebar_width: false,
      brow_data: {
        "variant": "heading",
        "part_one": "Brow Example",
        "part_two": ""
      },
      heading: "Section Example",
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia. Prave, nequiter, turpiter cenabat; Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus.</p>",
      first_component: false,
      button_data: false,
      sub_component_data: [
        Body({
          variant: "default",
          heading: "This is a body heading",
          lead: "",
          content: body_content.join(' '),
          subheading: false,
          aside: false,
        }),
        Accordion({
          variant: "default",
          open_first: false,
          open_on_load: "",
          expand_button: false,
          heading: 'Accordion example 4',
          lead: "",
          items: [
            {
              id: "judicial_council_role",
              label:
                "What is the Judicial Council of California's role in the current court interpreter program?",
              content:
                "<p>This is text in a paragraph. This content can realistically be any type of content. Cards, Sections, Media...any rendered content could be passed in.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Elit penatibus dignissim placerat</h3> <h4> Ac non lacus sollicitudin</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "which_judicial_council_panel_oversees_the_court_interpreters_program",
              label:
                "Which Judicial Council panel oversees the court interpreters program?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Ac non lacus sollicitudin</h3> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "how_can_courts_identify_certified_or_registered_court_interpreters",
              label:
                "How can courts identify certified or registered court interpreters?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
          ],
        }),
        Accordion({
          variant: "default",
          open_first: false,
          open_on_load: "",
          expand_button: false,
          heading: 'Accordion example 5',
          lead: "",
          items: [
            {
              id: "judicial_council_role",
              label:
                "What is the Judicial Council of California's role in the current court interpreter program?",
              content:
                "<p>This is text in a paragraph. This content can realistically be any type of content. Cards, Sections, Media...any rendered content could be passed in.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Elit penatibus dignissim placerat</h3> <h4> Ac non lacus sollicitudin</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "which_judicial_council_panel_oversees_the_court_interpreters_program",
              label:
                "Which Judicial Council panel oversees the court interpreters program?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Ac non lacus sollicitudin</h3> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
            {
              id: "how_can_courts_identify_certified_or_registered_court_interpreters",
              label:
                "How can courts identify certified or registered court interpreters?",
              content:
                "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
            },
          ],
        }),
      ],
    },
    section_3: {
      variant: "default",
      sub_component_layout: "default",
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
        ActionList({
          variant: "default",
          heading: "Action List Example 1",
          text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
          links: [
            {
              label: "Certified Interpreter",
              description: "<p>This is a description that goes along with the link.</p>",
              button_data :{
                label: "Learn more",
                href: "#",
                variant: "secondary",
              }
            },
            {
              label: "Registered Interpreter",
              description: "",
              button_data :{
                label: "Learn more",
                href: "#",
                variant: "secondary",
              }
            },
            {
              label: "Certified interpreter for American SIgn Language (ASL)",
              description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
              button_data :{
                label: "Learn more",
                href: "#",
                variant: "secondary",
              }
            },
          ],
        }),
        ActionList({
          variant: "default",
          heading: "Action List Example 2",
          text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
          links: [
            {
              label: "Certified Interpreter",
              description: "<p>This is a description that goes along with the link.</p>",
              button_data :{
                label: "Learn more",
                href: "#",
                variant: "secondary",
              }
            },
            {
              label: "Registered Interpreter",
              description: "",
              button_data :{
                label: "Learn more",
                href: "#",
                variant: "secondary",
              }
            },
          ],
        }),
        Body({
          variant: "default",
          heading: "",
          lead: "",
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
