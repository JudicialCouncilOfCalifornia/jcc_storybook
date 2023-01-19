import readme from './readme.md';
import data from './GreyHero.data';
import GreyHero from './GreyHero.twig';
import './GreyHero.css';
// import './GreyHero.js';

export default {
  title: 'Molecules/GreyHero',
  component: GreyHero,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "GreyHero variant.",
      table: {defaultValue: {summary: 'simple-layout'}},
      control: { type: 'radio' },
      options: ['simple-layout', 'layout-with-image'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return GreyHero({ ...args });
};

// Bind the Default component variant for this component.
export const SimpleLayout = Template.bind({});
SimpleLayout.args = data.simple_layout;

export const LayoutWithImage = Template.bind({});
LayoutWithImage.args = data.layout_with_image;
