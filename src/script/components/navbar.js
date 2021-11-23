class NavBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <h4 id="navbar-logo">MAKE FOOD</h4>
      <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="nav-menu">
        <li><a href="./" class="nav-links">Home</a></li>
        <li><a href="./recipe.html" class="nav-links">Recipe</a></li>
        <li><a href="#" class="nav-links">About</a></li>
      </ul>
    `
  }
}

customElements.define('nav-bar', NavBar)