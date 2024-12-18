import readme from "./readme.md";
import data from "./Cards.data";
import Cards from "./Cards.twig";
import "./Cards.css";
import "./Cards.js";

export default {
  title: "Organisms/Cards",
  component: Cards,
  parameters: {
    notes: readme,
  },
  argTypes: {
    first_component: {
      description: "If true, sets the section heading to H1",
      table: { defaultValue: { summary: false } },
    },
    variant: {
      description:
        "Variant name based on background color which also sets complimentary styles.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "select" },
      options: [
        "",
        "base-light-xxx",
        "base-dark-x",
        "base-dark-xxx",
        "accent-warm-light-xxxx",
        "accent-warm-dark-x",
        "red",
        "brown",
        "primary-light-xxx",
        "primary-light-x",
        "primary-dark-x",
        "primary-dark-xxx",
        "secondary",
        "secondary-dark-xx",
      ],
    },
    card_variant: {
      description: "Variant for the cards.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "select" },
      options: [
        "card--default",
        "card--media-left",
        "card--media-right",
        "card--bordered",
        "card--bordered-center",
        "card--overlay",
        "card--striped",
        "card--striped-aligned",
      ],
    },
    sub_component_layout: {
      description: "Sets the layout type for sub component items.",
      table: { defaultValue: { summary: "switcher" } },
      control: { type: "select" },
      options: [
        "center",
        "cluster",
        "grid",
        "reel",
        "with-sidebar",
        "stack",
        "switcher",
        "flex flex--75-25",
        "flex flex--70-30",
        "flex flex--60-40",
      ],
    },
    // center, stack
    align_items: {
      description: "Sets the flex alignment for **Center** and **Stack**.",
      table: { defaultValue: { summary: "flex-start" } },
      control: { type: "select" },
      options: ["flex-start", "center", "flex-end"],
    },
    // center, switcher
    measure: {
      description:
        "Sets the *measure* or ideal content width or switching point for **Center** or **Switcher**.",
      table: { defaultValue: { summary: "60" } },
      control: { type: "number" },
    },
    // cluster, grid, reel, stack, switcher
    gap: {
      description:
        "Sets the *gap* size from our *modular scale* for **Cluster, Grid, Reel, Stack** and **Switcher**.",
      table: { defaultValue: { summary: "--s1" } },
      control: { type: "select" },
      options: [
        "--s-5",
        "--s-4",
        "--s-3",
        "--s-2",
        "--s-1",
        "--s0",
        "--s1",
        "--s2",
        "--s3",
        "--s4",
        "--s5",
      ],
    },
    // grid
    grid_min_width: {
      description: "Sets the min width of items in the **Grid** in ch.",
      table: { defaultValue: { summary: "20" } },
      control: { type: "number" },
    },
    // with-sidebar
    sidebar_direction: {
      description:
        "Sets the direction for the **Sidebar** layout where the default *row* is sidebar on the left and *row-reverse* is sidebar on the right.",
      table: { defaultValue: { summary: "row" } },
      control: { type: "select" },
      options: ["row", "row-reverse"],
    },
    // with-sidebar
    sidebar_width: {
      description: "Sets the width in ch for the **Sidebar** element.",
      table: { defaultValue: { summary: "20" } },
      control: { type: "number" },
    },
    brow_data: {
      description: "Populates the Brow template.",
      table: { defaultValue: { summary: false } },
    },
    heading: {
      description: "Populates the heading.",
      table: { defaultValue: { summary: false } },
    },
    text: {
      description: "Populates the lead text.",
      table: { defaultValue: { summary: false } },
    },
    sub_component_data: {
      description:
        "Populates the template specified in sub_component_template.",
      table: { defaultValue: { summary: null } },
      control: { type: "object" },
    },
    button_data: {
      description: "Populates the Button template.",
      table: { defaultValue: { summary: false } },
    },
  },
};

const Template = ({ ...args }) => {
  return Cards({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const Bordered = Template.bind({});
Bordered.args = data.bordered;

export const BorderedCenter = Template.bind({});
BorderedCenter.args = data.bordered_center;

export const MediaLeft = Template.bind({});
MediaLeft.args = data.media_left;

export const MediaRight = Template.bind({});
MediaRight.args = data.media_right;

export const Striped = Template.bind({});
Striped.args = data.striped;

export const StripedAligned = Template.bind({});
StripedAligned.args = data.striped_aligned;

export const MediaLink = Template.bind({});
MediaLink.args = data.media_link;
