// To mock drupal attributes in storybook.
import drupalAttribute from 'drupal-attribute'

export default {
  default: {
    principal: "<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
  },
  with_top: {
    top: "<div class='box'><p>Top</p></div>",
    principal: "<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
  },
  with_bottom: {
    principal: "<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
    bottom: "<div class='box'><p>Bottom</p></div>",
  },
  with_both: {
    top: "<div class='box'><p>Top</p></div>",
    principal: "<div class='box'><p>This is principal</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum facere omnis voluptas neque ipsam debitis rerum numquam? Praesentium consectetur expedita delectus provident itaque quae ad est molestias, quas repellendus dicta.</p></div>",
    bottom: "<div class='box'><p>Bottom</p></div>",
  },
}
