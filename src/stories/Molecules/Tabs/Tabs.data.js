// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

const tabContentData = [
  {
    label: "Working With Interpreters",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus",
  },
  {
    label: "Information about Court Processess",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus.",
  },
  {
    label: "Another horizontal tab",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus",
  },
  {
    label: "Another horizontal tab",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus",
  },
]

const tabAltContentData = [
  {
    label: "Featured Items",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus",
  },
  {
    label: "Latest Items",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus.",
  },
  {
    label: "Popular Items",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus",
  },
  {
    label: "Favorited items",
    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus. Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tincidunt erat fames, tempor laoreet a facilisis nam aliquet nisi tellus",
  },
]

export default {
  default: {
    variant: "default",
    items: tabContentData,
    attributes: new drupalAttribute(),
    tablist_attributes: new drupalAttribute(),
    tabpanel_attributes: new drupalAttribute(),
  },
  alternate: {
    variant: "alternate",
    items: tabAltContentData,
    attributes: new drupalAttribute(),
    tablist_attributes: new drupalAttribute(),
    tabpanel_attributes: new drupalAttribute(),
  }
}
