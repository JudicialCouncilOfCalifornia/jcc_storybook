export default {
  default: {
    text: "This is the text that will be displayed in the asset bundle.",
    primary_file_type: "PDF",
    doc_type: "Report",
    assets: [
      {
        type: "pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        type: "docx",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
    ],
    languages: {
      variant: "ul",
      layout: "grid",
      items: [
        {
          text: "<a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'>español</a> (Spanish)",
        },
        {
          text: "<a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'>Tiếng Việt</a> (Vietnamese)",
        },
      ]
    }
  }
}
