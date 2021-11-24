class NavBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="container px-4">
        <h4 id="navbar-logo">MAKE FOOD</h4>
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="nav-menu d-flex justify-content-evenly align-items-center">
          <li><a href="#" class="nav-links py-2">Home</a></li>
          <li><a href="#recipe" class="nav-links py-2">Recipe</a></li>
        </ul>
      </div>
    `
  }
}

customElements.define('nav-bar', NavBar)