import Offcanvas from "../../Molecules/Offcanvas/Offcanvas.twig";
import Button from "../../Atoms/Button/Button.twig";

export default {
  default: {
    layout: "stack",
    sub_component_data: [
      Offcanvas({
        variant: "default",
        align: "right",
        close_aria_label: "Close feedback form",
        heading: {
          text: "Was this Helpful?",
          icon: {
            name: "fa-thumbs-up"
          },
        },
        sub_component_data: "<p>Offcanvas content or subcomponent goes here.</p><p>Use the trigger in the upper-right to dismiss or add a custom trigger.</p><p>See <strong>Offcanvas</strong> for more details about this component.</p>",
      }),
      Button({
        variant: "secondary",
        // collapsed: true,
        label: "Was this Helpful?",
        aria_label: "Was this Helpful?",
        icon: "thumbs-up",
        href: "javascript:void(0);",
        custom: "offcanvas__open-button",
        size: "small",
      }),
      Button({
        variant: "secondary",
        // collapsed: true,
        label: "Back to Top",
        aria_label: "Back to Top",
        icon: "arrow-up",
        href: "javascript:void(0);",
        size: "small",
      }),
    ],
  },
};
