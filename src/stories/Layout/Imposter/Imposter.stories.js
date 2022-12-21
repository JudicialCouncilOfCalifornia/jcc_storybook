import readme from './readme.md';
import drupalAttribute from 'drupal-attribute'
import Imposter from './Imposter.twig';
import './Imposter.css';

export default {
  title: 'Layout/Imposter',
  component: Imposter,
  parameters: {
    notes: readme,
  },
  argTypes: {
    positioning: {
      description: "Sets the impostor positioning relative to its containing element, or the page.",
      table: { defaultValue: { summary: "absolute (the containing element)" }},
      control: { type: 'radio' },
      options: [ 'absolute', 'fixed' ],
    },
    main: {table: { disable: true }},
    imposter: {table: { disable: true }},
    attributes: {table: { disable: true }},
  },
};

const Template = ({ ...args }) => {
  return Imposter({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  positioning: 'absolute',
  main: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo et voluptate. Illo delectus voluptatum voluptate, porro maxime iste voluptas, inventore soluta, odit dolorum harum illum doloremque odio veritatis at.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo et voluptate. Illo delectus voluptatum voluptate, porro maxime iste voluptas, inventore soluta, odit dolorum harum illum doloremque odio veritatis at.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo et voluptate. Illo delectus voluptatum voluptate, porro maxime iste voluptas, inventore soluta, odit dolorum harum illum doloremque odio veritatis at.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo et voluptate. Illo delectus voluptatum voluptate, porro maxime iste voluptas, inventore soluta, odit dolorum harum illum doloremque odio veritatis at.</p>",
  imposter: "<h2>Imposter</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo et voluptate. Illo delectus voluptatum voluptate, porro maxime iste voluptas, inventore soluta, odit dolorum harum illum doloremque odio veritatis at.</p>",
  attributes: new drupalAttribute(),
};
