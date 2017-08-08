import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { DadosItem } from '../dados-item/dados-item';
import { ItemDescricao } from '../item-descricao/item-descricao';
import { EditarItem } from './../editar-item/editar-item';

import { Dados } from '../../providers/dados';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items: any = [];

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,public servicoDados: Dados) {

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

  /* BUG AO SALVAR O SEXTO ITEM O QUINTO PASSA A SER O ULTIMO ITEM DA LISTA
  ESTUDAR O FUNCIONAMENTO DO REVERSE PARA ACABAR COM ISSO DE UMA VEZ POR TODAS */
  salvarDados(listaDados){
   this.items.push(listaDados);
   this.items.reverse(); //DEPOIS DE ADICIONADOS NA ARRAY A ORDEM EH REVERTIDA
   this.servicoDados.salvar(this.items);
 }

 verItem(item){
    this.navCtrl.push(ItemDescricao, {
    item: item
    });
  }

  apagarItem(index){
    this.items.splice(index,1);
    this.servicoDados.apagar(this.items);
    console.log('Item '+ index +' apagado com sucesso');
  }

  editarItem(item, i){
    this.navCtrl.push(EditarItem, {
    item: item,
    index: i //REPRESENTANDO O INDICE DO ITEM
    });
  }
}
