// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    brow: false,
    heading: "This is a Heading",
    text: "",
    media: "",
    media_hide_portrait: false,
    bottom_content: "",
    attributes: new drupalAttribute()
  },
  with_brow: {
    brow: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "Part two",
      attributes: new drupalAttribute(),
    },
    heading: "This is a Heading",
    text: "",
    media: "",
    media_hide_portrait: false,
    bottom_content: "",
    attributes: new drupalAttribute()
  },
  with_media: {
    brow: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "Part two",
      attributes: new drupalAttribute(),
    },
    heading: "This is a Heading",
    text: "",
    media: "<img src='https://source.unsplash.com/random/400x300/?zen'/>",
    media_hide_portrait: false,
    bottom_content: "",
    attributes: new drupalAttribute()
  },
  with_text: {
    brow: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "Part two",
      attributes: new drupalAttribute(),
    },
    heading: "This is a Heading",
    text: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla, maiores quam eaque dolorum architecto cupiditate mollitia praesentium rem, fugiat natus beatae odio dignissimos, aliquam similique ea.</p>",
    media: "<img src='https://source.unsplash.com/random/400x300/?zen'/>",
    media_hide_portrait: false,
    bottom_content: "",
    attributes: new drupalAttribute()
  },
  with_bottom: {
    brow: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "Part two",
      attributes: new drupalAttribute(),
    },
    heading: "This is a Heading",
    text: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla, maiores quam eaque dolorum architecto cupiditate mollitia praesentium rem, fugiat natus beatae odio dignissimos, aliquam similique ea.</p>",
    media: "<img src='https://source.unsplash.com/random/400x300/?zen'/>",
    media_hide_portrait: false,
    bottom_content: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla, maiores quam eaque dolorum architecto cupiditate mollitia praesentium rem, fugiat natus beatae odio dignissimos, aliquam similique ea.</p>",
    attributes: new drupalAttribute()
  },
  hide_media_portrait: {
    brow: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "Part two",
      attributes: new drupalAttribute(),
    },
    heading: "This is a Heading",
    text: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla.</p>",
    media: "<img src='https://source.unsplash.com/random/400x300/?zen'/>",
    media_hide_portrait: true,
    bottom_content: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla, maiores quam eaque dolorum architecto cupiditate mollitia praesentium rem, fugiat natus beatae odio dignissimos, aliquam similique ea.</p>",
    attributes: new drupalAttribute()
  },
}
