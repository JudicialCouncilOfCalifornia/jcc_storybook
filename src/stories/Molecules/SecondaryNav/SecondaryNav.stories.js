import readme from "./readme.md";
import data from "./SecondaryNav.data";
import SecondaryNav from "./SecondaryNav.twig";
import "./SecondaryNav.css";

export default {
  title: "Molecules/SecondaryNav",
  component: SecondaryNav,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    // Variant select is a pretty common arg.
    variant: {
      description: "SecondaryNav variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default", "with-divider", "alternate", "alternate-with-divider"],
    },
    overflowing_variant: {
      description: "Overflowing variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default", "stack", "hidden"],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return SecondaryNav({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const StackOverflowing = Template.bind({});
StackOverflowing.args = data.stack_overflowing;

export const HiddenOverflowing = Template.bind({});
HiddenOverflowing.args = data.hidden_overflowing;

export const WithDivider = Template.bind({});
WithDivider.args = data.with_divider;

export const Alternate = Template.bind({});
Alternate.args = data.alternate;

export const AlternateWithDivider = Template.bind({});
AlternateWithDivider.args = data.alternate_with_divider;