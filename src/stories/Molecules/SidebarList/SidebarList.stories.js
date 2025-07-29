import readme from './readme.md';
import data from './SidebarList.data';
import SidebarList from './SidebarList.twig';
import './SidebarList.css';

export default {
  title: 'Molecules/SidebarList',
  component: SidebarList,
  parameters: {
    notes: readme,
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: "SidebarList variant.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['default', 'primary', 'secondary'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SidebarList({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the SidebarList.data.js file.
Default.args = data.default;

export const Subsection = Template.bind({});
Subsection.args = data.subsection;

export const Primary = Template.bind({});
Primary.args = data.primary;

export const Secondary = Template.bind({});
Secondary.args = data.secondary;