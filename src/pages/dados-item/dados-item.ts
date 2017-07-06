import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'dados-item',
  templateUrl: 'dados-item.html'
})

export class DadosItem {

 quantoGastou: any; ondeGastou: any; descricaoGasto: any; minhaData: any = new Date();

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, navParams: NavParams) { }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

  salvarDados(){
    let listaDados = {
      quantoGastou: this.quantoGastou,
      ondeGastou: this.ondeGastou,
      descricaoGasto: this.descricaoGasto,
      tempoAtual: this.minhaData
    }
    this.viewCtrl.dismiss(listaDados);
  }
}
