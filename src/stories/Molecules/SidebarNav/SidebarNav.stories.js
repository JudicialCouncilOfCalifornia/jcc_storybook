import readme from './readme.md';
import data from './SidebarNav.data';
import SidebarNav from './SidebarNav.twig';
import './SidebarNav.css';
import './SidebarNav.js';

export default {
  title: 'Molecules/SidebarNav',
  component: SidebarNav,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SidebarNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the SidebarNav.data.js file.
Default.args = data.default;
