import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-home-formation",
  styleUrl: "spi-home-formation.scss"
})
export class SpiHomeFormation {

  @State()
  formations: any;
  componentWillLoad() {
    return  fetch("https://api-dosispi.cleverapps.io/formations")
        .then(response => response.json())
        .then(data => {
          this.formations = data;});
  }
  deleteFormation(item) {
    return fetch("https://api-dosispi.cleverapps.io/formations", {
      method: 'DELETE',
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item),
    }).then(() => {location.href='/formation';}
    ).catch((error) => {
      alert(' Erreur de suppression ');
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Formations </h1>
        <table class="table">
          <thead>
          <tr>
            <th>Code</th>
            <th>Nom</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.formations.map(item =>
            <tr>
              <td>{item.codeFormation}</td>
              <td>{item.nomFormation}</td>
              <stencil-route-link url={"/formation/detail/"+ item.codeFormation}>
                <td><a class="button is-info "> <i class="fas fa-plus"></i> Details</a></td>
              </stencil-route-link>
              <td><a class="button is-danger" onClick={() => this.deleteFormation(item)}>
                <i class="fas fa-trash"></i> Supprimer</a></td>
            </tr>
          )}
          </tbody>
        </table>
      </div>

    );}
}
