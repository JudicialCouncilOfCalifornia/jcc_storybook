import readme from './readme.md';
import Fonts from './Fonts.twig';
import './Fonts.css';
import DrupalAttribute from 'drupal-attribute';

const schemeJSON = require('../../../assets/scheme.json');
const rows = schemeJSON.children[':root'].attributes;
const fonts = [];

for (const key in rows) {
  if (key.includes('--font-')) {
    const name = key.replace('--font-', '').replace(/\/\*.*\/\n\s*/, '');
    const splitName = name.split('-');
    fonts.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }
}

export default {
  title: 'Scheme/Fonts',
  component: Fonts,
  parameters: {
    layout: 'padded',
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
    fonts: {table: {disable: true}},
    font_weight: {
      control: { type: 'select' },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template = ({ ...args }) => {
  return Fonts({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  attributes: new DrupalAttribute(),
  fonts: fonts,
  font_weight: 300,
}
