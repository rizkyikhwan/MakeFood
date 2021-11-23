class FoodItem extends HTMLElement {

  set item(item) {
    this._item = item
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="card">
      <img src="${this._item.strMealThumb}" class="card-img-top" alt="${this._item.strMeal}">
      <div class="card-body">
        <h5 class="card-title">${this._item.strMeal}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          ${this._item.strArea}
        </div>
    </div>
    `
  }
}

customElements.define("food-item", FoodItem)