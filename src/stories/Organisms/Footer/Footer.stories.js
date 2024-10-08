import readme from "./readme.md";
import data from "./Footer.data";
import Footer from "./Footer.twig";
import "./Footer.css";

export default {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "Footer variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default", "alternate"],
    },
    // More args here.
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Footer({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
