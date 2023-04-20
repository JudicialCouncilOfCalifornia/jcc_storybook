import readme from "./readme.md";
import data from "./Sidebar.data";
import Sidebar from "./Sidebar.twig";
import "./Sidebar.css";
// import './Sidebar.js';

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    sidebar_direction: {
      description:
        "The flex direction to determine which side the sidebar is on.",
      table: { defaultValue: { summary: "row" } },
      control: { type: "radio" },
      options: ["row", "row-reverse"],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Sidebar({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Sidebar.data.js file.
Default.args = data.default;
