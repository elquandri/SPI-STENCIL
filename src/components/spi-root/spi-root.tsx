import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/home' component='spi-home' exact={true} />
              <stencil-route url='/candidat' component='spi-home-candidat' exact={true}/>
              <stencil-route url='/promotion' component='spi-home-promotion' exact={true} />
              <stencil-route url='/formation' component='spi-home-formation' exact={true}/>
              <stencil-route url='/enseignant' component='spi-home-enseignant' exact={true} />
              <stencil-route url='/candidat/detail/:id' component='spi-candidat-detail' />
              <stencil-route url='/promotion/detail/:id1/:id2' component='spi-promotion-detail' />
              <stencil-route url='/formation/detail/:id' component='spi-formation-detail'  />
              <stencil-route url='/enseignant/detail/:id' component='spi-enseignant-detail'  />
              <stencil-route url='/candidat/add' component='spi-candidat-add' exact={true} />
              <stencil-route url='/enseignant/add' component='spi-enseignant-add' exact={true} />
              <stencil-route url='/formation/add' component='spi-formation-add' exact={true} />
              <stencil-route url='/promotion/add' component='spi-promotion-add' exact={true} />
              <stencil-route url='/candidat/recherche' component='spi-candidat-recherche' exact={true} />
              <stencil-route url='/candidat/recherche/nom/:nom' component='spi-candidat-recherche-nom' />
              <stencil-route url='/candidat/recherche/universite/:universite' component='spi-candidat-recherche-universite' />
              <stencil-route url='/enseignant/recherche' component='spi-enseignant-recherche' exact={true} />
              <stencil-route url='/enseignant/recherche/emailubo/:emailubo' component='spi-enseignant-recherche-emailubo'  />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
