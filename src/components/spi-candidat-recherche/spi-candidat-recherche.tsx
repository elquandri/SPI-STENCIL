import {Component, State} from "@stencil/core";

@Component({
  tag: 'spi-candidat-recherche',
  styleUrl: "spi-candidat-recherche.scss"
})
export class SpiCandidatRecherche {
  @State() nom : String;
  @State() universiteOrigine : String;


  render() {
    return (

<div class="field">
  <h1 class="title"> Recherche Candidat </h1>
<div class="recherche">
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="text" placeholder="Nom" onInput={(e: any) => (this.nom = e.target.value)}/>
    <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
    </span>
  </p>
  </div>
  <div class="column is-half">
    <stencil-route-link url={"/candidat/recherche/nom/"+this.nom} >
    <td><a class="button is-info ">  Recherche</a></td>
    </stencil-route-link>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="text" placeholder="Université" onInput={(e: any) => (this.universiteOrigine = e.target.value)}/>
    <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
    </span>
  </p>
  </div>
  <div class="column is-half">
    <stencil-route-link url={"/candidat/recherche/universite/"+this.universiteOrigine} >
    <td><a class="button is-info ">  Recherche</a></td>
    </stencil-route-link>
  </div>
</div>

</div>

      


    );}
}
