const detailRecipe = () => {
  const baseURL = "https://www.themealdb.com/api/json/v1/1"

  document.addEventListener("click", async (e) => {
    if(e.target.classList.contains("modal-detail")) {
      try {
        const idmeal = e.target.dataset.idmeal
        const foodDetail = await getFoodDetail(idmeal)
        insertToModal(foodDetail)
      } catch (error) {
        console.log(error)
      }
    }
  })

  const getFoodDetail = (idmeal) => {
    return fetch(`${baseURL}/lookup.php?i=${idmeal}`)
      .then(res => res.json())
      .then(response => response.meals)
      .catch(error => console.log(error))
  }

  const insertToModal = (recipes) => {
    const recipeDetail = showRecipe(recipes)
    const modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = recipeDetail
  }

  const showRecipe = (recipe) => {
    return `
    <div class="row">
      <div class="col-lg-6 mb-3">
        <img src="${recipe[0].strMealThumb}" class="img-fluid rounded shadow" />
      </div>
      <div class="col-lg-6">
        <h4>${recipe[0].strMeal} - ${recipe[0].strArea} <br><span class="fs-6 text-muted">Category: ${recipe[0].strCategory}</span></h4>
        <h5 class="mt-3">Ingredients</h5>
        <div class="row">
          <div class="col-6 p-0">
          <ul>
            ${recipe[0].strIngredient1 ? `<li>${recipe[0].strMeasure1} ${recipe[0].strIngredient1}</li>` : ""} 
            ${recipe[0].strIngredient2 ? `<li>${recipe[0].strMeasure2} ${recipe[0].strIngredient2}</li>` : ""}
            ${recipe[0].strIngredient3 ? `<li>${recipe[0].strMeasure3} ${recipe[0].strIngredient3}</li>` : ""}
            ${recipe[0].strIngredient4 ? `<li>${recipe[0].strMeasure4} ${recipe[0].strIngredient4}</li>` : ""}
            ${recipe[0].strIngredient5 ? `<li>${recipe[0].strMeasure5} ${recipe[0].strIngredient5}</li>` : ""}
            ${recipe[0].strIngredient6 ? `<li>${recipe[0].strMeasure6} ${recipe[0].strIngredient6}</li>` : ""}
            ${recipe[0].strIngredient7 ? `<li>${recipe[0].strMeasure7} ${recipe[0].strIngredient7}</li>` : ""}
            ${recipe[0].strIngredient8 ? `<li>${recipe[0].strMeasure8} ${recipe[0].strIngredient8}</li>` : ""}
            ${recipe[0].strIngredient9 ? `<li>${recipe[0].strMeasure9} ${recipe[0].strIngredient9}</li>` : ""}
            ${recipe[0].strIngredient10 ? `<li>${recipe[0].strMeasure10} ${recipe[0].strIngredient10}</li>`: ""}
           <ul> 
          </div>
          <div class="col-6 p-0">
          <ul>
            ${recipe[0].strIngredient11 ? `<li>${recipe[0].strMeasure11} ${recipe[0].strIngredient11}</li>` : ""}
            ${recipe[0].strIngredient12 ? `<li>${recipe[0].strMeasure12} ${recipe[0].strIngredient12}</li>` : ""}
            ${recipe[0].strIngredient13 ? `<li>${recipe[0].strMeasure13} ${recipe[0].strIngredient13}</li>` : ""}
            ${recipe[0].strIngredient14 ? `<li>${recipe[0].strMeasure14} ${recipe[0].strIngredient14}</li>` : ""}
            ${recipe[0].strIngredient15 ? `<li>${recipe[0].strMeasure15} ${recipe[0].strIngredient15}</li>` : ""}
            ${recipe[0].strIngredient16 ? `<li>${recipe[0].strMeasure16} ${recipe[0].strIngredient16}</li>` : ""}
            ${recipe[0].strIngredient17 ? `<li>${recipe[0].strMeasure17} ${recipe[0].strIngredient17}</li>` : ""}
            ${recipe[0].strIngredient18 ? `<li>${recipe[0].strMeasure18} ${recipe[0].strIngredient18}</li>` : ""}
            ${recipe[0].strIngredient19 ? `<li>${recipe[0].strMeasure19} ${recipe[0].strIngredient19}</li>` : ""}
            ${recipe[0].strIngredient20 ? `<li>${recipe[0].strMeasure20} ${recipe[0].strIngredient20}</li>` : ""}
          </ul>
          </div>
        </div>
      </div>
      <h5 class="mt-3">Instructions : </h5>
      <p style="white-space: pre-line; text-align: justify">${recipe[0].strInstructions}</p>
    </div>
    `
  }
}

export default detailRecipe