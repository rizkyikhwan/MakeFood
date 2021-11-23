class SearchBar extends HTMLElement {

  connectedCallback() {
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  get value() {
    return this.querySelector("#searchFood").value
  }

  render() {
    this.innerHTML = `
    <div class="row g-3">
      <div class="col-auto">
        <input type="search" class="form-control" id="searchFood" placeholder="Search Food...">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3" id="searchButton">Search</button>
      </div>
    </div>
    `

    this.querySelector("#searchButton").addEventListener("click", this._clickEvent)
  }
}

customElements.define("search-bar", SearchBar)