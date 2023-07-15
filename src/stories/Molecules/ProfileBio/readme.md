<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# ProfileBio

Layout and styling for profile biographies.

<details>
  <summary>Twig Variables:</summary>

  ```
  name: "Name of the individual",
  title: "Position title or person/roles type",
  division: "Division grouping if needed",
  date: "Date context as needed (e.g. Since 2020)",
  content: "Format-agnostic biography content",
  share: {
    print_url: "javascript: window.print();",
    print_aria_label: "Print profile",
    download_url: "javascript: void(0);",
    download_aria_label: "Download profile",
    icon_path: "Path to icons.svg may be needed ... /themes/contrib/jcc_storybook/src/assets/icons.svg"
  },
  sub_component_data: [ ] ... additional components as needed
  ```
</details>
