import readme from "./readme.md";
import data from "./Button.data";
import Button from "./Button.twig";
import "./Button.css";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "The button variant name.",
      table: { defaultValue: { summary: "primary" } },
      control: { type: "select" },
      options: ["primary", "secondary", "text"],
    },
    size: {
      description: "The button size.",
      table: { defaultValue: { summary: "normal" } },
      control: { type: "select" },
      options: ["small", "normal", "large"],
    },
    label: {
      description: "The button text.",
      table: { defaultValue: { summary: false } },
    },
    href: { table: { disable: true } },
    icon: {
      description: "The button icon if not default arrow.",
      table: { defaultValue: { summary: "normal" } },
      control: { type: "select" },
      options: ["arrow-up", "thumbs-up"],
    },
    full_width: {
      description: "Full width if container allows.",
      control: { type: "radio" },
      options: [true, false],
    },
    label_align: {
      description: "Button label alignment.",
      table: { defaultValue: { summary: "normal" } },
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    collapsed: {
      description: "Show label on hover.",
      table: { defaultValue: { summary: false } },
      control: { type: "radio" },
      options: [true, false],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Button({ ...args });
};

// Bind the Primary variant for this component.
export const Primary = Template.bind({});
Primary.args = data.primary;

export const Secondary = Template.bind({});
Secondary.args = data.secondary;

export const Text = Template.bind({});
Text.args = data.text;
