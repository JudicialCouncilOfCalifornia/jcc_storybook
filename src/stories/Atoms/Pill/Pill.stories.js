import readme from "./readme.md";
import data from "./Pill.data";
import Pill from "./Pill.twig";
import "./Pill.css";

export default {
  title: "Atoms/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
    notes: readme,
  },
  argTypes: {},
};

const Template = ({ ...args }) => {
  return Pill({ ...args });
};

export const Default = Template.bind({});

Default.args = data.default;
