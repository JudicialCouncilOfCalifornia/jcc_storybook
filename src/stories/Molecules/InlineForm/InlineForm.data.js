export default {
  default: {
    variant: "default",
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
      <button 
        type="submit" 
        value="Search" 
        class="button form-submit"
      >
        <svg class="icon">
          <use xlink:href="icons.svg#fa-search"></use>
        </svg>
        <span class="sr-only">Search</span>
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
      <button 
        type="submit" 
        value="Search" 
        class="button form-submit"
      >
        <svg class="icon">
          <use xlink:href="icons.svg#fa-search"></use>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </div>
  </form>`,
  }
}
