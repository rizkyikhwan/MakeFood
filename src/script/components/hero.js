import heroImg from "../../assets/img/hero-img.png"
import cheeseburger from "../../assets/img/cheeseburger.png"
import cake from "../../assets/img/cake.png"

class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="row d-flex align-items-center">
        <div class="col-md-6 col-12">
          <p class="text-heading">Let’s make a food by your own <br><span>With the best recipe!</span></p>
          <a href="#recipe">
            <button class="button">Let's Cooking</button>
          </a>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <div class="wrap-img">
            <img src="${cheeseburger}" class="img-fluid  cheeseburger" />
            <img src="${cake}" class="img-fluid  cake" />
            <img src="${heroImg}" class="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('hero-section', HeroSection)