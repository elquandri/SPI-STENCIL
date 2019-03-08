import {Component, State, Prop} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-candidat-detail",
  styleUrl: "spi-candidat-detail.scss"
})
export class SpiCandidatDetail {
  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State()

  item: any;

  componentWillLoad() {
    let id = this.match.params.id;
    return fetch("https://api-dosispi.cleverapps.io/candidats/"+id)
      .then(response => response.json())
      .then(data => {
        this.item = data;});
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Candidats </h1>
        <table class="table">
          <thead>
          <tr>
            <th>No</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Sexe</th>
            <th>Université </th>
            <th>nationalite</th>
            <th>date Naissance</th>
            <th>Mobile</th>
            <th>Email </th>
            <th>Code P</th>
            <th>Adresse</th>
            <th>Selection</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.item.noCandidat}</td>
            <td>{this.item.nom}</td>
            <td>{this.item.prenom}</td>
            <td>{this.item.sexe}</td>
            <td>{this.item.universiteOrigine}</td>
            <td>{this.item.nationalite}</td>
            <td>{this.item.dateNaissance}</td>
            <td>{this.item.mobile}</td>
            <td>{this.item.email}</td>
            <td>{this.item.codePostal}</td>
            <td>{this.item.adresse}</td>
            <td>{this.item.listeSelection}</td>
          </tr>
          </tbody>
        </table>
      </div>

    );}
}
