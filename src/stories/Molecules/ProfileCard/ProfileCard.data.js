export default {
  default: {
    variant: "default",
    image: '<img src="https://picsum.photos/id/392/200/200" />',
    name: 'Avery Person',
    title: 'Associate Individual',
    content: 'Since 2009',
    url: '/iframe.html?args=&id=templates-profile--default&viewMode=story',
  },
  no_link_example: {
    variant: "no_link_example",
    image: '<img src="https://picsum.photos/id/392/200/200" />',
    name: false,
    title: false,
    content: false,
    url: false,
  },
  placeholder_image: {
    variant: "no_link_example",
    image: false,
    placeholder: {
      icon: "justice-avatar",
    },
    name: false,
    title: false,
    content: false,
    url: false,
  },
};
