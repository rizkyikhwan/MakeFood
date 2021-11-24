import "./food-item.js"

class FoodList extends HTMLElement {

  set items(items) {
    this._items = items
    this.render()
  }

  renderError(message) {
    this.innerHTML = ""
    this.innerHTML += `
    <div class="alert alert-danger text-center" role="alert">
      ${message}
    </div>
    `
  }

  render() {
    this.innerHTML = ""
    this._items.forEach(item => {
      const foodItemElement = document.createElement("food-item")
      foodItemElement.setAttribute("class", "col-6 col-md-3 my-2 px-1 px-lg-2")
      foodItemElement.item = item
      this.appendChild(foodItemElement)
    })
  }
}

customElements.define("food-list", FoodList)