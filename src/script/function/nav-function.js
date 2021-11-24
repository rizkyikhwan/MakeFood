const navFunction = () => {
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
}

export default navFunction
