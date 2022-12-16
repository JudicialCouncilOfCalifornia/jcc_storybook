import drupalAttribute from 'drupal-attribute'

import Cards from './Cards.twig';
import './Cards.css';
import './Cards.js';

import Card from '../../Molecules/Card/Card.twig';
import {
  Default as CardDefault,
  MediaLeft as CardMediaLeft,
  MediaRight as CardMediaRight,
  Striped as CardStriped,
} from '../../Molecules/Card/Card.stories';

export default {
  title: 'Organisms/Cards',
  component: Cards
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Cards({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  // Create any variables to pass to the Twig template.
  // A variant type that contols the layout and style of the component.
  variant: "default",
  cardWidth: "30ch",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
  items: [
    Card({ ...CardDefault.args }),
    Card({ ...CardDefault.args }),
    Card({ ...CardDefault.args }),
    Card({ ...CardDefault.args }),
  ],
};

// Bind the Default component variant for this component.
export const MediaLeft = Template.bind({});
MediaLeft.args = {
  // Create any variables to pass to the Twig template.
  // A variant type that contols the layout and style of the component.
  variant: "",
  cardWidth: "",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
  items: [
    Card({ ...CardMediaLeft.args }),
  ],
};

// Bind the Default component variant for this component.
export const MediaRight = Template.bind({});
MediaRight.args = {
  // Create any variables to pass to the Twig template.
  // A variant type that contols the layout and style of the component.
  variant: "",
  cardWidth: "",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
  items: [
    Card({ ...CardMediaRight.args }),
  ],
};

// Bind the Default component variant for this component.
export const Striped = Template.bind({});
Striped.args = {
  // Create any variables to pass to the Twig template.
  // A variant type that contols the layout and style of the component.
  variant: "",
  cardWidth: "45ch",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
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
};

// Bind the Default component variant for this component.
export const Striped4 = Template.bind({});
Striped4.args = {
  // Create any variables to pass to the Twig template.
  // A variant type that contols the layout and style of the component.
  variant: "",
  cardWidth: "45ch",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
  items: [
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
    Card({ ...CardStriped.args }),
  ],
};
