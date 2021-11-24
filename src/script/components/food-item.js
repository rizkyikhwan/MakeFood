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
        <button type="button" id="button-modal" class="btn btn-primary modal-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-idmeal=${this._item.idMeal}>
          Show Recipe
        </button>
        </div>
        <div class="card-footer text-muted">
          ${this._item.strArea}
        </div>
    </div>
    `
  }
}

customElements.define("food-item", FoodItem)