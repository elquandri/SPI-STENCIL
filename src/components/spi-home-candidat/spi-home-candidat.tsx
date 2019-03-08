import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-home-candidat",
  styleUrl: "spi-home-candidat.scss"
})
export class SpiHomeCandidat {

  @State() candidats: any;
  deleteCandidat(item) {
    return fetch("https://api-dosispi.cleverapps.io/candidats", {
      method: 'DELETE',
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then(() => {location.href='/candidat';}
    ).catch((error) => {
      alert(' Erreur de suppression ');
      console.error(error);
    });
  }
  componentWillLoad() {
    return fetch("https://api-dosispi.cleverapps.io/candidats")
        .then(response => response.json())
        .then(data => {
          this.candidats = data;});
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Candidats </h1>
        <table class="table">
          <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>date Naissance</th>
            <th> </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.candidats.map(item =>
            <tr>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.dateNaissance}</td>
              <stencil-route-link url={"/candidat/detail/"+ item.noCandidat}>
                <td><a class="button is-info "> <i class="fas fa-plus"></i> Details</a></td>
              </stencil-route-link>
              <stencil-route-link url="/candidat" >
              <td><a class="button is-danger" onClick={() => this.deleteCandidat(item)}>
                <i class="fas fa-user-minus"></i> Supprimer</a> </td>
              </stencil-route-link>
            </tr>
          )}
          </tbody>
        </table>

      </div>

    );}
}
