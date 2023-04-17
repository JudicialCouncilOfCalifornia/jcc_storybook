// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'
import Teaser from '../../Molecules/Teaser/Teaser.twig';
import {
  Default as TeaserDefault,
  Full as TeaserFull,
  WithBrow as TeaserBrow,
  WithFooter as TeaserFooter,
} from '../../Molecules/Teaser/Teaser.stories';

export default {
  default: {
    variant: "default",
    items: [
      Teaser({...TeaserDefault.args}),
      Teaser({...TeaserDefault.args}),
      Teaser({...TeaserFull.args}),
      Teaser({...TeaserFooter.args}),
      Teaser({...TeaserDefault.args}),
      Teaser({...TeaserFull.args}),
      Teaser({...TeaserFooter.args}),
      Teaser({...TeaserBrow.args}),
    ],
    attributes: new drupalAttribute()
  },
}
