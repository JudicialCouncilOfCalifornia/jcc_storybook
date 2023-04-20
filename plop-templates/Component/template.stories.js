import readme from './readme.md';
import data from './{{pascalCase name}}.data';
import {{pascalCase name}} from './{{pascalCase name}}.twig';
import './{{pascalCase name}}.css';
// import './{{pascalCase name}}.js';

export default {
  title: '{{pascalCase type}}/{{pascalCase name}}',
  component: {{pascalCase name}},
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "{{pascalCase name}} variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return {{pascalCase name}}({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the {{pascalCase name}}.data.js file.
Default.args = data.default;

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = data.[VariantName];
