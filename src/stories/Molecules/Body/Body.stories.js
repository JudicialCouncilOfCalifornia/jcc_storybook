import readme from './readme.md';
import data from './Body.data';
import Body from './Body.twig';
import './Body.css';

export default {
  title: 'Molecules/Body',
  component: Body,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    variant: {
      description: "Body variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
    heading: { table: { disable: true } },
    lead: { table: { disable: true } },
    content: { table: { disable: true } },
    subheading: { table: { disable: true } },
    aside: { table: { disable: true } },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Body({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

