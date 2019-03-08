import {Component, State} from "@stencil/core";

@Component({
  tag: 'spi-enseignant-recherche',
  styleUrl: "spi-enseignant-recherche.scss"
})
export class SpiEnseignantRecherche {
  @State() nom : String;
  @State() emailUbo : String;


  render() {
    return (

<div class="field rech">
  <h1 class="title"> Recherche Enseignant </h1>
<div class="recherche">
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="text" placeholder="Email UBO" onInput={(e: any) => (this.emailUbo = e.target.value)}/>
    <span class="icon is-small is-left">
      <i class="fas fa-search"></i>
    </span>
  </p>
  </div>
  <div class="column is-half">
    <stencil-route-link url={"/enseignant/recherche/emailubo/"+this.emailUbo} >
    <td><a class="button is-info ">  Recherche</a></td>
    </stencil-route-link>
  </div>
</div>

</div>

      


    );}
}
