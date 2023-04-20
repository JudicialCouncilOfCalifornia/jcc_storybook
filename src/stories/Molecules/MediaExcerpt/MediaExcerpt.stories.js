import readme from "./readme.md";
import data from "./MediaExcerpt.data";
import MediaExcerpt from "./MediaExcerpt.twig";
import "./MediaExcerpt.css";

export default {
  title: "Molecules/MediaExcerpt",
  component: MediaExcerpt,
  parameters: {
    notes: readme,
    layout: "padded",
  },
  argTypes: {
    variant: {
      description: "MediaExcerpt variant.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "radio" },
      options: ["default"],
    },
  },
};

const Template = ({ ...args }) => {
  return MediaExcerpt({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
