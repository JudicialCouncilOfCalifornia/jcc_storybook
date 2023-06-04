<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# ViewResults

ViewResults are the combined output for a view results page. It builds out the inline search form using InlineForm, the result rows with MediaExerpts, and the pager with the Pager component. Additional elements include a sidebar option and an items_per_page select form element.

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  view_name: // Machine name of the view,
  view_display: // Machine name of the display,
  header: // "Any rendered content or rendered view attachment",
  header_sidebar: // "Any rendered content or rendered view attachment",
  sidebar_direction_header: 'sidebar-row-reverse' or 'sidebar-row' to set which side the sidebar is on., 
  form: "rendered exposed form",
  form_in_sidebar: false or true. Sets the form to render in the header or the main sidebar area,
  list_type: 'ol' or 'ul' to set the type of list,
  list_type_divider: true or false to set a dividing border line between results,
  rows: [
    {
      title: "title text",
      content: "rendered content text",
      url: "url object to the results",
    },
    {
      title: "title text",
      content: "rendered content text",
      url: "url object to the results",
    },
    ...
  ],
  sidebar: "Any rendered content or form elements",
  sidebar_direction_results: 'sidebar-row-reverse' or 'sidebar-row' to set which side the sidebar is on.,
  pager: "A rendered pager element from the CMS",
  items_per_page: "A rendered item select from the exposed form",
  footer: "Any rendered content or form elements",
  footer_sidebar: "Any rendered content or form elements. Appears in the sidebar to the main footer area.",
  sidebar_direction_footer: 'sidebar-row-reverse' or 'sidebar-row' to set which side the sidebar is on.,
  ```
</details>
