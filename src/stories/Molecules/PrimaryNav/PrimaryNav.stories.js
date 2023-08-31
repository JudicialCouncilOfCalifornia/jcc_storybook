import readme from "./readme.md";
import data from "./PrimaryNav.data";
import PrimaryNav from "./PrimaryNav.twig";
import "./PrimaryNav.css";
import "./PrimaryNav.js";

export default {
  title: "Molecules/PrimaryNav",
  component: PrimaryNav,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return PrimaryNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

// Bind the Alternate component variant for this component.
export const Alternate = Template.bind({});
Alternate.args = data.alternate;