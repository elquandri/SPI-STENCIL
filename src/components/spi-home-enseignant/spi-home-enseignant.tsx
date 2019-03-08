import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-home-enseignant",
  styleUrl: "spi-home-enseignant.scss"
})
export class SpiHomeEnseignant {

  @State()
  enseignants: any;
  componentWillLoad() {
    return fetch("https://api-dosispi.cleverapps.io/enseignants")
        .then(response => response.json())
        .then(data => {
          this.enseignants = data;});
  }
  deleteEnseignant(item) {
    return fetch("https://api-dosispi.cleverapps.io/enseignants", {
      method: 'DELETE',
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then(() => {location.href='/enseignant';}
    ).catch((error) => {
      alert(' Erreur de suppression  ');
      console.error(error);
    });
  }

  render() {
    return (
      <div class="home-ens">
        <h1 class="title is-3 en"> Enseignant </h1>
        <table class="table">
          <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email UBO</th>
            <th> </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.enseignants.map(item =>
            <tr>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.emailUbo}</td>
              <stencil-route-link url={"/enseignant/detail/"+ item.noEnseignant}>
                <td><a class="button is-info "> <i class="fas fa-plus"></i>Details</a></td>
              </stencil-route-link>
              <td><a class="button is-danger" onClick={() => this.deleteEnseignant(item)}>
                <i class="fas fa-user-minus"></i> Supprimer</a> </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

    );}
}
