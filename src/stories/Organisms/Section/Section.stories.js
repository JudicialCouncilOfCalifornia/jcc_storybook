import readme from './readme.md';
import data from './Section.data';
import Section from './Section.twig';
import './Section.css';

export default {
  title: 'Organisms/Section',
  component: Section,
  parameters: {
    notes: readme,
  },
  argTypes: {
    variant: { 
      description: "Variant name based on background color which also sets complimentary styles.",
      table: {defaultValue: {summary: 'default'}},
      control: { type: 'select' },
      options: ['default', 'primary-dark-xx', 'primary-dark-xx-stripe', 'warm-dark-xx', 'warm-dark-x', 'white'],
    },
    first_component: { 
      description: "If true, sets the section heading to H1",
      table: {defaultValue: {summary: false}},
    },
    brow_data: { 
      description: "Populates the Brow template.",
      table: {defaultValue: {summary: false}},
    },
    heading: { 
      description: "Populates the Brow template.",
      table: {defaultValue: {summary: false}},
    },
    text: { 
      description: "Populates the Brow template.",
      table: {defaultValue: {summary: false}},
    },
    sub_component_template: { 
      description: "Sets the template to use for the sub component.",
      table: {defaultValue: {summary: false}},
      control: { type: 'select' },
      options: [false, 'Card', 'TeaserPlusList'],
    },
    sub_component_data: { 
      description: "Populates the template specified in sub_component_template.",
      table: {defaultValue: {summary: false}},
      control: { type: 'object' },
    },
    button_data: { 
      description: "Populates the Button template.",
      table: {defaultValue: {summary: false}},
    },
    attributes: {
      table: {
        disable: true,
      }
    }
  }
};

const Template = ({ ...args }) => {
  return Section({ ...args });
};

export const Default = Template.bind({});
Default.args = data.default;

export const PrimaryDarkXX = Template.bind({});
PrimaryDarkXX.args = data.primary_dark_xx;

export const PrimaryDarkXXStripe = Template.bind({});
PrimaryDarkXXStripe.args = data.primary_dark_xx_stripe;

export const WarmDarkX = Template.bind({});
WarmDarkX.args = data.warm_dark_x;

export const White = Template.bind({});
White.args = data.white;
