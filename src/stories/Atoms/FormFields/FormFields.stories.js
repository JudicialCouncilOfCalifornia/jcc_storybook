import readme from './readme.md';
import data from './FormFields.data';
import FormFields from './FormFields.twig';
import './FormFields.css';
// import './FormFields.js';

export default {
  title: 'Atoms/FormFields',
  component: FormFields,
  parameters: {
    layout: 'padded',
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "FormFields variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return FormFields({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the FormFields.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
