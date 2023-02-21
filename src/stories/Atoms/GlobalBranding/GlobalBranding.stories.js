import readme from './readme.md';
import data from './GlobalBranding.data';
import GlobalBranding from './GlobalBranding.twig';
import './GlobalBranding.css';

export default {
  title: 'Atoms/GlobalBranding',
  component: GlobalBranding,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "GlobalBranding variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'inverted'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return GlobalBranding({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the GlobalBranding.data.js file.
Default.args = data.default;
