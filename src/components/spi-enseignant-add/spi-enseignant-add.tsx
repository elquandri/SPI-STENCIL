import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-enseignant-add",
  styleUrl: "spi-enseignant-add.scss"
})
export class spiEnseignantAdd {
  @State() noEnseignant : number;
  @State() adresse : String ;
  @State() codePostal : String ;
  @State() emailPerso : String ;
  @State() emailUbo : String ;
  @State() mobile : String ;
  @State() nom : String ;
  @State() pays : String ;
  @State() prenom : String ;
  @State() sexe : String ;
  @State() telephone : String ;
  @State() type : String ;
  @State() ville : String ;
  @Prop()   home : RouterHistory;





  postEnseignant(e) {
    e.preventDefault();
    const adresse = this.adresse;
    const codePostal = this.codePostal ;
    const emailPerso=this.emailPerso;
    const emailUbo=this.emailUbo;
    const mobile=this.mobile;
    const nom=this.nom;
    const pays=this.pays;
    const prenom=this.prenom;
    const sexe=this.sexe;
    const telephone=this.telephone;
    const type=this.type;
    const ville=this.ville;
    const payload = {
      adresse,
      codePostal,
      emailPerso,
      emailUbo,
      mobile,
      nom,
      pays,
      prenom,
      sexe,
      telephone,
      type,
      ville
    };

    fetch("https://api-dosispi.cleverapps.io/enseignants", {
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
      .then(() => {location.href='/enseignant';
      });
  }

  render() {
    return (

      <form>

        <h1 class="title is-3 en"> <i class="fas fa-user-tie"></i> Nouveau Enseignant </h1>
<div class="columns is-multiline is-mobile ">

            <div class="column is-half">
            <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Nom" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.nom = e.target.value)}/>
          <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
              </p>
            </div>
      <div class="column is-half">
      <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Prénom" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.prenom = e.target.value)}/>
          <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
              </p>
      </div>
     <div class="column is-half">
     <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Pays" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.pays = e.target.value)}/>
          <span class="icon is-small is-left">
    <i class="fas fa-globe-americas"></i>
    </span>
       </p>
     </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
       <input type="text" placeholder="Type" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.type = e.target.value)}/>
       <span class="icon is-small is-left">
       <i class="far fa-keyboard"></i>
    </span>
       </p>
  </div>

  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="tel" placeholder="Téléphone" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.telephone = e.target.value)}/>
          <span class="icon is-small is-left">
    <i class="fas fa-phone"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="tel" placeholder="Mobile" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.mobile = e.target.value)}/>
          <span class="icon is-small is-left">
          <i class="fas fa-mobile-alt"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="email"
                  placeholder="Email UBO "  class="input is-info is-rounded is-medium"
                  onInput={(e: any) => (this.emailUbo = e.target.value)}
                />
                  <span class="icon is-small is-left">
      <i class="fas fa-at"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <input type="email"
           placeholder="Email Personnel " class="input is-info is-rounded is-medium"
           onInput={(e: any) => (this.emailPerso = e.target.value)}
    />
      <span class="icon is-small is-left">
      <i class="fas fa-at"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="number" placeholder="Code postale"  class="input is-info is-rounded is-medium"  onInput={(e: any) => (this.codePostal = e.target.value)}/>
  
          <span class="icon is-small is-left">
  <i class="fas fa-map-marked-alt"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Adresse" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.adresse = e.target.value)}/>
          <span class="icon is-small is-left">
<i class="fas fa-map-marker-alt"></i>
    </span>
    </p>
  
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Ville" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.ville = e.target.value)}/>
          <span class="icon is-small is-left">
<i class="fas fa-map-marker-alt"></i>
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
    <button onClick={this.postEnseignant.bind(this)} class="button is-info" >Submit</button>
  </p>
  <p class="control">
  <button type="reset"   class="button is-light is-tooltip-danger tooltip" data-tooltip="Vous risquer de vider le formulaire !!"> Vider les champs </button>
   
  </p>
</div>

  </form>


    );}
}
