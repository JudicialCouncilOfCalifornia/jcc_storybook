import readme from "./readme.md";
import Imposter from "./Imposter.twig";
import "./Imposter.css";

export default {
  title: "Layout/Imposter",
  component: Imposter,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    positioning: {
      description:
        "Sets the impostor positioning relative to its containing element, or the page.",
      table: { defaultValue: { summary: "absolute (the containing element)" } },
      control: { type: "radio" },
      options: ["absolute", "fixed"],
    },
    main: { table: { disable: true } },
    imposter: { table: { disable: true } },
  },
};

const Template = ({ ...args }) => {
  return Imposter({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  positioning: "absolute",
  main: "",
  imposter: "",
};
