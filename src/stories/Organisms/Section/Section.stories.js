import readme from "./readme.md";
import data from "./Section.data";
import Section from "./Section.twig";
import "./Section.css";
import './Section.js';

export default {
  title: "Organisms/Section",
  component: Section,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description:
        "Variant name based on background color which also sets complimentary styles.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "select" },
      options: [
        "default",
        "white",
      ],
    },
    first_component: {
      description: "If true, sets the section heading to H1",
      table: { defaultValue: { summary: "default" } },
      control: { type: 'boolean' },
      options: [false, true],
    },
    bg_tint: {
      description:
        "Background color or tint if background image.",
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
        "secondary-dark-x",
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
  return Section({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const White = Template.bind({});
White.args = data.white;

export const BGImage = Template.bind({});
BGImage.args = data.bg_image;

export const Alerts = Template.bind({});
Alerts.args = data.alerts;

export const AutoAdjustingHeadings = Template.bind({});
AutoAdjustingHeadings.args = data.auto_adjusting_headings;

export const SectionWithBg = Template.bind({});
SectionWithBg.args = data.section_with_bg;
