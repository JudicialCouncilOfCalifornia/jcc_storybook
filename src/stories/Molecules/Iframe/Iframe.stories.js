import readme from './readme.md';
import data from './Iframe.data';
import Iframe from './Iframe.twig';
import './Iframe.css';

export default {
  title: 'Molecules/Iframe',
  component: Iframe,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "Iframe.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Iframe({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
