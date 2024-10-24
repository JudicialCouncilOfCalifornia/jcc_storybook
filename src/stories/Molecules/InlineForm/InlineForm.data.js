export default {
  default: {
    variant: "default",
    submit_color: "",
    form: `<form class="views-exposed-form bef-exposed-form" action="/search" method="get">
    <div class="form-item">
      <input 
        class="form-text" 
        placeholder="Search"
        type="text" 
        value="" 
      />
    </div>
    <div class="form-actions form-wrapper" id="edit-actions">
      <button class='button form-submit' type='submit'>
        <span class='inline-form__submit-line'></span>
        <span class='inline-form__submit-circle'></span>
        <span class='sr-only'>Search</span>
      </button>
    </div>
  </form>`,
  },
  multi: {
    variant: "multi",
    form: `<form class="views-exposed-form bef-exposed-form" action="/search" method="get">
    <div class="form-item">
      <input 
        class="form-text" 
        placeholder="Search"
        type="text" 
        value="" 
      />
    </div>
    <div class="form-item">
      <input 
        class="form-text" 
        placeholder="Name"
        type="text" 
        value="" 
      />
    </div>
    <div class="form-item">
      <select 
        class="form-text" 
        type="select" 
      >
        <option value="0">- Select one -</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="form-actions form-wrapper" id="edit-actions">
      <button class='button form-submit' type='submit'>
        <span class='inline-form__submit-line'></span>
        <span class='inline-form__submit-circle'></span>
        <span class='sr-only'>Search</span>
      </button>
    </div>
  </form>`,
  }
}
