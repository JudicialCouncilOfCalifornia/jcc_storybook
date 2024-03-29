import readme from "./readme.md";
import Box from "./Box.twig";

export default {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
    notes: readme,
  },
};

const Template = ({ ...args }) => {
  return Box({ ...args });
};

export const Default = Template.bind({});
Default.args = {};
