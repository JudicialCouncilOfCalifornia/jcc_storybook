import TeaserPlusList from './TeaserPlusList.twig';
import drupalAttribute from 'drupal-attribute'
import './TeaserPlusList.css';

import Brow from '../../Atoms/Brow/Brow.twig';

export default {
  title: 'Organisms/TeaserPlusList',
  component: TeaserPlusList,
  argTypes: {
    brow: {table: {disable: true}},
    teaser: {table: {disable: true}},
    listItems: {table: {disable: true}},
    attributes: {table: {disable: true}},
  }
};

const Template = ({ ...args }) => {
  return TeaserPlusList({ ...args });
};

export const Basic = Template.bind({});
Basic.args = {
  teaser: {
    brow: Brow({
      part_one: 'Orders',
      part_two: 'July 12, 2022',
      attributes: new drupalAttribute(),
    }),
    heading: "2DCA Protocols for In-Person Oral Argument",
    text: "The Second Appellate District's Division Two will hear oral arguments in the courtroom on May 19, 2022. Access to the courtroom will be limited to the..."
  },
  listItems: [
    {
      link: {
        label: "Job Announcement – Appellate Court Attorney",
        href: "#"
      },
      footer: "May 25, 2022"
    },
    {
      link: {
        label: "Second District Court of Appeal to resume in‑person arguments effective May 2022",
        href: "#"
      },
      footer: "May 25, 2022"
    }
  ],
  attributes: new drupalAttribute(),
};
