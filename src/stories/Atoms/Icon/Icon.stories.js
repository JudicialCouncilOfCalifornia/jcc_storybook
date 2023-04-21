import readme from "./readme.md";
import data from "./Icon.data";
import Icon from "./Icon.twig";
import "./Icon.css";

const iconsJSON = require("../../../assets/icons.json");

export default {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    notes: readme,
  },
  argTypes: {
    icon_path: { table: { disable: true } },
    icon: {
      description:
        'Available icons are in an svg "sprite" file built from the icons in `assets/icons`. i.e. `documents`, `speaker`, `toolkit`',
      table: { defaultValue: { summary: false } },
      control: { type: "select" },
      options: iconsJSON,
    },
    color: {
      description:
        "Can be any color defined in the scheme CSS file, i.e. `assets/css/scheme-default.css` or any scheme file that overrides it. If the defined color is `--color-primary-dark-x` then the color name is `primary-dark-x`.  `false` inherits the current `--color` value.",
      table: { defaultValue: { summary: false } },
      control: { type: "select" },
      options: [false, "black", "white"],
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Icon({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;
