import drupalAttribute from 'drupal-attribute'
import Card from '../../Molecules/Card/Card.twig';
import {
  Default as CardDefault,
  Striped as CardStriped,
  NoMedia as CardNoMedia,
  NoMedia
} from '../../Molecules/Card/Card.stories';

// Random icon selector for Striped cards.
const iconsJSON = require('../../../assets/icons.json');
const randomIcon = () => {
  const num = Math.floor(Math.random() * iconsJSON.length);
  return iconsJSON[num];
}

export default {
  default: {
    first_component: false,
    variant: 'default',
    card_variant: 'default',
    sub_component_layout: 'flex flex--60-40',
    // center, stack
    align_items: false,
    // center, switcher
    measure: false,
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
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: false,
    sub_component_data: [
      Card({...NoMedia.args}),
      Card({...NoMedia.args}),
    ],
    attributes: new drupalAttribute().addClass('cards'),
  },
  media_left: {
    first_component: false,
    variant: 'default',
    card_variant: 'card--media-left',
    sub_component_layout: 'center stack',
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
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: false,
    sub_component_data: [
      Card({...CardDefault.args}),
      Card({...CardDefault.args}),
    ],
    attributes: new drupalAttribute().addClass('cards'),
  },
  media_right: {
    first_component: false,
    variant: 'default',
    card_variant: 'card--media-right',
    sub_component_layout: 'center stack',
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
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: false,
    sub_component_data: [
      Card({...CardDefault.args}),
      Card({...CardDefault.args}),
    ],
    attributes: new drupalAttribute().addClass('cards'),
  },
  striped: {
    first_component: false,
    variant: 'default',
    card_variant: '',
    sub_component_layout: 'grid',
    // center, stack
    align_items: false,
    // center, switcher
    measure: false,
    // cluster, grid, reel, stack, switcher
    gap: false,
    // grid
    grid_min_width: '41',
    // with-sidebar
    sidebar_direction: false,
    // with-sidebar
    sidebar_width: false,
    background_image_url: "",
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
      attributes: new drupalAttribute(),
    },
    heading: 'Heading Example',
    text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis arcu lacus, et facilisis orci facilisis ut.</p>',
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_data: [
      Card({...CardStriped.args}),
      Card({...CardStriped.args}),
      Card({...CardStriped.args}),
      Card({...CardStriped.args}),
      Card({...CardStriped.args}),
      Card({...CardStriped.args}),
    ],
    attributes: new drupalAttribute().addClass('cards'),
  },
}
