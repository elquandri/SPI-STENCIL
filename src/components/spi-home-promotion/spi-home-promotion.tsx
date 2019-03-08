import { Component, State } from "@stencil/core";

@Component({
  tag: "spi-home-promotion",
  styleUrl: "spi-home-promotion.scss"
})
export class SpiHomePromotion {

  @State()
  promotions: any;
  componentWillLoad() {
    return fetch("https://api-dosispi.cleverapps.io/promotions")
        .then(response => response.json())
        .then(data => {
          this.promotions = data;});
  }

  render() {
    return (
      <div>
        <h1 class="title is-3 en"> Promotions </h1>
        <table class="table">
          <thead>
          <tr>
            <th>année Universitaire</th>
            <th>code Formation</th>
            <th>sigle</th>
            <th></th>

          </tr>
          </thead>
          <tbody>
          {this.promotions.map(item =>
            <tr>
              <td>{item.id.anneeUniversitaire}</td>
              <td>{item.id.codeFormation}</td>
              <td>{item.siglePromotion}</td>
              <stencil-route-link url={"/promotion/detail/"+ item.id.codeFormation + "/" + item.id.anneeUniversitaire}>
                <td><a class="button is-info "> <i class="fas fa-plus"></i> Details</a></td>
              </stencil-route-link>
            </tr>
          )}
          </tbody>
        </table>
      </div>

    );}
}
