import readme from './readme.md';
import data from './Hangover.data';
import Hangover from './Hangover.twig';
import './Hangover.css';
// import './Hangover.js';

export default {
  title: 'Molecules/Hangover',
  component: Hangover,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Hangover({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Hangover.data.js file.
Default.args = data.default;
