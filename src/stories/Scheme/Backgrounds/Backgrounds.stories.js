import readme from './readme.md';
import Backgrounds from './Backgrounds.twig';
import './Backgrounds.css';
import DrupalAttribute from 'drupal-attribute';

const schemeJSON = require('../../../assets/scheme.json');
const rows = schemeJSON.children[':root'].attributes;
const backgrounds = [];

for (const key in rows) {
  if (key.includes('--background-')) {
    const name = key.replace('--background-', '').replace(/\/\*.*\/\n\s*/, '');
    const splitName = name.split('-');
    backgrounds.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }
}

export default {
  title: 'Scheme/Backgrounds',
  component: Backgrounds,
  parameters: {
    layout: 'padded',
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
    backgrounds: {table: {disable: true}},
  },
};

const Template = ({ ...args }) => {
  return Backgrounds({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  attributes: new DrupalAttribute(),
  backgrounds: backgrounds,
}
