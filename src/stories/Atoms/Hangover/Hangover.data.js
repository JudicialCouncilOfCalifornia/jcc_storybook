// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    heading: "This is a Heading",
    media: "<img src='https://source.unsplash.com/random/400x300/?zen'/>",
    media_hide_portrait: false,
    bottom_content: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem et libero nulla, maiores quam eaque dolorum architecto cupiditate mollitia praesentium rem, fugiat natus beatae odio dignissimos, aliquam similique ea.</p>",
    attributes: new drupalAttribute()
  },
}
