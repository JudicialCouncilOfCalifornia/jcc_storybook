import Accordion from "../../Molecules/Accordion/Accordion.twig";
import { Default as AccordionDefault } from "../../Molecules/Accordion/Accordion.stories";
import ActionList from "../../Molecules/ActionList/ActionList.twig";
import { Default as ActionListDefault } from "../../Molecules/ActionList/ActionList.stories";
import Body from "../../Molecules/Body/Body.twig";
import List from "../../Molecules/List/List.twig";
import { Default as BodyDefault } from "../../Molecules/Body/Body.stories";
import Cards from "../../Organisms/Cards/Cards.twig";
import { Striped as CardsStriped } from "../../Organisms/Cards/Cards.stories";
import ProfileCards from "../../Organisms/ProfileCards/ProfileCards.twig";
import { Default as ProfileCardsDefault } from "../../Organisms/ProfileCards/ProfileCards.stories";
import Steps from "../../Organisms/Steps/Steps.twig";
import { Default as StepsDefault } from "../../Organisms/Steps/Steps.stories";
import TeaserPlusList from "../../Organisms/TeaserPlusList/TeaserPlusList.twig";
import { Default as TeaserListDefault } from "../../Organisms/TeaserPlusList/TeaserPlusList.stories";
import ViewResults from "../../Organisms/ViewResults/ViewResults.twig";
import { Default as ViewResultsDefault } from "../../Organisms/ViewResults/ViewResults.stories";
import { WithMenu as ListWithMenu } from "../../Molecules/List/List.stories";

export default {
  default: {
    variant: "default",
    first_component: false,
    sub_component_layout: "flex flex--60-40",
    // center, stack
    align_items: false,
    // center, switcher
    measure: false,
    // cluster, grid, reel, stack, switcher
    gap: false,
    // grid
    grid_min_width: false,
    // with-sidebar
    sidebar_direction: false,
    // with-sidebar
    sidebar_width: false,
    background_image_url: "",
    brow_data: {
      variant: "heading",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_data: [
      '<div class="stack"><h3>Heading</h3><p>Some markup  goes in this space. adsf asf asdf sdfaf asf asdf sadf sadf sadf sfd sadf sadf sdf fsa afs fsd safd.</p></div>',
      '<div class="stack"><h3>Heading</h3><p>Some markup  goes in this space. adsf asf asdf sdfaf asf asdf sadf sadf sadf sfd sadf sadf sdf fsa afs fsd safd.</p></div>',
    ],
  },
  primary_dark_xx: {
    variant: "primary-dark-xx",
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  primary_dark_xx_stripe: {
    variant: "primary-dark-xx-stripe",
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  warm_dark_x: {
    variant: "warm-dark-x",
    first_component: false,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  white: {
    variant: "white",
    first_component: false,
    sub_component_layout: null,
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_data:
      '<div class="container"><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
  },
  bg_image: {
    variant: "default",
    first_component: false,
    bg_tint: "accent-warm-dark-xx",
    background_image_url:
      "https://source.unsplash.com/random/900×700/?office,people",
    brow_data: {
      variant: "default",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Heading Example",
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae tincidunt lectus, ut sodales augue. Pellentesque pellentesque ut nunc id varius. Maecenas maximus, tortor eu molestie congue, arcu odio tristique nulla, venenatis maximus ligula tellus non massa. Proin quis tortor cursus, lacinia ligula id, maximus tortor.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "secondary",
    },
    sub_component_layout: null,
    sub_component_data:
      '<div class=""><div class="box" style="background: var(--color-base-light-x)">Sub Component goes here.</div></div>',
    section_layout: "switcher",
  },
  auto_adjusting_headings: {
    variant: "default",
    section_classes: ["custom"],
    sub_component_layout: 'stack',
    brow_data: {
      variant: "heading",
      part_one: "Brow Example",
      part_two: "",
    },
    heading: "Auto Adjusting Headings",
    text: "<p>Adding <strong>heading-mgt</strong> class to enable handlers that auto-adjust headings when the library components are used as subcomponents. Observe the heading shifts - visually and within markup - when you remove the section heading or set as the first component.</p>",
    button_data: {
      label: "Button",
      href: "#",
      variant: "primary",
    },
    sub_component_data: [
      Accordion({
        ...AccordionDefault.args
      }),
      /*List({
        ...ListWithMenu.args
      }),*/
      ActionList({
        ...ActionListDefault.args
      }),
      Body({
        ...BodyDefault.args
      }),
      Cards({
        ...CardsStriped.args,
        brow_data: null,
        text: null,
        button_data: null,
      }),
      ProfileCards({
        ...ProfileCardsDefault.args
      }),
      Steps({
        ...StepsDefault.args
      }),
      TeaserPlusList({
        ...TeaserListDefault.args
      }),
      ViewResults({
        ...ViewResultsDefault.args,
        variant: "search_results"
      }),
    ],
  },
};
