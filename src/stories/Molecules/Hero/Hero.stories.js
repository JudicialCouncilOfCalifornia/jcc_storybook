import readme from "./readme.md";
import data from "./Hero.data";
import Hero from "./Hero.twig";
import "./Hero.css";

export default {
  title: "Molecules/Hero",
  component: Hero,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: {
      description: "Hero variant.",
      table: { defaultValue: { summary: "banner" } },
      control: { type: "radio" },
      options: ["banner", "content-bg"],
    },
    content_justify: {
      description: "Justify the content container left, center or right.",
      table: { defaultValue: { summary: "left" } },
      control: { type: "radio" },
      options: ["left", "center", "right"],
    },
    content_bg_color: {
      description:
        "The color applied to the content card background. (variants: content-bg)",
      table: { defaultValue: { summary: "white" } },
      control: { type: "select" },
      options: [false, "white", "accent-warm-dark-xx"],
    },
    bg_tint: {
      description: "The tint applied to darken the background.",
      table: { defaultValue: { summary: "accent-warm-dark-xx" } },
      control: { type: "select" },
      options: [
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
        "secondary",
        "secondary-dark-x",
      ],
    },
    background_image_url: {
      description:
        "The background image for the Hero. `false` to use the tint color as a solid background.",
      table: { defaultValue: { summary: false } },
    },
  },
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return Hero({ ...args });
};

export const Banner = Template.bind({});
Banner.args = data.banner;

export const BannerMega = Template.bind({});
BannerMega.args = data.banner_mega;

export const BannerFeaturedLinks = Template.bind({});
BannerFeaturedLinks.args = data.banner_featured_links;

export const BannerContentBGWhite = Template.bind({});
BannerContentBGWhite.args = data.content_bg;
