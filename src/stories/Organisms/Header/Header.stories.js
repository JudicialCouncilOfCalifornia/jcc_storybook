import readme from './readme.md';
import data from './Header.data';
import Header from './Header.twig';
import './Header.css';

export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "Header variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Header({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
