import readme from "./readme.md";
import data from "./Cluster.data";
import Cluster from "./Cluster.twig";
import "./Cluster.css";

export default {
  title: "Layout/Cluster",
  component: Cluster,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Cluster({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Cluster.data.js file.
Default.args = data.default;
