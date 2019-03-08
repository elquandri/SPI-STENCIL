import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-candidat-add",
  styleUrl: "spi-candidat-add.scss"
})
export class spiCandidatAdd {
  @State()  nom: string;
  @State()  prenom: string;
  @State()  sexe: string;
  @State()  paysOrigine: string;
  @State()  nationalite: string;
  @State()  dateNaissance: Date;
  @State()  mobile: string;
  @State()  email: string;
  @State()  codePostal: string;
  @State()  adresse: string;
  @State()  universiteOrigine: string;
  @Prop()   home : RouterHistory;





  postCandidat(c) {
    c.preventDefault();
    const nom = this.nom;
    const prenom = this.prenom;
    const sexe = this.sexe;
    const paysOrigine = this.paysOrigine;
    const nationalite = this.nationalite;
    const dateNaissance = this.dateNaissance;
    const mobile = this.mobile;
    const email = this.email;
    const codePostal = this.codePostal;
    const adresse = this.adresse;
    const universiteOrigine = this.universiteOrigine;
    const payload = {
      nom,
      prenom,
      sexe,
      paysOrigine,
      nationalite,
      dateNaissance,
      mobile,
      email,
      codePostal,
      adresse,
      universiteOrigine,
    };

    fetch("https://api-dosispi.cleverapps.io/candidats", {
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
      .then(() => {location.href='/candidat';
      });
  }

  render() {
    return (

      <form>

        <h1 class="title is-3 en"> <i class="fas fa-user-graduate"></i> Nouveau Candidat </h1>
<div class="columns is-multiline is-mobile ">
            <div class="column is-half">
              <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Nom " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.nom = e.target.value)}/>
                <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
              </p>
            </div>
      <div class="column is-half">
        <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Prénom " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.prenom = e.target.value)}/>
          <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
        </p>
      </div>
     <div class="column is-half">
       <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Pays" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.paysOrigine = e.target.value)}/>

         <span class="icon is-small is-left">
    <i class="fas fa-globe-americas"></i>
    </span>
       </p>
     </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
       <input type="text" placeholder="Nationalité" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.nationalite = e.target.value)}/>
      <span class="icon is-small is-left">
      <i class="fas fa-flag"></i>
    </span>
    </p>
  </div>

  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
          <input type="tel" placeholder="Teléphone " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.mobile = e.target.value)}/>
      <span class="icon is-small is-left">
    <i class="fas fa-phone"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Date de Naissance" class="input is-info is-rounded is-medium" onFocus={(e:any) => e.target.type='date'} onBlur={(e:any) => e.target.type='text'} onInput={(e: any) => (this.dateNaissance = e.target.value)}/>
      <span class="icon is-small is-left">
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
          <input type="email"
                  placeholder="Email"  class="input is-info is-rounded is-medium"
                  onInput={(e: any) => (this.email = e.target.value)}
                />
      <span class="icon is-small is-left">
      <i class="fas fa-at"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Code postale"  class="input is-info is-rounded is-medium"  onInput={(e: any) => (this.codePostal = e.target.value)}/>
      <span class="icon is-small is-left">
  <i class="fas fa-map-marked-alt"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="adresse " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.adresse = e.target.value)}/>
      <span class="icon is-small is-left">
<i class="fas fa-map-marker-alt"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Liste Selection " class="input is-info is-rounded is-medium" onInput={(e: any) => (this.universiteOrigine = e.target.value)}/>
      <span class="icon is-small is-left">
  <i class="fas fa-university"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
    <p class="control has-icons-left has-icons-right">
    <div class="select is-info is-rounded is-medium">
      <select onInput={(e: any) => (this.sexe = e.target.value)}>
        <option value="H">HOMME</option>
        <option value="F">FEMME</option>
        <option value="A">AUTRES</option>
      </select>
    </div>
      <span class="icon is-small is-left">
 <i class="fas fa-mars"></i> <i class="fas fa-venus"></i>
    </span>
    </p>
  </div>
 </div>
 <div class="field is-grouped is-grouped-centered">
  <p class="control">
    <button onClick={this.postCandidat.bind(this)} class="button is-info" >Submit</button>
  </p>
  <p class="control">
  <button type="reset"   class="button is-light is-tooltip-danger tooltip" data-tooltip="Vous risquer de vider le formulaire !!"> Vider les champs </button>
   
  </p>
</div>

  </form>


    );}
}
