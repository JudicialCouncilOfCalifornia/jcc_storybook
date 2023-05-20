<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->

# ViewResults

ViewResults are the combined output for a view results page. It builds out the inline search form using InlineForm, the result rows with MediaExerpts, and the pager with the Pager component. Additional elements include a sidebar option and an items_per_page select form element.

<details>
  <summary>Twig Variables:</summary>
  ```
  variant: "default",
  form: "exposed form"
  rows: [
    {
      title: "title text",
      content: "content text",
      url: "url to the results",
    },
    {
      title: "title text",
      content: "content text",
      url: "url to the results",
    },
    ...
  ],
  sidebar: "Any rendered content or form elements",
  pager: "A rendered pager element from the CMS",
  items_per_page: "A rendered item select from the exposed form",
  ```
</details>
