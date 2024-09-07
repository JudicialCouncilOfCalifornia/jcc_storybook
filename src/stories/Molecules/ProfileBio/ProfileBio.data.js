import List from "../List/List.twig";
import { WithHeading } from "../List/List.stories";
import Pills from "../Pills/Pills.twig";
import { Default as PillsDefault } from "../Pills/Pills.stories";

let content = `<p>Open formatted biography will appear here. Formatting will be 
depended upon the content provider and our standardized core styling will apply.
 There is no way we can predict how biographies will be authored so Storybook 
 will expect to have minimal management on its presentation.</p><p>Lorem ipsum 
 dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in 
 Academia. Prave, nequiter, turpiter cenabat; Neque enim civitas in seditione 
 beata esse potest nec in discordia dominorum domus; Vos autem cum perspicuis 
 dubia debeatis illustrare, dubiis perspicua conamini tollere.</p>`;

export default {
  default: {
    name: "Avery Person",
    title: "Associate Individual",
    division: "Division One",
    date: "Since 2009",
    content: content,
    share: false,
  },
  share_enabled: {
    name: "Avery Person",
    title: "Associate Individual",
    division: "Division One",
    date: "Since 2009",
    content: content,
    share: {
      print_url: "javascript: window.print();",
      print_aria_label: "Print profile",
      download_url: "/iframe.html?args=&id=templates-profile--default&viewMode=story",
      download_aria_label: "Download profile",
    },
  },
  with_subcomponents: {
    name: "Avery Person",
    title: "Associate Individual",
    division: "Division One",
    date: "Since 2009",
    content: content,
    share: false,
    sub_component_data: [
      List({
        ...WithHeading.args,
        heading: false,
      }),
      Pills({
        ...PillsDefault.args,
        icon_data: false,
      })
    ],
  },
};
