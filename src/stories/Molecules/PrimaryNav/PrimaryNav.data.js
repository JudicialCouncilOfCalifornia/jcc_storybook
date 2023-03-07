// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    links: [
      {
        text: "Simple Link",
        is_current: true,
        id: "nav-section-one",
        url: "#",
        section_link: {
          text: "Navigation link",
          url: "#",
        },
      },
      {
        text: "Up To Seven",
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
        text: "More Than Seven",
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
            links: [
              {
                text: "Navigation link 5.1",
                url: "#",
              },
              {
                text: "Navigation link 5.2",
                url: "#",
              },
            ],
          },
        ],
        section_link: {
          text: "Navigation link",
          url: "#",
        },
      },
      {
        text: "Lots More",
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
    attributes: new drupalAttribute(),
  }
}
