import readme from "./readme.md";
import data from "./Cover.data";
import Cover from "./Cover.twig";
import "./Cover.css";

export default {
  title: "Layout/Cover",
  component: Cover,
  parameters: {
    notes: readme,
  },
  argTypes: {},
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Cover({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Cover.data.js file.
Default.args = data.default;

// Bind the Default component variant for this component.
export const WithTop = Template.bind({});
// Data comes from the Cover.data.js file.
WithTop.args = data.with_top;

// Bind the Default component variant for this component.
export const WithBottom = Template.bind({});
// Data comes from the Cover.data.js file.
WithBottom.args = data.with_bottom;

// Bind the Default component variant for this component.
export const WithBoth = Template.bind({});
// Data comes from the Cover.data.js file.
WithBoth.args = data.with_both;
