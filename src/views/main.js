import "../script/components/navbar.js"
import "../script/components/hero.js"
import "../script/components/food-list.js"
import "../script/components/search-bar.js"
import "../script/components/modal.js"
import DataSearch from "../script/data/data-search.js"
import filterFood from "../script/components/filter-food.js"
import detailRecipe from "../script/components/detail-food.js"

const main = () => {

  filterFood()

  detailRecipe()

  // Navbar
  const menu = document.querySelector("#mobile-menu")
  const menuLinks = document.querySelector(".nav-menu")
  
  menu.addEventListener("click", () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
  })

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("sticky", window.scrollY > 50)
  })

  // Search Food
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

  searchElement.searchEvent = buttonSearchClicked
}

export default main