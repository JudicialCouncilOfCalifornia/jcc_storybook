<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# AssetBundle

Standard display for an asset page including general documents, publications, and potentially video & audio.

<details>
  <summary>Twig Variables:</summary>

  ```
  text: "This is the text that will be displayed in the asset bundle.",
  primary_file_type: "PDF",
  doc_type: "Report",
  assets: [
    {
      type: "pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    ...
  ],
  languages: {
    variant: "ul",
    layout: "grid",
    items: [
      {
        text: "<a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'>español</a> (Spanish)",
      },
      ...
    ]
  }
  ```
</details>
