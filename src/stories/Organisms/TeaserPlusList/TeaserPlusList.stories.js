import readme from "./readme.md";
import data from "./TeaserPlusList.data";
import TeaserPlusList from "./TeaserPlusList.twig";
import "./TeaserPlusList.css";

export default {
  title: "Organisms/TeaserPlusList",
  component: TeaserPlusList,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    variant: {
      description:
          "Variant name for teaser orientation.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "select" },
      options: [
        "default",
        "teaser-list--stacked",
      ],
    }
  },
};

const Template = ({ ...args }) => {
  return TeaserPlusList({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;
export const Stacked = Template.bind({});
Stacked.args = data.stacked;