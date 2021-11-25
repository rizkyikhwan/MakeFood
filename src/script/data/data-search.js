import baseURL from "../service/api.js"

class DataSearch {
  static searchFood(keyword) {
    return fetch(`${baseURL}/search.php?s=${keyword}`)
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