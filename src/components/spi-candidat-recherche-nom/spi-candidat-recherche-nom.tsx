import {Component, State, Prop} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-candidat-recherche-nom",
  styleUrl: "spi-candidat-recherche-nom.scss"
})
export class SpiCandidatRechercheNom {
  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State()

@State() candidats: any;

  componentWillLoad() {
    let nom = this.match.params.nom;
    return fetch("https://api-dosispi.cleverapps.io/candidats/nom/"+nom)
      .then(response => response.json())
      .then(data => {
        this.candidats = data;});
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Candidat </h1>
        <table class="table">
          <thead>
          <tr>
            <th>No</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Sexe</th>
            <th>Pays</th>
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
          {this.candidats.map(item =>
          <tr>
            <td>{item.noCandidat}</td>
            <td>{item.nom}</td>
            <td>{item.prenom}</td>
            <td>{item.sexe}</td>
            <td>{item.paysOrigine}</td>
            <td>{item.nationalite}</td>
            <td>{item.dateNaissance}</td>
            <td>{item.mobile}</td>
            <td>{item.email}</td>
            <td>{item.codePostal}</td>
            <td>{item.adresse}</td>
            <td>{item.listeSelection}</td>
          </tr>
          )}
          </tbody>
        </table>
      </div>

    );}
}
