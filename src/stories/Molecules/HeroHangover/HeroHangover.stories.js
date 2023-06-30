import readme from "./readme.md";
import data from "./HeroHangover.data";
import HeroHangover from "./HeroHangover.twig";
import "./HeroHangover.css";

export default {
  title: "Molecules/HeroHangover",
  component: HeroHangover,
  parameters: {
    notes: readme,
  },
  argTypes: {
    // More args here.
    background: {
      description: "Specify the alternate background style.",
      table: { defaultValue: { summary: null } },
      control: { type: "select" },
      options: [
        "default",
        "striped-primary-dark-xx",
        "striped-primary-dark-x",
        "striped-primary-light-xx",
        "striped-secondary-dark-xx",
        "striped-secondary",
        "striped-accent-warm-dark-x",
        "striped-base-dark-x",
        "striped-base-light-xx",
        "solid-primary-dark-xx",
        "solid-primary-dark-x",
        "solid-primary-light-xx",
        "solid-secondary-dark-xx",
        "solid-secondary",
        "solid-accent-warm-dark-x",
        "solid-base-dark-x",
        "solid-base-light-xx"],
    },
    hangover_offset: {
      description: "Specify the offset of the hangover.",
      table: { defaultValue: { summary: 22 } },
      control: { type: "number" },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return HeroHangover({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const WithBrow = Template.bind({});
WithBrow.args = data.with_brow;

export const WithMedia = Template.bind({});
WithMedia.args = data.with_media;

export const WithBlurb = Template.bind({});
WithBlurb.args = data.with_blurb;

export const WithText = Template.bind({});
WithText.args = data.with_text;

export const WithBottom = Template.bind({});
WithBottom.args = data.with_bottom;

export const HideMediaPortrait = Template.bind({});
HideMediaPortrait.args = data.hide_media_compact;
