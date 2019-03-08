import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "spi-formation-add",
  styleUrl: "spi-formation-add.scss"
})
export class spiFormationAdd {
  @State() codeFormation : String;
  @State() debutAccreditation : Date ;
  @State() diplome : String ;
  @State() doubleDiplome : String ;
  @State() finAccreditation : Date ;
  @State() n0Annee : number ;
  @State() nomFormation : String ;
  @Prop()   home : RouterHistory;

  postFormation(f) {
    f.preventDefault();
    const codeFormation = this.codeFormation;
    const debutAccreditation = this.debutAccreditation;
    const diplome = this.diplome ;
    const doubleDiplome=this.doubleDiplome;
    const finAccreditation=this.finAccreditation;
    const n0Annee=this.n0Annee;
    const nomFormation=this.nomFormation;

    const payload = {
      codeFormation,
      debutAccreditation,
      diplome,
      doubleDiplome,
      finAccreditation,
      n0Annee,
      nomFormation,
    };

    fetch("https://api-dosispi.cleverapps.io/formations", {
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
      .then(() => {location.href='/formation';
      });
  }

  render() {
    return (

      <form>

        <h1 class="title is-3 en"><i class="fas fa-book-open"></i> Nouvelle Formation </h1>
<div class="columns is-multiline is-mobile ">
          <div class="column is-half control has-icons-left has-icons-right">
          <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="code Formation" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.codeFormation = e.target.value)}/>
          <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
              </p>
          </div>
            <div class="column is-half">
            <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="debut Accreditation" class="input is-info is-rounded is-medium"  onFocus={(e:any) => e.target.type='date'} onBlur={(e:any) => e.target.type='text'} onInput={(e: any) => (this.debutAccreditation = e.target.value)}/>
          <span class="icon is-small is-left">
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
            </div>

  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="fin Accreditation "  onFocus={(e:any) => e.target.type='date'} onBlur={(e:any) => e.target.type='text'} class="input is-info is-rounded is-medium" onInput={(e: any) => (this.finAccreditation = e.target.value)}/>
          <span class="icon is-small is-left">
    <i class="fas fa-calendar-week"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="number" placeholder="nombre années" class="input is-info is-rounded is-medium" onInput={(e: any) => (this.n0Annee = e.target.value)}/>
          <span class="icon is-small is-left">
          <i class="fas fa-sort-numeric-up"></i>
    </span>
    </p>
  </div>

  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
          <input type="text" placeholder="Nom formation"  class="input is-info is-rounded is-medium"  onInput={(e: any) => (this.nomFormation = e.target.value)}/>
          <span class="icon is-small is-left">
          <i class="fas fa-book-open"/>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <div class="select is-info is-rounded is-medium">
      <select onInput={(e: any) => (this.diplome = e.target.value)}>
        <option value=""> Diplome</option>
        <option value="M">Master</option>
        <option value="L">Licence</option>
        <option value="D">Deug</option>
      </select>
    </div>
    <span class="icon is-small is-left">
    <i class="fas fa-book"></i>
    </span>
    </p>
  </div>
  <div class="column is-half">
  <p class="control has-icons-left has-icons-right">
    <div class="select is-info is-rounded is-medium">
      <select onInput={(e: any) => (this.doubleDiplome = e.target.value)}>
        <option value=""> Double Diplome</option>
        <option value="O">Oui</option>
        <option value="n">Non</option>
      </select>
    </div>
    <span class="icon is-small is-left">
    <i class="fas fa-bookmark"></i>
    </span>
    </p>
  </div>
 </div>
 <div class="field is-grouped is-grouped-centered ">
  <p class="control">
    <button onClick={this.postFormation.bind(this)} class="button is-info" >Submit</button>
  </p>
  <p class="control">
  <button type="reset"   class="button is-light is-tooltip-danger tooltip" data-tooltip="Vous risquer de vider le formulaire !!"> Vider les champs </button>
   
  </p>
</div>

  </form>


    );}
}
