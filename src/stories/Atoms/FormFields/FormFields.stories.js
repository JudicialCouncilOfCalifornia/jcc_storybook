import readme from "./readme.md";
import data from "./FormFields.data";
import FormFields from "./FormFields.twig";
import "./FormFields.css";

export default {
  title: "Atoms/FormFields",
  component: FormFields,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "FormFields variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default", "variant_one"],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return FormFields({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
// Data comes from the FormFields.data.js file.
Default.args = data.default;
