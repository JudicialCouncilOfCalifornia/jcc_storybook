import readme from './readme.md';
import data from './NavTrigger.data';
import NavTrigger from './NavTrigger.twig';
import './NavTrigger.css';

export default {
  title: 'Atoms/NavTrigger',
  component: NavTrigger,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return NavTrigger({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

