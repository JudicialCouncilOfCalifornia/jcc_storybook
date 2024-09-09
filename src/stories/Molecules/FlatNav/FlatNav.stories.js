import readme from "./readme.md";
import data from "./FlatNav.data";
import FlatNav from "./FlatNav.twig";
import "./FlatNav.css";

export default {
  title: "Molecules/FlatNav",
  component: FlatNav,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return FlatNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;