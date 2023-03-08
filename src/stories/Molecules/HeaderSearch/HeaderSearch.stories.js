import readme from './readme.md';
import data from './HeaderSearch.data';
import HeaderSearch from './HeaderSearch.twig';
import './HeaderSearch.css';
import './HeaderSearch.js';

export default {
  title: 'Molecules/HeaderSearch',
  component: HeaderSearch,
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return HeaderSearch({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the HeaderSearch.data.js file.
Default.args = data.default;
