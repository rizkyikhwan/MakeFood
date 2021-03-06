import baseURL from "../service/api.js"

const filterFood = () => {
  // Get selection category
  const getCategory = async () => {
    try {
      const res = await fetch(`${baseURL}/list.php?c=list`)
      const response = await res.json()
      insertCategory(response.meals)
    } catch(error) {
      console.log(error);
    }
  }

  getCategory()

  const insertCategory = (options) => {
    options.forEach(option => {
      const selectOption = document.createElement("option")
      selectOption.text = `${option.strCategory}`
      selectOption.value = `${option.strCategory}`
      const categoryFood = document.querySelector("#category-food")
      categoryFood.appendChild(selectOption)
    })
  }

  // Insert into the card and display to page
  const selectCategory = document.querySelector("#category-food")
  selectCategory.addEventListener("change", async (select) => {
    try {
      const res = await fetch(`${baseURL}/filter.php?c=${select.target.value}`)
      const response = await res.json()
      insertCard(response.meals)
    } catch(error) {
      console.log(error);
    }
  })

  const insertCard = (categorys) => {
    let cards = ""
    categorys.forEach(category => cards += showCards(category))
    const catagoryContainer = document.querySelector(".category-container")
    catagoryContainer.innerHTML = cards
  }

  const showCards = (food) => {
    return `<div class="col-6 col-md-3 my-3 px-1 px-lg-2">
              <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">${food.strMeal}</h5>
                  <button type="button" class="btn btn-primary modal-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-idmeal=${food.idMeal}>
                    Show Recipe
                  </button>
                </div>
            </div>
          </div>`
  }
  
}

export default filterFood
