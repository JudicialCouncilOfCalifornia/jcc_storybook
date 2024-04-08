import logo from "../../Atoms/SiteBranding/Council-Logo.svg";
import Card from "../../Molecules/Card/Card.twig";
import Accordion from "../../Molecules/Accordion/Accordion.twig";
import TeaserPlusList from "../../Organisms/TeaserPlusList/TeaserPlusList.twig";

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
    hero: {
      variant: "content-bg",
      content_justify: "left",
      bg_tint: false,
      background_image_url:
        "https://source.unsplash.com/random/900×500/?images",
      card_data: {
        variant: "default",
        first_component: true,
        media: false,
        heading: "Language Access",
        subheading: false,
        text: "<p>Mission statement or explanation of physical and people resources. Lorem ipsum dolor sit amet lorem ips consectetur adipisciue accumsan metus.</p>",
        button_data: false,
      },
    },
    section_1: {
      first_component: false,
      variant: "primary-dark-xx-stripe",
      card_variant: "card--media-right",
      sub_component_layout: "switcher",
      // center, stack
      align_items: false,
      // center, switcher
      measure: 69,
      // cluster, grid, reel, stack, switcher
      gap: false,
      // grid
      grid_min_width: false,
      // with-sidebar
      sidebar_direction: false,
      // with-sidebar
      sidebar_width: false,
      background_image_url: "",
      brow_data: {
        part_one: "Introduction",
        part_two: false,
        variant: "heading",
      },
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_data: [
        Card({
          variant: "media-right",
          media:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          heading: "About Language Access",
          text: "<p>Describes Language Access at the courts as both physical and *human* translation resources available. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre.</p><p><a href='#' class='button button--text'>See Language Resources</a></p><p><a href='#' class='button button--text'>Learn About Court Interpreters</a></p>",
        }),
      ],
    },
    section_2: {
      first_component: false,
      variant: "default",
      card_variant: "",
      sub_component_layout: "grid",
      // center, stack
      align_items: false,
      // center, switcher
      measure: false,
      // cluster, grid, reel, stack, switcher
      gap: false,
      // grid
      grid_min_width: "41",
      // with-sidebar
      sidebar_direction: false,
      // with-sidebar
      sidebar_width: false,
      background_image_url: "",
      brow_data: false,
      heading: "Start Here For Language Access",
      text: false,
      button_data: false,
      sub_component_data: [
        Card({
          variant: "striped",
          clickable_card: true,
          background: null,
          icon_data: {
            icon: "documents",
            color: false,
          },
          heading: "Language Access Resources for Courts",
          text: false,
          button_data: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
        }),
        Card({
          variant: "striped",
          clickable_card: true,
          background: null,
          icon_data: {
            icon: "speaker",
            color: false,
          },
          heading: "Search for an Interpreter",
          text: false,
          button_data: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
        }),
        Card({
          variant: "striped",
          clickable_card: true,
          background: null,
          icon_data: {
            icon: "speaker",
            color: false,
          },
          heading: "Become an Court Interpreter",
          text: false,
          button_data: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
        }),
        Card({
          variant: "striped",
          clickable_card: true,
          background: null,
          icon_data: {
            icon: "exam",
            color: false,
          },
          heading: "Find Court Interpreter Exam Information",
          text: false,
          button_data: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
        }),
      ],
      section_classes: ["cards"],
    },
    section_3: {
      first_component: false,
      variant: "warm-dark-x",
      card_variant: "",
      sub_component_layout: "grid",
      // center, stack
      align_items: false,
      // center, switcher
      measure: false,
      // cluster, grid, reel, stack, switcher
      gap: false,
      // grid
      grid_min_width: "41",
      // with-sidebar
      sidebar_direction: false,
      // with-sidebar
      sidebar_width: false,
      background_image_url: "",
      brow_data: false,
      heading: "Latest News",
      text: false,
      button_data: {
        label: "See All News",
        href: "#",
        type: "primary",
        size: "normal",
      },
      sub_component_data: [
        TeaserPlusList({
          teaser: {
            brow_data: {
              part_one: "Orders",
              part_two: "July 12, 2022",
            },
            heading: "2DCA Protocols for In-Person Oral Argument",
            text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the...",
            href: "https://courts.ca.gov",
          },
          list_items: [
            {
              link: {
                label: "Job Announcement – Appellate Court Attorney",
                href: "#",
              },
              footer: "May 25, 2022",
            },
            {
              link: {
                label:
                  "Second District Court of Appeal to resume in‑person arguments effective May 2022",
                href: "#",
              },
              footer: "May 25, 2022",
            },
          ],
        }),
      ],
    },
    section_4: {
      first_component: false,
      variant: "white",
      card_variant: "",
      sub_component_layout: "grid",
      // center, stack
      align_items: false,
      // center, switcher
      measure: false,
      // cluster, grid, reel, stack, switcher
      gap: false,
      // grid
      grid_min_width: "41",
      // with-sidebar
      sidebar_direction: false,
      // with-sidebar
      sidebar_width: false,
      background_image_url: "",
      brow_data: false,
      heading: false,
      text: false,
      button_data: false,
      sub_component_data: [
        Card({
          media:
            '<img src="https://source.unsplash.com/random/900×700/?office" />',
          heading: "Interested in becoming a court interpreter?",
          text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
          button_data: {
            label: "Become a Court Interpreter",
            href: "#",
            variant: "primary",
            size: "small",
          },
          // A variant type that contols the layout and style of the component.
          variant: "bordered-center",
        }),
        Card({
          media:
            '<div class="frame"><img src="https://source.unsplash.com/random/900×700/?building,old" /></div>',
          heading: "LEP Court Users",
          text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet.</p>",
          button_data: {
            label: "Self-Help for LEP Court Users",
            href: "#",
            variant: "primary",
            size: "small",
          },
          // A variant type that contols the layout and style of the component.
          variant: "bordered-center",
        }),
      ],
      section_classes: ["cards"],
    },
    section_5: {first_component: false,
      variant: "white",
      card_variant: "",
      sub_component_layout: "stack",     
      align_items: false,      
      measure: false,      
      gap: false,     
      grid_min_width: "41",     
      sidebar_direction: false,      
      sidebar_width: false,
      background_image_url: "",
      brow_data: false,
      heading: false,
      text: false,
      button_data: false,
      sub_component_data: [
      Accordion({  
      variant: "default",
      open_first: false,
      open_on_load: "",
      expand_button: true,
      heading: 'This is a heading',      
      items: [
        {
          id: "judicial_council_role",
          label:
            "What is the Judicial Council of California's role in the current court interpreter program?",
          content:
            "<p>This is text in a paragraph. This content can realistically be any type of content. Cards, Sections, Media...any rendered content could be passed in.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <h3>Elit penatibus dignissim placerat</h3> <h4> Ac non lacus sollicitudin</h4><p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p> <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
        },       
      ],
    }),
    Accordion({  
      variant: "default",
      open_first: false,
      open_on_load: "",
      expand_button: true,
      heading: 'This is a heading',      
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
      ],
    }),
    Accordion({  
      variant: "default",
      open_first: false,
      open_on_load: "",
      expand_button: true,
      heading: 'This is a heading',      
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
  ]
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
