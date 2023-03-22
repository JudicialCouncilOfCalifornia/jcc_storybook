import readme from './readme.md';
import data from './Card.data';
import Card from './Card.twig';
import './Card.css';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    // layout: 'centered',
    notes: readme,
  },
  argTypes: {
    attributes: { table: { disable: true }},
    variant: {
      description: "The Card variant. Often set on the `Cards` component.",
      table: { defaultValue: { summary: 'default' }},
      control: { type: 'select' },
      options: ['default', 'bordered-center', 'media-left', 'media-right', 'overlay', 'striped'],
    },
    media: {
      description: "Image, Video",
      table: { defaultValue: { summary: false }},
    },
    icon_data: {
      description: "Data to pass to the Icon component.",
      table: { defaultValue: { summary: false }},
    },
    heading: {
      description: "A heading.",
      table: { defaultValue: { summary: false }},
    },
    text: {
      description: "A heading.",
      table: { defaultValue: { summary: false }},
    },
    button: {
      description: "`button.label`, `button.href`, `button.variant`",
      table: { defaultValue: { summary: false }},
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
