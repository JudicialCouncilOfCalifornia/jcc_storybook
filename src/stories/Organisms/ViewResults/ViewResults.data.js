import Pager from "../../Molecules/Pager/Pager.twig";
import InlineForm from "../../Molecules/InlineForm/InlineForm.twig";
import { Default as DefaultPager } from '../../Molecules/Pager/Pager.stories';
import { FullPager } from '../../Molecules/Pager/Pager.stories';
import { Default as InlineFormDefault } from '../../Molecules/InlineForm/InlineForm.stories';

const items_per_page = `
    <select name="items_per_page" id="edit-select-label" value="10" form="FORM_NAME">
      <option value="5">Show 5 per page</option>
      <option value="10">Show 10 per page</option>
      <option value="15">Show 15 per page</option>
      <option value="25">Show 25 per page</option>
      <option value="50">Show 50 per page</option>
    </select>
`;

export default {
  default: {
    variant: "default",
    no_top_margin: false,
    view_name: '',
    view_display: '',
    header: '',
    header_sidebar: '',
    form: InlineForm({ ...InlineFormDefault.args }),
    form_in_sidebar: false,
    list_type: 'ol',
    list_type_divider: true,
    list_divider_skip_first: false,
    list_label: 'List Label',
    rows: [
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
        is_new: true,
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
      },
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
    ],
    content_header: '',
    sidebar: '',
    sidebar_direction_results: 'sidebar-row-reverse',
    sidebar_direction_header: 'sidebar-row-reverse',
    sidebar_direction_footer: 'sidebar-row-reverse',
    pager: Pager({ ...FullPager.args }),
    items_per_page: items_per_page,
    footer: '',
    footer_sidebar: '',
  },
  with_full_brow: {
    variant: "default",
    no_top_margin: false,
    view_name: '',
    view_display: '',
    header: '',
    header_sidebar: '',
    form: InlineForm({ ...InlineFormDefault.args }),
    form_in_sidebar: false,
    list_type: 'ol',
    list_type_divider: true,
    list_divider_skip_first: false,
    list_label: 'List Label',
    rows: [
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
      },
      {
        brow: {
          primary: 'Brow Primary',
          secondary: 'Brow Secondary',
          notation: 'Brow Notation',
        },
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text.',
        url: '#',
      },
    ],
    content_header: '',
    sidebar: '',
    sidebar_direction_results: 'sidebar-row-reverse',
    sidebar_direction_header: 'sidebar-row-reverse',
    sidebar_direction_footer: 'sidebar-row-reverse',
    pager: Pager({ ...DefaultPager.args }),
    items_per_page: items_per_page,
    footer: '',
    footer_sidebar: '',
  },
  grouped_view: {
    variant: "grouped_view",
    no_top_margin: false,
    view_name: '',
    view_display: '',
    header: '',
    header_sidebar: '',
    form: InlineForm({ ...InlineFormDefault.args }),
    form_in_sidebar: false,
    list_type: 'ol',
    list_type_divider: true,
    list_divider_skip_first: false,
    rows: [
      {
        list_label: 'Group 1 List Label',
        items: [
          {
            brow: {
              primary: 'Brow Primary',
              secondary: 'Brow Secondary',
              notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
            url: '#',
          },
          {
            brow: {
              primary: 'Brow Primary',
              secondary: 'Brow Secondary',
              notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
            url: '#',
          },
          {
            brow: {
              primary: 'Brow Primary',
              secondary: 'Brow Secondary',
              notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
            url: '#',
          },
        ]
      }, 
      {
        list_label: 'Group 2 List Label',
        items: [
          {
            brow: {
              primary: 'Brow Primary',
                secondary: 'Brow Secondary',
                notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
            url: '#',
          },
        ]
      },
      {
        list_label: 'Group 3 List Label',
        items: [
          {
            brow: {
              primary: 'Brow Primary',
                secondary: 'Brow Secondary',
                notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
            url: '#',
          },
          {
            brow: {
              primary: 'Brow Primary',
                secondary: 'Brow Secondary',
                notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
            url: '#',
          },
          {
            brow: {
              primary: 'Brow Primary',
                secondary: 'Brow Secondary',
                notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
            url: '#',
          },
          {
            brow: {
              primary: 'Brow Primary',
                secondary: 'Brow Secondary',
                notation: 'Brow Notation',
            },
            title: 'This is a the title for a search result item.',
            content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted.',
            url: '#',
          },
        ]
      }
    ],
    content_header: '1 - 16 of 150 results',
    sidebar: 'Sidebar',
    sidebar_direction_results: 'sidebar-row',
    sidebar_direction_header: 'sidebar-row',
    sidebar_direction_footer: 'sidebar-row',
    pager: Pager({ ...DefaultPager.args }),
    items_per_page: items_per_page,
    footer: '',
    footer_sidebar: '',
  },
};
