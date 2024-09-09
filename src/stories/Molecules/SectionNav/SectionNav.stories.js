import readme from "./readme.md";
import data from "./SectionNav.data";
import SectionNav from "./SectionNav.twig";
import "./SectionNav.css";
import "./SectionNavMobile.css";
import "./SectionNav.js";

export default {
  title: "Molecules/SectionNav",
  component: SectionNav,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SectionNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;