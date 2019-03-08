import {Component, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-enseignant-detail",
  styleUrl: "spi-enseignant-detail.scss"
})
export class SpiEnseignantDetail {

  @State()
  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  item: any;
  componentWillLoad() {
    let id = this.match.params.id;
    return fetch("https://api-dosispi.cleverapps.io/enseignants/"+ id)
        .then(response => response.json())
        .then(data => {
          this.item = data;});
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Enseignant </h1>
        <table class="table">
          <thead>
          <tr>
            <th>No</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Sexe</th>
            <th>Pays</th>
            <th>Ville</th>
            <th>Tel</th>
            <th>Mobile</th>
            <th>Email UBO</th>
            <th>Email Perso</th>
            <th>Code Postale</th>
            <th>Adresse</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.item.noEnseignant}</td>
              <td>{this.item.nom}</td>
              <td>{this.item.prenom}</td>
              <td>{this.item.sexe}</td>
              <td>{this.item.pays}</td>
              <td>{this.item.type}</td>
              <td>{this.item.telephone}</td>
              <td>{this.item.mobile}</td>
              <td>{this.item.emailUbo}</td>
              <td>{this.item.emailPerso}</td>
              <td>{this.item.codePostal}</td>
              <td>{this.item.adresse}</td>
            </tr>
          </tbody>
        </table>
      </div>

    );}
}
