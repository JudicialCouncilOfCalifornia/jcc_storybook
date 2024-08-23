import readme from './readme.md';
import data from './MobileNav.data';
import MobileNav from './MobileNav.twig';
import './MobileNav.css';
import './MobileNav.js';

export default {
  title: 'Organisms/MobileNav',
  component: MobileNav,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "MobileNav variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'variant_one'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return MobileNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
