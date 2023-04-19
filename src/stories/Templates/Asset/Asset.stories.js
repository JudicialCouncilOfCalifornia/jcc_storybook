import readme from "./readme.md";
import data from "./Asset.data";
import Asset from "./Asset.twig";

export default {
  title: "Templates/Asset",
  component: Asset,
  parameters: {
    notes: readme,
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
