import Accordion from "../../Molecules/Accordion/Accordion.twig";
import ActionList from "../../Molecules/ActionList/ActionList.twig";
import Body from "../../Molecules/Body/Body.twig";
import Button from "../../Atoms/Button/Button.twig";
import Card from "../../Molecules/Card/Card.twig";
import Offcanvas from "../../Molecules/Offcanvas/Offcanvas.twig";

// Default data for this page.
import * as Data from "../../Data/DefaultData.data";

let body_content = [
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia. Prave, nequiter, turpiter cenabat; Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus.</p>",
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
    section_nav: {
      variant: "alternate",
      label: "2nd District",
      show_label: true,
      display_mobile_version: true,
      links: Data.default_primary_nav_links_data,
      mobile_links: Data.default_primary_nav_mobile_links_data,
      nav_trigger_data: {
        label: "2nd District",
        show_label: true,
      }
    },
    breadcrumb: Data.breadcrumb_links_data,
    hero_hangover: {
      hangover_hide_compact: false,
      hangover_offset: 22,
      background: null,
      brow: {
        part_one: 'Brow Example',	
        part_two: '2024',	
      },
      heading: "This page is for testing a mix of content elements",
      text: "This is some text that goes along with the heading. It can be used to provide a little more context to the heading.",
      hangover_content: [
        Card({
          variant: "bordered",
          media: '',
          heading: "Test Blurb content",
          text: "<p>Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre.</p>",
        }),
      ],
      bottom_content: "This is example bottom content for this hangover hero. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre. This content is not part of the content below.",
      blurb: true,
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
