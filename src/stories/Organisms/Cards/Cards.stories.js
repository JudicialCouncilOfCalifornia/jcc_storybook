import drupalAttribute from 'drupal-attribute'

import Cards from './Cards.twig';
import readme from './readme.md';
import './Cards.css';

import Card from '../../Molecules/Card/Card.twig';
import {
  Default as CardDefault,
  MediaLeft as CardMediaLeft,
  MediaRight as CardMediaRight,
  Striped as CardStriped,
} from '../../Molecules/Card/Card.stories';

export default {
  title: 'Organisms/Cards',
  component: Cards,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "COMING SOON: See `Section` component for variant values.",
      table: {defaultValue: {summary: "default"}},
    },
    card_width: {
      description: "The minimum width of an individual card. See the `Layout: Grid` layout example for more info and to experiment.",
      table: {defaultValue: {summary: "30ch"}},
    },
    card_variant: {
      description: "We can set the `Card` variant at the `Cards` wrapper level for consistency within a group of cards.",
      table: {defaultValue: {summary: "default"}},
      control: { type: 'select' },
      options: ['default', 'bordered-center', 'media-left', 'media-right', 'overlay'],
    },  
    items: {
      table: {
        disable: true,
      }
    },
    attributes: {
      table: {
        disable: true,
      }
    }
  }

};

const Template = ({ ...args }) => {
  return Cards({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  card_width: "30ch",
  card_variant: "default",
  items: [
    Card({ ...CardDefault.args }),
    Card({ ...CardDefault.args }),
    Card({ ...CardDefault.args }),
    Card({ ...CardDefault.args }),
  ],
  attributes: new drupalAttribute(),
};

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  variant: "",
  card_width: "",
  card_variant: "",
  items: [
    Card({ ...CardMediaLeft.args }),
  ],
  attributes: new drupalAttribute(),
};

export const MediaRight = Template.bind({});
MediaRight.args = {
  variant: "",
  card_width: "",
  card_variant: "",
  items: [
    Card({ ...CardMediaRight.args }),
  ],
  attributes: new drupalAttribute(),
};

export const Striped = Template.bind({});
Striped.args = {
  variant: "",
  card_width: "45ch",
  card_variant: "",
  items: [
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
  ],
  attributes: new drupalAttribute(),
};

export const Striped4 = Template.bind({});
Striped4.args = {
  variant: "",
  card_width: "45ch",
  card_variant: "",
  items: [
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
  ],
  attributes: new drupalAttribute(),
};
