import drupalAttribute from 'drupal-attribute'
import DynamicPage from './DynamicPage.twig';
import './DynamicPage.css';

import Brow from '../../Atoms/Brow/Brow.twig';
import Button from '../../Atoms/Button/Button.twig';
import Card from '../../Molecules/Card/Card.twig';
import Cards from '../../Organisms/Cards/Cards.twig';
import Hero from '../../Molecules/Hero/Hero.twig';
import Icon from '../../Atoms/Icon/Icon.twig';
import Section from '../../Molecules/Section/Section.twig';
import TPL from '../../Organisms/TeaserPlusList/TeaserPlusList.twig';

export default {
  title: 'Pages/DynamicPage',
  component: DynamicPage
};

// Create Template for variant templates to bind to.
const Template = ({ ...args }) => {
  return DynamicPage({ ...args });
};

// Bind the Basic component variant for this component.
export const HomePage = Template.bind({});
HomePage.args = {
  section_1: Hero({
    variant: 'content-bg',
    content_justify: 'left',
    bg_tint: false,
    background_image_url: 'https://source.unsplash.com/random/900×500/?images',
    first_component: true,
    main: Card({
      variant: "default",
      first_component: true,
      media: false,
      heading: "Language Access",
      subheading: false,
      text: "<p>Mission statement or explanation of physical and people resources. Lorem ipsum dolor sit amet lorem ips consectetur adipisciue accumsan metus.</p>",
      button: false,
      attributes: new drupalAttribute(),
    }),
    attributes: new drupalAttribute()
  }),
  section_2: Section({
    variant: 'primary-dark-xx-stripe',
    brow: Brow({
      part_one: "Introduction",
      part_two: false,
      variant: 'heading',
      attributes: new drupalAttribute(),
    }),
    heading: false,
    text: false,
    first_component: false,
    button: false,
    content_justify: 'center',
    content_align: 'top',
    main: Card({
      media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="caption"><p>Video text. Could be video title and video desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div> ',
      heading: "About Language Access",
      text: "<p>Describes Language Access at the courts as both physical and *human* translation resources available. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre</p><a href='#' class='button button--text'>See Language Resources</a><a href='#' class='button button--text'>Learn About Court Interpreters</a>",
      button: false,
      // A variant type that contols the layout and style of the component.
      variant: "media-right",
      // drupalAttribute allows us to mock drupal attributes in storybook.
      attributes: new drupalAttribute(),
    }),
    attributes: new drupalAttribute(),
  }),
  section_3: Section({
    heading: 'Start Here For Language Access',
    main: Cards({
      variant: "",
      cardWidth: "45ch",
      // drupalAttribute allows us to mock drupal attributes in storybook.
      attributes: new drupalAttribute(),
      items: [
        Card({
          media: Icon({
            icon: "documents",
            color: false,
            attributes: new drupalAttribute(),
          }),
          heading: "Language Access Resources for Courts",
          text: false,
          button: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
          variant: "striped",
          attributes: new drupalAttribute(),
        }),
        Card({
          media: Icon({
            icon: "speaker",
            color: false,
            attributes: new drupalAttribute(),
          }),
          heading: "Search for an Interpreter",
          text: false,
          button: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
          // A variant type that contols the layout and style of the component.
          variant: "striped",
          // drupalAttribute allows us to mock drupal attributes in storybook.
          attributes: new drupalAttribute(),
        }),
        Card({
          media: Icon({
            icon: "speaker",
            color: false,
            attributes: new drupalAttribute(),
          }),
          heading: "Become an Court Interpreter",
          text: false,
          button: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
          // A variant type that contols the layout and style of the component.
          variant: "striped",
          // drupalAttribute allows us to mock drupal attributes in storybook.
          attributes: new drupalAttribute(),
        }),
        Card({
          media: Icon({
            icon: "exam",
            color: false,
            attributes: new drupalAttribute(),
          }),
          heading: "Find Court Interpreter Exam Information",
          text: false,
          button: {
            label: "Button",
            href: "#",
            variant: "primary",
          },
          // A variant type that contols the layout and style of the component.
          variant: "striped",
          // drupalAttribute allows us to mock drupal attributes in storybook.
          attributes: new drupalAttribute(),
        }),
      ],
    }),
    content_justify: 'center',
    content_align: 'top',
    attributes: new drupalAttribute(),
  }),
  section_4: Section({
    brow: false,
    heading: 'Latest News',
    text: false,
    main: TPL({
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
    }),
    button: Button({
      label: "See All News",
      href: "#",
      type: 'primary',
      size: 'normal',
      attributes: new drupalAttribute(),
    }),
    content_justify: 'center',
    content_align: 'top',
    variant: 'warm-dark-x',
    first_component: false,
    attributes: new drupalAttribute(),
  }),
  section_5: Section({
    brow: false,
    heading: false,
    text: false,
    main: Cards({
      variant: "",
      cardWidth: "30ch",
      attributes: new drupalAttribute(),
      items: [
        Card({ 
          media: '<div class="frame"><img src="https://source.unsplash.com/random/900×700/?office" /></div>',
          heading: "Interested in becoming a court interpreter?",
          text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu.</p>",
          button: {
            label: "Become a Court Interpreter",
            href: "#",
            variant: "primary",
            size: "small",
          },
          // A variant type that contols the layout and style of the component.
          variant: "bordered-center",
          // drupalAttribute allows us to mock drupal attributes in storybook.
          attributes: new drupalAttribute(),   
        }),
        Card({ 
          media: '<div class="frame"><img src="https://source.unsplash.com/random/900×700/?building,old" /></div>',
          heading: "LEP Court Users",
          text: "<p>Lorem ipsum dolor sit amet consectetur adipiscing, elit penatibus dignissim placerat ante vulputate, blandit donec enim senectus ornare. Ac non lacus sollicitudin vulputate sociosqu. Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet.</p>",
          button: {
            label: "Self-Help for LEP Court Users",
            href: "#",
            variant: "primary",
            size: "small",
          },
          // A variant type that contols the layout and style of the component.
          variant: "bordered-center",
          // drupalAttribute allows us to mock drupal attributes in storybook.
          attributes: new drupalAttribute(),   
        }),
      ],    
    }),
    button: false,
    content_justify: 'center',
    content_align: 'top',
    variant: 'white',
    first_component: false,
    attributes: new drupalAttribute(),
  }),
  attributes: new drupalAttribute(),
};

