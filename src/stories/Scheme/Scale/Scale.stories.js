import readme from './readme.md';
import Scale from './Scale.twig';
import './Scale.css';
import DrupalAttribute from 'drupal-attribute';

const schemeJSON = require('../../../assets/scheme-default.json');
const rows = schemeJSON.children[':root'].attributes;
const scale = [];
let ratio;

for (const key in rows) {
  if (key.includes('--s')) {
    const name = key;
    const splitName = name.split('-');
    scale.push({
      name: name,
      category: splitName[0],
      value: rows[key],
    });
  }

  if (key.includes('--ratio')) {
    ratio = rows[key];
  }
}

export default {
  title: 'Scheme/Scale',
  component: Scale,
  parameters: {
    layout: 'centered',
    notes: readme,
  },
  argTypes: {
    attributes: {table: {disable: true}},
    scale: {table: {disable: true}},
    ratio: {table: {disable: true}},
  },
};

const Template = ({ ...args }) => {
  return Scale({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  attributes: new DrupalAttribute(),
  scale: scale,
  ratio: ratio,
}
