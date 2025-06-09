import Button from "../../Atoms/Button/Button.twig";

export default {
  default: {
    variant: "ul",
    items: [
      {
        text: "Unde omnis iste",
      },
      {
        text: "Doloremque laudantium",
      },
      {
        text: "Ab illo inventore",
      },
    ],
  },
  with_labels: {
    variant: "ul",
    items: [
      {
        label: "Sed ut",
        text: "Unde omnis iste",
      },
      {
        label: "Voluptatem",
        text: "Doloremque laudantium",
      },
      {
        label: "Eaque ipsa",
        text: "Ab illo inventore",
      },
    ],
  },
  with_no_marker: {
    variant: "none",
    items: [
      {
        label: "Sed ut",
        text: "Unde omnis iste",
      },
      {
        label: "Voluptatem",
        text: "Doloremque laudantium",
      },
      {
        label: "Eaque ipsa",
        text: "Ab illo inventore",
      },
    ],
  },
  with_wide_span: {
    variant: "none",
    wider_span: "true",
    newline: true,
    items: [
      {
        label: "Sed ut",
        text: "Unde omnis iste",
      },
      {
        label: "Voluptatem",
        text: "Doloremque laudantium",
      },
      {
        label: "Eaque ipsa",
        text: "Ab illo inventore",
      },
    ],
  },
  with_heading: {
    variant: "none",
    heading: "Heading",
    items: [
      {
        label: "Sed ut",
        text: "Unde omnis iste",
      },
      {
        label: "Voluptatem",
        text: "Doloremque laudantium",
      },
      {
        label: "Eaque ipsa",
        text: "Ab illo inventore",
      },
    ],
  },
  with_grid: {
    variant: "ul",
    layout: "grid",
    items: [
      {
        text: "Unde omnis iste",
      },
      {
        text: "Doloremque laudantium",
      },
      {
        text: "Ab illo inventore",
      },
    ],
  },
  with_menu: {
    variant: "ul",
    heading: "Popular Links",
    withmenu: true,
    items:[
      Button({
        label: "Text Button1",
            href: "#",
            variant: "text",
            aria_label: "More descriptive label for screen readers",
            color: 'var(--color-primary)',
      }),
      Button({
        label: "This is an example of really long popular link This is an example of really long popular link This is an example of really long popular link",
            href: "#",
            variant: "text",
            aria_label: "More descriptive label for screen readers",
            color: 'var(--color-primary)',
      })
    ],
  },
};
