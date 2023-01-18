import readme from './readme.md';
import data from './Cover.data';
import Cover from './Cover.twig';
import './Cover.css';

export default {
  title: 'Layout/Cover',
  component: Cover,
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
  return Cover({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Cover.data.js file.
Default.args = data.default;

// Bind the Default component variant for this component.
export const NoFirst = Template.bind({});
// Data comes from the Cover.data.js file.
NoFirst.args = data.no_first;

// Bind the Default component variant for this component.
export const NoThird = Template.bind({});
// Data comes from the Cover.data.js file.
NoThird.args = data.no_third;
