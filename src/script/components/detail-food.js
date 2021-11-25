import baseURL from "../service/api.js"

const detailRecipe = () => {

  const getFoodDetail = (idmeal) => {
    return fetch(`${baseURL}/lookup.php?i=${idmeal}`)
      .then(res => res.json())
      .then(response => response.meals[0])
      .catch(error => console.log(error))
  }

  document.addEventListener("click", async (e) => {
    if(e.target.classList.contains("modal-detail")) {
      try {
        const idmeal = e.target.dataset.idmeal
        const foodDetail = await getFoodDetail(idmeal)
        showRecipe(foodDetail)
      } catch (error) {
        console.log(error)
      }
    }
  })


  // const insertToModal = (recipes) => {
  //   const recipeDetail = showRecipe(recipes)
  //   const modalBody = document.querySelector(".modal-body")
  //   modalBody.innerHTML = recipeDetail
  // }

  const showRecipe = (recipe) => {
    const modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = ""

    const ingredients = []

    for (let i = 1; i <= 20; i++) {
      if (recipe["strIngredient" + i]) {
        ingredients.push(`${recipe["strMeasure" + i]} - ${recipe["strIngredient" + i]}`)
      } else {
        break;
      }
    }

    modalBody.innerHTML = `
      <img 
        src="${recipe.strMealThumb}" 
        class="img-fluid rounded shadow" 
      />
      <h4 class="mt-3 title">
        ${recipe.strMeal} - ${recipe.strArea}
      </h4>
      <span class="badge rounded-pill p-2">${recipe.strCategory}</span>
      <h5 class="mt-3">Ingredients</h5>
      <ul>
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
      </ul>
      <h5 class="mt-3">Instructions</h5>
      <p style="white-space: pre-line; text-align: justify; margin-top: -25px">
        ${recipe.strInstructions}
      </p>
      <a href="${recipe.strYoutube}" target="__blank">
        <button class="btn">Instructions with video</button>
      </a>
    `
  }
}

export default detailRecipe