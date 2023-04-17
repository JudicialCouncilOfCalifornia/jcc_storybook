// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'
import logo from './Council-Logo.svg';

export default {
  default: {
    logo: logo,
    label: "California Courts",
    sub_label: "Language Access",
    url: '/',
    attributes: new drupalAttribute()
  }
}
