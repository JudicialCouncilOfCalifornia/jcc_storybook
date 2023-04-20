import Switcher from "./Switcher.twig";
import readme from "./readme.md";
import "./Switcher.css";

export default {
  title: "Layout/Switcher",
  description: "This is a description of this component.",
  component: Switcher,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    measure: {
      description:
        "The width of the containing `.switcher` element that triggers the switch.",
      table: { defaultValue: { summary: "60ch" } },
      control: { type: "select" },
      options: ["50ch", "60ch", "70ch", "80ch", "90ch", "100ch"],
    },
    gap: {
      description: "The space between child elements.",
      table: { defaultValue: { summary: "--s1" } },
      control: { type: "select" },
      options: ["--s0", "--s1", "--s2", "--s3", "--s4", "--s5"],
    },
    num_items: {
      description: "Add or remove items for exploring this layout.",
      table: { defaultValue: { summary: "--s1" } },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Switcher({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = {
  measure: "50ch",
  gap: "--s1",
  num_items: 3,
};
