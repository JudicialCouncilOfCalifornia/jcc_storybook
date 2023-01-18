// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    first: "<div class='box'><p>This is first</p></div>",
    principal: "<div class='box'><h1>This is principal</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
    third: "<div class='box'><p>This is third</p></div>",
  },
  no_first: {
    principal: "<div class='box'><h1>This is principal</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
    third: "<div class='box'><p>This is third</p></div>",
  },
  no_third: {
    first: "<div class='box'><p>This is first</p></div>",
    principal: "<div class='box'><h1>This is principal</h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
  },
}
