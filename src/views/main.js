import "../script/components/navbar.js"
import "../script/components/hero.js"
import "../script/components/food-list.js"
import "../script/components/search-bar.js"
import DataSearch from "../script/data/data-search.js"
import filterFood from "../script/function/filter-food.js"
import navButton from "../script/function/toggle-nav.js"

const main = () => {
  navButton()

  filterFood()

  const searchElement = document.querySelector("search-bar")
  const foodListElement = document.querySelector("food-list")

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

  searchElement.clickEvent = buttonSearchClicked
}

export default main