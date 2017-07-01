import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DadosItem } from '../dados-item/dados-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  exibirRemover: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }


  adicionarItem(){
    let modal = this.modalCtrl.create(DadosItem);

    modal.onDidDismiss(data => {
     console.log(data.title);
    });

    modal.present();
  }

}
