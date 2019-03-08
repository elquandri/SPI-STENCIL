import { Component } from "@stencil/core";
@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
      <span class="icon">
     <i class="fas fa-cogs"></i>
       </span>
        <span>
      SPI-STENCIL
        </span>
      </a>
    </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <stencil-route-link url={"/candidat"}>
        <a class="navbar-link"> <i class="fas fa-user-graduate"></i>
        Candidat
        </a>
        </stencil-route-link>
        <div class="navbar-dropdown">
          <stencil-route-link url={"/candidat/add"}>
          <a class="navbar-item">
            <i class="fas fa-user-check"></i>
            Ajout
          </a>
          </stencil-route-link>
          <a class="navbar-item">
            <i class="fas fa-user-minus"></i>
            Suppression 
          </a>
          <stencil-route-link url={'/candidat/recherche'}>
          <a class="navbar-item">
          <span class="icon">
       <i class="fas fa-search"></i>
       </span>
            Recherche
          </a>
          </stencil-route-link>
      </div>
    </div>
    <div class="navbar-item has-dropdown is-hoverable">
      <stencil-route-link url={"/enseignant"}>
        <a class="navbar-link">
          <i class="fas fa-user-tie"></i>
        Enseignant
        </a>
      </stencil-route-link>
        <div class="navbar-dropdown">
          <stencil-route-link url={"/enseignant/add"}>
          <a class="navbar-item">
            <i class="fas fa-user-check"></i>
            Ajout
          </a>
          </stencil-route-link>
          <a class="navbar-item">
            <i class="fas fa-user-minus"></i>
            Suppression 
          </a>
          <stencil-route-link url={'/enseignant/recherche'}>
          <a class="navbar-item">
          <span class="icon">
        <i class="fas fa-search"></i>
       </span>
            Recherche
          </a>
          </stencil-route-link>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <stencil-route-link url={"/formation"}>
        <a class="navbar-link">
          <i class="fas fa-book-open"></i>
        Formation
        </a>
        </stencil-route-link>
        <div class="navbar-dropdown">
          <stencil-route-link url={"/formation/add"}>
          <a class="navbar-item">
            <i class="fas fa-plus"></i>
            Ajout
          </a>
          </stencil-route-link>
          <a class="navbar-item">
            <i class="fas fa-trash"></i>
            Suppression 
          </a>
          <a class="navbar-item">
          <span class="icon">
       <i class="fas fa-search"></i>
       </span>
            Recherche
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <stencil-route-link url={"/promotion"}>
        <a class="navbar-link">
          <i class="fas fa-users"></i>
        Promotion
        </a>
        </stencil-route-link>
        <div class="navbar-dropdown">
          <stencil-route-link url={"/promotion/add"}>
          <a class="navbar-item">
            <i class="fas fa-plus"></i>
            Ajout
          </a>
          </stencil-route-link>
          <a class="navbar-item">
          <span class="icon">
        <i class="fas fa-search"></i>
       </span>
            Recherche
          </a>
        </div>
      </div>
    
  </div>
</nav>
    );
  }
}
