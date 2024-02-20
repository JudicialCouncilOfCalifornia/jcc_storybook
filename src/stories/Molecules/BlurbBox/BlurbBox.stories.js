import readme from './readme.md';
import data from './BlurbBox.data';
import BlurbBox from './BlurbBox.twig';
import './BlurbBox.css';

export default {
  title: 'Molecules/BlurbBox',
  component: BlurbBox,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return BlurbBox({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
