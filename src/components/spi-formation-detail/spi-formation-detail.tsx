import {Component, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-formation-detail",
  styleUrl: "spi-formation-detail.scss"
})
export class SpiFormationDetail {
  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State()
  item: any;
  componentWillLoad() {
    let id = this.match.params.id;
    return  fetch("https://api-dosispi.cleverapps.io/formations/"+id)
        .then(response => response.json())
        .then(data => {
          this.item = data;});
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
            <th>debut Accreditation</th>
            <th>diplome</th>
            <th>double Diplome</th>
            <th>fin Accreditation</th>
            <th>n0 Annee</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.item.codeFormation}</td>
              <td>{this.item.nomFormation}</td>
              <td>{this.item.debutAccreditation}</td>
              <td>{this.item.diplome}</td>
              <td>{this.item.doubleDiplome}</td>
              <td>{this.item.finAccreditation}</td>
              <td>{this.item.n0Annee}</td>
            </tr>
          </tbody>
        </table>
      </div>

    );}
}
