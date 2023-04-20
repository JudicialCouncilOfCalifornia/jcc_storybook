import readme from "./readme.md";
import Backgrounds from "./Backgrounds.twig";
import "./Backgrounds.css";

const schemeJSON = require("../../../assets/scheme-default.json");
const rows = schemeJSON.children[":root"].attributes;
const backgrounds = [];

for (const key in rows) {
  if (key.includes("--background-")) {
    const name = key.replace("--background-", "").replace(/\/\*.*\/\n\s*/, "");
    const splitName = name.split("-");
    backgrounds.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }
}

export default {
  title: "Scheme/Backgrounds",
  component: Backgrounds,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    backgrounds: { table: { disable: true } },
  },
};

const Template = ({ ...args }) => {
  return Backgrounds({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  backgrounds: backgrounds,
};
