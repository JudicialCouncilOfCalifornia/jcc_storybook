export default {
  default: {
    variant: "default",
    menu_heading: 'Parent menu item',
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
        active: true,
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
            active: true,
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
};
