class DataSearch {
  static searchFood(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(res => res.json())
      .then(response => {
        if (response.meals) {
          return Promise.resolve(response.meals)
        } else {
          return Promise.reject(`<span class="fw-bold">${keyword}</span> is not found!`)
        }
      })
  }
}

export default DataSearch