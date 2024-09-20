import readme from "./readme.md";
import data from "./Card.data";
import Card from "./Card.twig";
import "./Card.css";
import "./Card.js";

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
        "bordered",
        "bordered-center",
        "media-left",
        "media-right",
        "overlay",
        "striped",
        "striped",
        "striped-aligned",
      ],
    },
    aspect: {
      description:
        "The aspect ratio of the card. Often set on an ancestor component.",
      table: { defaultValue: { summary: [16, 9] } },
    },
    background: {
      description: "Specify the background.",
      table: { defaultValue: { summary: null } },
      control: { type: "select" },
      options: [
        "",
        "solid-base-light-xxx",
        "solid-base-dark-x",
        "solid-base-dark-xxx",
        "solid-accent-warm-light-xxxx",
        "solid-accent-warm-dark-x",
        "solid-red",
        "solid-brown",
        "solid-primary-light-xxx",
        "solid-primary-light-x",
        "solid-primary-dark-x",
        "solid-secondary",
        "solid-secondary-dark-xx",
      ],
    },
    clickable_card: {
      description: "Make the card clickable and hide the button.",
      table: { defaultValue: { summary: false } },
    },
    tag_href: {
      description: "URL",
      table: { defaultValue: { summary: null } },
    },
    caption_overlay: {
      description: "Add caption overlay in card",
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

export const StripedAligned = Template.bind({});
StripedAligned.args = data.striped_aligned;

