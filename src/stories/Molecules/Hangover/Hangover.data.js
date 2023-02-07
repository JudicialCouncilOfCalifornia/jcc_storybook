// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    brow: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "Part two",
      attributes: new drupalAttribute(),
    },
    text: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla.</p>",
    heading: "This is a Heading",
    subheading: "This is the sub heading",
    media: "<img src='https://source.unsplash.com/random/400x300/?zen'/>",
    media_hide_portrait: false,
    bottom_content: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla, maiores quam eaque dolorum architecto cupiditate mollitia praesentium rem, fugiat natus beatae odio dignissimos, aliquam similique ea.</p>",
    attributes: new drupalAttribute()
  },
}
