import readme from "./readme.md";
import data from "./Alert.data";
import Alert from "./Alert.twig";
import "./Alert.css";
import "./Alert.js";

export default {
  title: "Molecules/Alert",
  component: Alert,
  parameters: {
    notes: readme,
  },
  argTypes: {
    type: {
      name: "Alert type",
      options: ["info", "warning", "status", "success", "error"],
      control: { type: "select" },
    },
    dismissible: {
      name: "Alert dismissible",
      control: "boolean",
    },
    variant: {
      table: { disable: true },
      control: false,
    },
    icon_data: {
      table: { disable: true },
      control: false,
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Alert({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

// Bind the Default component variant for this component.
export const Multiline = Template.bind({});
Multiline.args = data.multiline;
