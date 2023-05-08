
import Pills from "../../Molecules/Pills/Pills.twig";
import {Default as PillsDefault} from "../../Molecules/Pills/Pills.stories";

export default {
  default: {
    empty_message: "No publications to display.",
    publications: [
      {
        variant: "default",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "#",
        content:
            "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
        main_file: "#",
        button_data: {
          label: "Download pdf",
          href: "#",
          variant: "primary",
          size: "small",
        },
        detail_list_data: {
          label: "DETAILS",
          details: [
            "Topic",
            "July 12, 2022",
            "Case Type",
            "Office/Division: CFCC",
            "Report",
          ],
        },
        pills: Pills({ ...PillsDefault.args }),
      },
      {
        variant: "default",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "#",
        content:
            "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
        main_file: "#",
        button_data: {
          label: "Download pdf",
          href: "#",
          variant: "primary",
          size: "small",
        },
        detail_list_data: {
          label: "DETAILS",
          details: [
            "Topic",
            "July 12, 2022",
            "Case Type",
            "Office/Division: CFCC",
            "Report",
          ],
        },
        pills: Pills({ ...PillsDefault.args }),
      },
      {
        variant: "default",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        url: "#",
        content:
            "<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do et dolore magna sed do et dolore aliqu aliqua...</p>",
        main_file: "#",
        button_data: {
          label: "Download pdf",
          href: "#",
          variant: "primary",
          size: "small",
        },
        detail_list_data: {
          label: "DETAILS",
          details: [
            "Topic",
            "July 12, 2022",
            "Case Type",
            "Office/Division: CFCC",
            "Report",
          ],
        },
        pills: Pills({ ...PillsDefault.args }),
      },
    ],
    filters: [
      {
        type: 'input',
        placeholder: 'Search Publication',
        id: 'search',
        name: 'search'
      },
      {
        type: 'select',
        placeholder: 'Topic/Case Type',
        id: 'topic',
        name: 'topic',
        options: [
          {
            value: 'opt1',
            label: 'Option 1'
          },
          {
            value: 'opt2',
            label: ' Option 2'
          },
          {
            value: 'opt3',
            label: 'Option 3'
          }
        ]
      },
      {
        type: 'select',
        placeholder: 'Office/Division',
        id: 'office',
        name: 'office',
        options: [
          {
            value: 'opt1',
            label: 'Option 1'
          },
          {
            value: 'opt2',
            label: ' Option 2'
          },
          {
            value: 'opt3',
            label: 'Option 3'
          }
        ]
      },
      {
        type: 'select',
        placeholder: 'Publication Type',
        id: 'put_type',
        name: 'put_type',
        options: [
          {
            value: 'opt1',
            label: 'Option 1'
          },
          {
            value: 'opt2',
            label: ' Option 2'
          },
          {
            value: 'opt3',
            label: 'Option 3'
          }
        ]
      }
    ],
    filters_buttons: [
      {
        variant: 'secondary',
        size: 'small',
        label: "Submit",
        href: "#",
      },
      {
        variant: 'primary',
        size: 'small',
        label: "Reset",
        href: "#",
      },
    ],
    full_pager: {
      variant: "full_pager",
      ellipses: {
        previous: true,
        next: true,
      },
      items: {
        current: "7",
        first: {
          href: "#",
          text: "First",
          //text: '« First',
        },
        previous: {
          href: "#",
          text: "Prev",
          //text: '‹ Prev',
        },
        pages: {
          3: {
            href: "#",
          },
          4: {
            href: "#",
          },
          5: {
            href: "#",
          },
          6: {
            href: "#",
          },
          7: {
            href: "#",
          },
          8: {
            href: "#",
          },
          9: {
            href: "#",
          },
          10: {
            href: "#",
          },
          11: {
            href: "#",
          },
        },
        next: {
          href: "#",
          text: "Next",
          //text: 'Next ›',
        },
        last: {
          href: "#",
          text: "Last",
          //text: 'Last »',
        },
      },
    },
    popular_topics: [
      {
        variant: 'pill',
        size: 'small',
        label: "Family law",
        href: "#",
      },
      {
        variant: 'pill',
        size: 'small',
        label: "Small Claims",
        href: "#",
      },
      {
        variant: 'pill',
        size: 'small',
        label: "Wills and Estates",
        href: "#",
      },
    ],
    pager: true,
  }
}
