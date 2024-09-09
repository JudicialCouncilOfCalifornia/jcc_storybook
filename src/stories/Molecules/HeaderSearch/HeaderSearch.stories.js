import readme from "./readme.md";
import data from "./HeaderSearch.data";
import HeaderSearch from "./HeaderSearch.twig";
import "./HeaderSearch.css";
import "./HeaderSearch.js";

export default {
  title: "Molecules/HeaderSearch",
  component: HeaderSearch,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    // Variant select is a pretty common arg.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return HeaderSearch({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

// Bind the Default component variant for this component.
export const NoToggle = Template.bind({});
NoToggle.args = data.no_toggle;
