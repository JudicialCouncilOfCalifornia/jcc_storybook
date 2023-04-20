import readme from "./readme.md";
import data from "./Accordion.data";
import Accordion from "./Accordion.twig";
import "./Accordion.css";
import "./Accordion.js";

export default {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "Accordion variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default"],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Accordion({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the Accordion.data.js file.
Default.args = data.default;
