import readme from "./readme.md";
import Colors from "./Colors.twig";
import "./Colors.css";

const schemeJSON = require("../../../assets/scheme-default.json");
const rows = schemeJSON.children[":root"].attributes;
const colors = [];

for (const key in rows) {
  if (key.includes("--color-")) {
    const name = key.replace("--color-", "").replace(/\/\*.*\/\n\s*/, "");
    const splitName = name.split("-");
    colors.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }
}

export default {
  title: "Scheme/Colors",
  component: Colors,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    colors: { table: { disable: true } },
  },
};

const Template = ({ ...args }) => {
  return Colors({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  colors: colors,
};
