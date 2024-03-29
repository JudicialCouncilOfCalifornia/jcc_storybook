import readme from "./readme.md";
import data from "./Asset.data";
import Asset from "./Asset.twig";

export default {
  title: "Templates/Asset",
  component: Asset,
  parameters: {
    notes: readme,
  },
  argTypes: {
    sidebar_direction: {
      description: "Sidebar placement.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'radio' },
      options: ['row', 'row-reverse'],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Asset({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const WithNoSidebar = Template.bind({});
WithNoSidebar.args = data.with_no_sidebar;
