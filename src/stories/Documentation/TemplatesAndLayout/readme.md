<!-- This is the general documentation layout. Add or remove any sections as needed, but try to stay consistent across components. -->
# Templates and Layout

A layout is a set of rules that define how elements are positioned on a page. Layouts are the foundation of any design system. They are the building blocks that make up the structure of a page.

Our pages come in many different shapes and sizes, therefore it is critical to focus the space elements need, the relationships between elements, and the way browsers naturally render content.

Our job as developers is to convert the design into a concise and maintainable system of rules that the browser can render clearly, regardless of it's physical dimensions. Work with the browser's natural rendering and respect the content flow.

Failure to do this will result in workarounds that make the code more and more complex and unmaintainable over time.

For the most part, the "Layout Primitives" used in this project are applying flex to manage the relationships between child elements. By composing templates with these primitives, we can create complex layouts with minimal code.

## Layout Primitives

There are 13 Primitives documented in the Layout section of the Storybook. You should read the documentation and review the code for each of these components. Understand how they work and how they are used.

For a much deeper dive into the work behind these Layout Primitives, you would benefit from reading all the free content available on [Every Layout](https://every-layout.dev/rudiments/boxes/). There are some free breakdowns of the detailed thinking behind some of these components, and you can purchase the book if you want the rest.

## Template Your Layout First

Separate layout from styling in your mind. Always start with your twig template and create the bare bones html that will achieve the layout only. You should be able to do this without any CSS at all. Once you have the layout, then you can start adding the CSS to make it look good.

Test the layout with believable dummy content. One word headings will not give you a good idea of how the layout will look with real content. Use real content, even if it's just lorem ipsum.

Once you have dummy content in a bare layout, test the layout with different screen sizes. Content should flow well without any additional CSS at this stage.

If you can get all the way there with no additional CSS, that's great! Move on to styling. With more complex components or interesting design choices, you may need to adapt a layout or customize. That's fine, but you should always start with the clean Layout Primitives first.

If you need to adapt, something a little to your needs you should NOT alter the Layout Primitives. You should NOT need to create a new Primitive either. You should have a good enough understanding of the Primitives to know how to adapt them to your needs with CSS in your component. If you don't, ask for help.

If you need to manage something really unique, apply the same principles that are used in the Layout Primitives and good modern CSS.

See the CSS Best Practices documentation for more info.
