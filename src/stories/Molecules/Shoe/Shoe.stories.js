import readme from './readme.md';
import data from './Shoe.data';
import Shoe from './Shoe.twig';
import './Shoe.css';

export default {
  title: 'Molecules/Shoe',
  component: Shoe,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Shoe({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Shoe.data.js file.
Default.args = data.default;
