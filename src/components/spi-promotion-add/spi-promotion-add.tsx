import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-promotion-add",
  styleUrl: "spi-promotion-add.scss"
})
export class spiPromotionAdd {

  @State()
  formations: any;
  componentWillLoad() {
    return  fetch("https://dosispi.cleverapps.io/formations")
      .then(response => response.json())
      .then(data => {
        this.formations = data;});
  }

  @State()  siglePromotion: number;
  @State()  processusStage: string;
  @State()  nbMaxEtudiant: number;
  @State()  lieuRentree: string;
  @State()  dateRentree: Date;
  @State()  dateReponseLalp: Date;
  @State()  dateReponseLp: Date;
  @State()  commentaire: string;
  @State()  id:any = {};
  @Prop()   home : RouterHistory;





  postPromotion(p) {
    p.preventDefault();
    const siglePromotion = this.siglePromotion;
    const id =this.id;
    const processusStage = this.processusStage;
    const nbMaxEtudiant = this.nbMaxEtudiant;
    const lieuRentree = this.lieuRentree;
    const dateRentree = this.dateRentree;
    const dateReponseLalp = this.dateReponseLalp;
    const dateReponseLp = this.dateReponseLp;
    const commentaire = this.commentaire;
    const payload = {
      siglePromotion,
      id,
      processusStage,
      nbMaxEtudiant,
      lieuRentree,
      dateRentree,
      dateReponseLalp,
      dateReponseLp,
      commentaire,
    };


    fetch("https://dosispi.cleverapps.io/promotions", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) {
        return res.json();

      })
      .then(() => {location.href='/promotion';
      });
  }

  render() {
    return (
<div class="container">
      <form>

        <h1 class="title is-3 en"> <i class="fas fa-users"></i> Nouvelle Promotion </h1>
<div class="columns is-multiline is-mobile ">

  
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <input type="text" placeholder="Année universitaire " class="input is-info is-rounded is-medium"
           onInput={(e: any) => (this.id.anneeUniversitaire = e.target.value)}/>
   <span class="icon is-small is-left">
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
  </div>

            <div class="column is-half">
            <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="sigle Promotion " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.siglePromotion = e.target.value)}/>
          <span class="icon is-small is-left">
          <i class="fas fa-users"></i>
    </span>
    </p>
            </div>

     <div class="column is-half">
     <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Processus de stage" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.processusStage = e.target.value)}/>
      <span class="icon is-small is-left">
    <i class="fas fa-bookmark"></i>
    </span>
    </p>
     </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
       <input type="number" placeholder="Nombre maximum des étudiants" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.nbMaxEtudiant = e.target.value)}/>
       <span class="icon is-small is-left">
          <i class="fas fa-sort-numeric-up"></i>
    </span>
    </p>
  </div>

  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Lieu de rentree " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.lieuRentree = e.target.value)}/>
          <span class="icon is-small is-left">
<i class="fas fa-map-marker-alt"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="date de Rentree " class="input is-info is-rounded is-medium is-tooltip-success tooltip" data-tooltip="Tooltip Text" onFocus={(e:any) => e.target.type='date'} onBlur={(e:any) => e.target.type='text'} onInput={(e: any) => (this.dateRentree = e.target.value)}/>
          <span class="icon is-small is-left">l
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
  </div>

  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="date de reponse Lalp"  class="input is-info is-rounded is-medium"  onFocus={(e:any) => e.target.type='date'} onBlur={(e:any) => e.target.type='text'} onInput={(e: any) => (this.dateReponseLalp = e.target.value)}/>
          <span class="icon is-small is-left">
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="date de reponse Lp" class="input is-info is-rounded is-medium" onFocus={(e:any) => e.target.type='date'} onBlur={(e:any) => e.target.type='text'} onInput={(e: any) => (this.dateReponseLp = e.target.value)}/>
          <span class="icon is-small is-left">
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
  </div>
  
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder=" commentaire" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.commentaire = e.target.value)}/>
          <span class="icon is-small is-left">
          <i class="far fa-comment-alt"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <div class="select is-info is-rounded is-medium">
      <select onInput={(e: any) => (this.id.codeFormation = e.target.value)}>
        {this.formations.map(item =>
        <option value={item.codeFormation}>{item.codeFormation}</option>
        )}
      </select>
    </div>
    <span class="icon is-small is-left">
          <i class="fas fa-book-open"/>
    </span>
    </p>
  </div>

 </div>
 <div class="field is-grouped is-grouped-centered">
  <p class="control">
    <button onClick={this.postPromotion.bind(this)} class="button is-info " >Submit</button>
  </p>

  <p class="control">
  <button type="reset"   class="button is-light is-tooltip-danger tooltip" data-tooltip="Vous risquer de vider le formulaire !!"  > Vider les champs </button>
   
  </p>
</div>

  </form>
</div>

    );}
}
