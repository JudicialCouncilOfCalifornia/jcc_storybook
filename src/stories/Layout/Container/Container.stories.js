import readme from './readme.md';
import data from './Container.data';
import Container from './Container.twig';
import './Container.css';

export default {
  title: 'Layout/Container',
  component: Container,
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
  return Container({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Container.data.js file.
Default.args = data.default;
