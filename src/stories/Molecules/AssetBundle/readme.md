<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# AssetBundle

Standard display for an asset page including general documents, publications, and potentially video & audio.

<details>
  <summary>Twig Variables:</summary>

  ```
  text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
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
    variant_layout: "grid",
    items: [
      {
        text: "<a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'>español</a> (Spanish)",
      },
      ...
    ]
  }
  ```
</details>
