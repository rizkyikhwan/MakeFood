import "../script/components/navbar.js"
import "../script/components/hero.js"
import "../script/components/food-list.js"
import "../script/components/search-bar.js"
import "../script/components/modal.js"
import DataSearch from "../script/data/data-search.js"
import filterFood from "../script/function/filter-food.js"
import detailRecipe from "../script/function/detail-food.js"
import navFunction from "../script/function/nav-function.js"

const main = () => {
  navFunction()

  filterFood()

  detailRecipe()

  const searchElement = document.querySelector("search-bar")
  const foodListElement = document.querySelector("food-list")

  // Search Food
  const buttonSearchClicked = async () => {
    try {
      const result = await DataSearch.searchFood(searchElement.value)
      showResult(result)
    }
    catch(message) {
      fallbackResult(message)
    }
  }

  const showResult = result => {
    foodListElement.items = result
  }

  const fallbackResult = message => {
    foodListElement.renderError(message)
  }

  searchElement.searchEvent = buttonSearchClicked
}

export default main