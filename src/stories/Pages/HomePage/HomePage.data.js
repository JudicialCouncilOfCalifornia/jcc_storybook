import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    hero: {
      variant: 'content-bg',
      content_justify: 'left',
      bg_tint: false,
      background_image_url: 'https://source.unsplash.com/random/900×500/?images',
      card_data: {
        variant: "default",
        first_component: true,
        media: false,
        heading: "Language Access",
        subheading: false,
        text: "<p>Mission statement or explanation of physical and people resources. Lorem ipsum dolor sit amet lorem ips consectetur adipisciue accumsan metus.</p>",
        button_data: false,
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute()
    },
    section_1: {
      variant: 'primary-dark-xx-stripe',
      brow_data: {
        part_one: "Introduction",
        part_two: false,
        variant: 'heading',
        attributes: new drupalAttribute(),
      },
      heading: false,
      text: false,
      first_component: false,
      button_data: false,
      sub_component_template: "Card",
      sub_component_data: {
        variant: "media-right",
        media: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        media_caption: '<div class="caption"><p>Video text. Could be video title and video desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div>',
        heading: "About Language Access",
        text: "<p>Describes Language Access at the courts as both physical and *human* translation resources available. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre</p><a href='#' class='button button--text'>See Language Resources</a><a href='#' class='button button--text'>Learn About Court Interpreters</a>",
        button_data: false,
        attributes: new drupalAttribute(),
      },
      attributes: new drupalAttribute(),
    },
    section_2: {
      variant: "default",
      heading: 'Start Here For Language Access',
      sub_component_template: "Cards",
      sub_component_data: {
        attributes: new drupalAttribute(),
        variant: "",
        cardWidth: "45ch",
        items: [
          {
            variant: "striped",
            icon_data: {
              icon: "documents",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Language Access Resources for Courts",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            attributes: new drupalAttribute(),
          },
          {
            icon_data: {
              icon: "speaker",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Search for an Interpreter",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            variant: "striped",
            attributes: new drupalAttribute(),
          },
          {
            icon_data: {
              icon: "speaker",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Become an Court Interpreter",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            variant: "striped",
            attributes: new drupalAttribute(),
          },
          {
            icon_data: {
              icon: "exam",
              color: false,
              attributes: new drupalAttribute(),
            },
            heading: "Find Court Interpreter Exam Information",
            text: false,
            button_data: {
              label: "Button",
              href: "#",
              variant: "primary",
            },
            variant: "striped",
            attributes: new drupalAttribute(),
          },
        ],
      },
      attributes: new drupalAttribute(),
    },
    section_3: {
      brow: false,
      heading: 'Latest News',
      text: false,
      sub_component_template: "TeaserPlusList",
      sub_component_data: {
        teaser: {
          brow_data: {
            part_one: 'Orders',
            part_two: 'July 12, 2022',
            attributes: new drupalAttribute(),
          },
          heading: "2DCA Protocols for In-Person Oral Argument",
          text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the..."
        },
        list_items: [
          {
            link: {
              label: "Job Announcement – Appellate Court Attorney",
              href: "#"
            },
            footer: "May 25, 2022"
          },
          {
            link: {
              label: "Second District Court of Appeal to resume in‑person arguments effective May 2022",
              href: "#"
            },
            footer: "May 25, 2022"
          }
        ],
        attributes: new drupalAttribute(),
      },
      button_data: {
        label: "See All News",
        href: "#",
        type: 'primary',
        size: 'normal',
        attributes: new drupalAttribute(),
      },
      variant: 'warm-dark-x',
      first_component: false,
      attributes: new drupalAttribute(),
    },
    section_4: {
      brow_data: false,
      heading: false,
      text: false,
      sub_component_template: "Cards",
      sub_component_data: {
        variant: "",
        cardWidth: "30ch",
        attributes: new drupalAttribute(),
        items: [
          {
            media: '<img src="https://source.unsplash.com/random/900×700/?office" />',
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
            // drupalAttribute allows us to mock drupal attributes in storybook.
            attributes: new drupalAttribute(),
          },
          {
            media: '<div class="frame"><img src="https://source.unsplash.com/random/900×700/?building,old" /></div>',
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
            // drupalAttribute allows us to mock drupal attributes in storybook.
            attributes: new drupalAttribute(),
          },
        ],
      },
      button_data: false,
      variant: 'white',
      first_component: false,
      attributes: new drupalAttribute(),
    },
    attributes: new drupalAttribute(),
  }
}
