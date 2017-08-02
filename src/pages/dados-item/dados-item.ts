import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'dados-item',
  templateUrl: 'dados-item.html'
})

export class DadosItem {

 quantoGastou: any;
 ondeGastou: any;
 descricaoGasto: any;
 minhaData: any = new Date();

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, navParams: NavParams) { }

  fecharModal(){

    this.viewCtrl.dismiss();

    this.quantoGastou = null;
    this.ondeGastou = null;
    this.descricaoGasto = null;
  }

  salvarDados(){

    let listaDados = {
      quantoGastou: this.quantoGastou,
      ondeGastou: this.ondeGastou,
      descricaoGasto: this.descricaoGasto,
      tempoAtual: this.minhaData
    }
    /* "EXBIR UMA MENSAGEM QUANDO O USUARIO TENTAR SALVAR COM TODOS OS CAMPOS VAZIOS"
    PROSSEGUIR NORMALMENTE QUANDO PELO MENOS UM DOS CAMPOS ESTIVER FOR PREENCHIDO */
    if(listaDados.quantoGastou   == null && 
       listaDados.ondeGastou     == null && 
       listaDados.descricaoGasto == null   ) {
          console.log('Por favor preencha os campos'); //IMPLEMENTAR UM "ALERT" FUTURAMENTE
    }else{
      this.viewCtrl.dismiss(listaDados);
    }
  }
}
