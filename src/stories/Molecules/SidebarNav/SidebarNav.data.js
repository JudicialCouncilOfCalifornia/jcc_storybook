export default {
  default: {
    variant: "default",
    menu_heading: {
      title: 'Parent menu item',
      url: "#",
    },
    nav_trigger_data: {
      label: 'Parent menu item',
      show_label: false,
    },
    links: [
      {
        title: "Simple link",
        url: "#",
        attributes: [],
        in_active_trail: false,
      },
      {
        title: "Link with sublinks",
        url: "#",
        attributes: [],
        in_active_trail: true,
        links: [
          {
            title: "Simple link with extra words to test spacing",
            url: "#",
            attributes: [],
            in_active_trail: true,
          },
          {
            title: "Simple link",
            url: "#",
            attributes: [],
            in_active_trail: true,
            links: [
              {
                title: "Simple link",
                url: "#",
                attributes: [],
                is_current: true,
                in_active_trail: true,
              },
              {
                title: "Simple link",
                url: "#",
                attributes: [],
                in_active_trail: false,
              },
            ],
          },
        ],
      },
      {
        title: "Simple Link",
        url: "#",
        attributes: [],
        in_active_trail: false,
      },
      {
        title: "Simple link with extra words to test spacing",
        url: "#",
        attributes: [],
        in_active_trail: false,
      },
      {
        title: "Link with sublinks with extra words to test spacing",
        url: "#",
        attributes: [],
        in_active_trail: false,
        links: [
          {
            title: "Simple link",
            url: "#",
            attributes: [],
            in_active_trail: false,
          },
          {
            title: "Simple link",
            url: "#",
            attributes: [],
            in_active_trail: false,
          },
        ],
      },
    ],
  },
};
