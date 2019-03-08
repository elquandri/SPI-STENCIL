import {Component, Prop, State} from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-promotion-detail",
  styleUrl: "spi-promotion-detail.scss"
})
export class SpiPromotionDetail {

  @Prop()   home : RouterHistory;
  @Prop()   match : MatchResults;
  @State()

  item: any;
  componentWillLoad() {
    let id1 = this.match.params.id1;
    let id2 = this.match.params.id2;
    return fetch("https://api-dosispi.cleverapps.io/promotions/"+id1 + "/"+id2)
        .then(response => response.json())
        .then(data => {
          this.item = data;});
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
            <tr>
              <td>{this.item.id.anneeUniversitaire}</td>
              <td>{this.item.id.codeFormation}</td>
              <td>{this.item.siglePromotion}</td>
              <td>{this.item.lieuRentree}</td>
              <td>{this.item.nbMaxEtudiant}</td>
              <td>{this.item.processusStage}</td>
              <td>{this.item.dateRentree}</td>
              <td>{this.item.dateReponseLalp}</td>
              <td>{this.item.dateReponseLp}</td>
              <td>{this.item.commentaire}</td>
            </tr>
          </tbody>
        </table>
      </div>

    );}
}
