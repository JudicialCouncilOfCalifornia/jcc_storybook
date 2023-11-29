import readme from "./readme.md";
import data from "./ResultExcerpt.data";
import ResultExcerpt from "./ResultExcerpt.twig";
import "./ResultExcerpt.css";

export default {
  title: "Molecules/ResultExcerpt",
  component: ResultExcerpt,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    variant: {
      description: "ResultExcerpt variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default"],
    },
  },
};

const Template = ({ ...args }) => {
  return ResultExcerpt({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
