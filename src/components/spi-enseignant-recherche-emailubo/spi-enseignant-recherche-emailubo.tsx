import {Component, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-enseignant-recherche-emailubo",
  styleUrl: "spi-enseignant-recherche-emailubo.scss"
})
export class SpiEnseignantRechercheEmailubo {

  @State()
  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State() enseignant: any;

  componentWillLoad() {
    let emailubo = this.match.params.emailubo;
    return fetch("https://api-dosispi.cleverapps.io/enseignants/emailUbo/"+emailubo)
      .then(response => response.json())
      .then(data => {
        this.enseignant = data;});
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
            <td>{this.enseignant.noEnseignant}</td>
            <td>{this.enseignant.nom}</td>
            <td>{this.enseignant.prenom}</td>
            <td>{this.enseignant.sexe}</td>
            <td>{this.enseignant.pays}</td>
            <td>{this.enseignant.type}</td>
            <td>{this.enseignant.telephone}</td>
            <td>{this.enseignant.mobile}</td>
            <td>{this.enseignant.emailUbo}</td>
            <td>{this.enseignant.emailPerso}</td>
            <td>{this.enseignant.codePostal}</td>
            <td>{this.enseignant.adresse}</td>
          </tr>
          )}
          </tbody>
        </table>
      </div>

    );}
}
