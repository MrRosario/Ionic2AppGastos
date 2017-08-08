import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'dados-item',
  templateUrl: 'dados-item.html'
})

export class DadosItem {

 quantoGastou: any;
 ondeGastou: any;
 descricaoGasto: any;
 minhaData: any = new Date();

 dia: any = this.minhaData.getDate();
 mes: any = this.minhaData.getMonth()+1;
 ano: any = this.minhaData.getFullYear();

  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController, 
              navParams: NavParams, private alertCtrl: AlertController) { }

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
      tempoAtual: this.minhaData,
      dia: this.dia,
      mes: this.mes,
      ano: this.ano
    }
    /* "EXBIR UMA MENSAGEM QUANDO O USUARIO TENTAR SALVAR COM TODOS OS CAMPOS VAZIOS"
    PROSSEGUIR NORMALMENTE QUANDO PELO MENOS UM DOS CAMPOS ESTIVER PREENCHIDO */
    if(listaDados.quantoGastou   == null && listaDados.ondeGastou == null  && 
       listaDados.descricaoGasto == null ) {

      let alert = this.alertCtrl.create({
        title: 'Aviso',
        subTitle: 'Por favor preenche pelo menos um dos campos.',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.viewCtrl.dismiss(listaDados);
    }
  }
}
