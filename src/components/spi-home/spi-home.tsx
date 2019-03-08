import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {

  @State()
  enseignants: any;
  candidats: any;
  promotions: any;
  formations: any;
  componentWillLoad() {
    return fetch("https://dosispi.cleverapps.io/enseignants")
      .then(response => response.json())
      .then(data => {
        this.enseignants = data;})
      && fetch("https://dosispi.cleverapps.io/candidats")
      .then(response => response.json())
      .then(data => {
        this.candidats = data;})
      && fetch("https://dosispi.cleverapps.io/promotions")
        .then(response => response.json())
      .then(data => {
        this.promotions = data;})
      && fetch("https://dosispi.cleverapps.io/formations")
        .then(response => response.json())
      .then(data => {
        this.formations = data;});
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
            {this.enseignants.slice(0,2).map(item =>
          <tr>
            <td>{item.noEnseignant}</td>
            <td>{item.nom}</td>
            <td>{item.prenom}</td>
            <td>{item.sexe}</td>
            <td>{item.pays}</td>
            <td>{item.type}</td>
            <td>{item.telephone}</td>
            <td>{item.mobile}</td>
            <td>{item.emailUbo}</td>
            <td>{item.emailPerso}</td>
            <td>{item.codePostal}</td>
            <td>{item.adresse}</td>
          </tr>
            )}
          </tbody>
        </table>
        <a class="button is-primary">Details</a>
        <h1 class="title is-3 en"> Candidats </h1>
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
          {this.candidats.slice(0, 2).map(item =>
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
        <a class="button is-primary">Details</a>
        <h1 class="title is-3 en"> Formations </h1>
        <table class="table">
          <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th>debut Accreditation</th>
            <th>diplome</th>
            <th>double Diplome</th>
            <th>fin Accreditation</th>
            <th>date Naissance</th>
            <th>n0 Annee</th>
          </tr>
          </thead>
          <tbody>
          {this.formations.slice(0, 2).map(item =>
            <tr>
              <td>{item.codeFormation}</td>
              <td>{item.nomFormation}</td>
              <td>{item.debutAccreditation}</td>
              <td>{item.diplome}</td>
              <td>{item.doubleDiplome}</td>
              <td>{item.finAccreditation}</td>
              <td>{item.n0Annee}</td>
            </tr>
          )}
          </tbody>
        </table>
        <a class="button is-primary">Details</a>
        <h1 class="title is-3 en"> Promotions </h1>
        <table class="table">
          <thead>
          <tr>
            <th>année Universitaire</th>
            <th>code Formation</th>
            <th>sigle</th>
            <th>Lieu</th>
            <th>Max Etudiant</th>
            <th>processus Stage</th>
            <th>date Rentree</th>
            <th>date Reponse Lalp</th>
            <th>date Reponse Lp</th>
            <th>commentaire</th>
          </tr>
          </thead>
          <tbody>
          {this.promotions.slice(0, 2).map(item =>
            <tr>
              <td>{item.id.anneeUniversitaire}</td>
              <td>{item.id.codeFormation}</td>
              <td>{item.siglePromotion}</td>
              <td>{item.lieuRentree}</td>
              <td>{item.nbMaxEtudiant}</td>
              <td>{item.processusStage}</td>
              <td>{item.dateRentree}</td>
              <td>{item.dateReponseLalp}</td>
              <td>{item.dateReponseLp}</td>
              <td>{item.commentaire}</td>
            </tr>
          )}
          </tbody>
        </table>
        <a class="button is-primary">Details</a>
         </div>

    );}
}
