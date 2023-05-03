import Pager from "../../Molecules/Pager/Pager.twig";
import InlineForm from "../../Molecules/InlineForm/InlineForm.twig";
import { Default as DefaultPager } from '../../Molecules/Pager/Pager.stories';
import { Default as SearchInlineForm } from '../../Molecules/InlineForm/InlineForm.stories';

const items_per_page = `
<div class="form-item form-item-select-label">
  <div>
    <select name="items_per_page" id="edit-select-label" value="10">
      <option value="5">Show 5 per page</option>
      <option value="10">Show 10 per page</option>
      <option value="15">Show 15 per page</option>
      <option value="25">Show 25 per page</option>
      <option value="50">Show 50 per page</option>
    </select>
  </div>
</div>`;

export default {
  default: {
    variant: "default",
    form: InlineForm({ ...SearchInlineForm.args }),
    rows: [
      {
        title: 'This is a the title for a search result item.',
        content: 'This is where a rendered snippet of the return node is printed out. It can have the matching text highlighted. This is some more text, and this is some more content for display.',
        url: '#',
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
    sidebar: '',
    pager: Pager({ ...DefaultPager.args }),
    items_per_page: items_per_page,
  },
};
