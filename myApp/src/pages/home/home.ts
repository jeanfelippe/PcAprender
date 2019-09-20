import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { JogosPage } from '../jogos/jogos';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage=PerfilPage;


  constructor(public navCtrl: NavController) {

  }

    abrirPerfil(){
      this.navCtrl.push(PerfilPage)
    }


    
    abrirJogos(){
      this.navCtrl.push(JogosPage)
    }

    
    abrirSobre(){
      this.navCtrl.push(SobrePage)
    }
}
