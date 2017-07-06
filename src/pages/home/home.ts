import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DadosItem } from '../dados-item/dados-item';
import { ItemDescricao } from '../item-descricao/item-descricao';

import { Dados } from '../../providers/dados';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items: any = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public servicoDados: Dados) {

    this.servicoDados.obterDados().then((dados) => {
      if(dados){
            this.items = JSON.parse(dados); //CONVERTE OS DADOS DO SERVIDOR EM OBJETO
        }
    });
  }

  adicionarItem(){
    let modal = this.modalCtrl.create(DadosItem);

    modal.onDidDismiss(listaDados => {
     if(listaDados){
       this.salvarDados(listaDados);
     }
    });
    modal.present();
  }

  salvarDados(listaDados){
   this.items.push(listaDados);
   this.servicoDados.salvar(this.items);
 }

 verItem(item){
    this.navCtrl.push(ItemDescricao, {
    item: item
    });
  }

  apagarItem(item){
    this.items.splice(item,1);
    this.servicoDados.apagar(this.items);
    console.log('Item '+item+' apagado com sucesso...');
  }
}
