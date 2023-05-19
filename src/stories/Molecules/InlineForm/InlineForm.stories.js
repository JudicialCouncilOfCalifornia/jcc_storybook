import readme from './readme.md';
import data from './InlineForm.data';
import InlineForm from './InlineForm.twig';
import './InlineForm.css';

export default {
  title: 'Molecules/InlineForm',
  component: InlineForm,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    variant: {
      table: { disable: true },
      control: false,
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return InlineForm({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

// Bind the Default component variant for this component.
export const Multi = Template.bind({});
Multi.args = data.multi;
