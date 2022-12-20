import readme from './readme.md';
import drupalAttribute from 'drupal-attribute'
import {{pascalCase name}} from './{{pascalCase name}}.twig';
import './{{pascalCase name}}.css';
// import './{{pascalCase name}}.js';

// Import any other components needed for building this component. i.e.
// import Button from '../Button/Button.twig';
// Use:
// Button({
//   label: "Button",
//   href: "#",
//   type: 'primary',
//   size: 'normal',
//   attributes: new drupalAttribute(),
// });

export default {
  title: '{{pascalCase type}}/{{pascalCase name}}',
  component: {{pascalCase name}},
  parameters: {
    notes: readme,
  }
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return {{pascalCase name}}({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  // Create any variables to pass to the Twig template. Keep it flat.
  main: "Content goes here.",
  // A variant type that controls the layout and style of the component.
  variant: "default",
  // drupalAttribute allows us to mock drupal attributes in storybook.
  attributes: new drupalAttribute(),
};

// // Bind additional component variants like this.
// export const [VariantName] = Template.bind({});
// [VariantName].args = {
//   // A variant type that controls the layout and style of the component.
//   variant: "default",
//   // Create any variables to pass to the Twig template.
//   content: "Content goes here.",
//   // drupalAttribute allows us to mock drupal attributes in storybook.
//   attributes: new drupalAttribute(),
// };
