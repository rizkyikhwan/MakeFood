class SearchBar extends HTMLElement {

  connectedCallback() {
    this.render()
  }

  set searchEvent(event) {
    this._searchEvent = event
    this.render()
  }

  get value() {
    return this.querySelector("#searchFood").value
  }

  render() {
    this.innerHTML = `
    <div class="row g-3 mb-2">
    <h4 class="title">Search Foods</h4>
      <div class="col-auto col-sm-4">
        <input type="search" class="form-control" id="searchFood" placeholder="Search Food...">
      </div>
      <div class="col-auto col-sm-2">
        <button type="submit" class="btn button mb-3" id="searchButton">Search</button>
      </div>
    </div>
    `

    this.querySelector("#searchButton").addEventListener("click", this._searchEvent)
  }
}

customElements.define("search-bar", SearchBar)