export const SectionPaddingDemo = Template.bind({});
SectionPaddingDemo.args = {
  section_1: Section({
    brow: false,
    heading: 'This As A Heading',
    text: false,
    main: Card({
      media: '<div class="frame"><iframe width="560" height="315" src="https://www.youtube.com/embed/UpnXQalWR-U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="caption"><p>Video text. Could be video title and video desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p></div> ',
      heading: "About Language Access",
      text: "<p>Describes Language Access at the courts as both physical and *human* translation resources available. Lorem ipsum dolor sit amet consectetur adipiscin lorem ispum bodlre</p><a href='#' class='button button--text'>See Language Resources</a><a href='#' class='button button--text'>Learn About Court Interpreters</a>",
      button: false,
      // A variant type that contols the layout and style of the component.
      variant: "media-right",
      // drupalAttribute allows us to mock drupal attributes in storybook.
      attributes: new drupalAttribute(),
    }),
    button: false,
    content_justify: 'center',
    content_align: 'top',
    variant: 'primary-dark-xx-stripe',
    first_component: false,
    attributes: new drupalAttribute(),
  }),
  section_2: Section({
    heading: 'Different Background Than Above',
    text: '<p>Because this section has a different background, the padding above is quite large.</p>',
    main: TPL({
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
    }),
    content_justify: 'center',
    content_align: 'top',
    attributes: new drupalAttribute(),
  }),
  section_3: Section({
    heading: 'Same Background As Above',
    text: '<p>Because this section has a different background, the padding above is reduced. This happens automatically.</p>',
    main: TPL({
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
    }),
    content_justify: 'center',
    content_align: 'top',
    attributes: new drupalAttribute(),
  })
}
