import readme from "./readme.md";
import data from "./Brow.data";
import Brow from "./Brow.twig";
import "./Brow.css";

export default {
  title: "Atoms/Brow",
  component: Brow,
  parameters: {
    layout: "centered",
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "The component variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default", "heading"],
    },
    part_one: {
      description:
        "The first part of the Brow, usually colored by `--accent-color` value.",
      table: { defaultValue: { summary: false } },
    },
    part_two: {
      description:
        "The second part of the Brow, usually colored by `--color` value. Appears after a `|`.",
      table: { defaultValue: { summary: false } },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Brow({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const DafaultWithDate = Template.bind({});
DafaultWithDate.args = data.default_with_date;

export const Heading = Template.bind({});
Heading.args = data.heading;
