import readme from './readme.md';
import data from './FormFeilds.data';
import FormFeilds from './FormFeilds.twig';
import './FormFeilds.css';
// import './FormFeilds.js';

export default {
  title: 'Atoms/FormFeilds',
  component: FormFeilds,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Don't show the mock drupal attributes.
    attributes: {table: {disable: true}},
    // Variant select is a pretty common arg.
    variant: {
      description: "FormFeilds variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return FormFeilds({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the FormFeilds.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
