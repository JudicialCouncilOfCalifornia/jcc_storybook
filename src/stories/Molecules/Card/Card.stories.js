import readme from "./readme.md";
import data from "./Card.data";
import Card from "./Card.twig";
import "./Card.css";

export default {
  title: "Molecules/Card",
  component: Card,
  parameters: {
    layout: "padded",
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "The Card variant. Often set on the `Cards` component.",
      table: { defaultValue: { summary: "default" } },
      control: { type: "select" },
      options: [
        "default",
        "bordered-center",
        "media-left",
        "media-right",
        "overlay",
        "striped",
      ],
    },
    aspect: {
      description:
        "The aspect ratio of the card. Often set on an ancestor component.",
      table: { defaultValue: { summary: [16, 9] } },
    },
    background: {
      description: "Specify the background style for the **Striped** variant.",
      table: { defaultValue: { summary: null } },
      control: { type: "select" },
      options: [
        "striped-base-dark-x",
        "striped-primary-dark-xx",
        "striped-primary-dark-x",
        "striped-primary-light-xx",
        "striped-secondary-dark-xx",
        "striped-secondary",
        "striped-accent-warm-dark-x",
        "base-dark-x",
        "primary-dark-xx",
        "primary-dark-x",
        "primary-light-xx",
        "secondary-dark-xx",
        "secondary",
        "accent-warm-dark-x",
      ],
    },
    clickable_card: {
      description: "Make the card clickable and hide the button.",
      table: { defaultValue: { summary: false } },
    },
    media: {
      description: "Image, Video",
      table: { defaultValue: { summary: null } },
    },
    icon_data: {
      description: "Data to pass to the Icon component.",
      table: { defaultValue: { summary: null } },
    },
    heading: {
      description: "A heading.",
      table: { defaultValue: { summary: null } },
    },
    text: {
      description: "Lead Text.",
      table: { defaultValue: { summary: null } },
    },
    button_data: {
      description: "`button.label`, `button.href`, `button.variant`",
      table: { defaultValue: { summary: false } },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Card({ ...args });
};

// Bind the Default component variant for this component.
export const Default = Template.bind({});
Default.args = data.default;

export const NoMedia = Template.bind({});
NoMedia.args = data.no_media;

export const Bordered = Template.bind({});
Bordered.args = data.bordered;

export const BorderedCenter = Template.bind({});
BorderedCenter.args = data.bordered_center;

export const MediaLeft = Template.bind({});
MediaLeft.args = data.media_left;

export const MediaRight = Template.bind({});
MediaRight.args = data.media_right;

export const Overlay = Template.bind({});
Overlay.args = data.overlay;

export const Striped = Template.bind({});
Striped.args = data.striped;
