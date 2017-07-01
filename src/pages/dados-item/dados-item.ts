import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

//import { HomePage } from './../home/home';

@Component({
  selector: 'dados-item',
  templateUrl: 'dados-item.html'
})

export class DadosItem {

  /*
    minhaData: any = new Date();
    dataAtual: any;
    dia: any = this.minhaData.getDate();
    mes: any = this.minhaData.getMonth()+1;
    ano: any = this.minhaData.getFullYear();
 */

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams, public viewCtrl: ViewController) {


    this.storage.get('quantoGastou').then((dado) =>{
      if(dado == null ){
        console.log('Sem dados adicionados ainda');
      } else{
        console.log('Quanto gastou: ' + dado );
      }
    });

    this.storage.get('ondeGastou').then((dado) =>{
      if(dado == null ){
        console.log('Sem dados adicionados ainda');
      } else{
        console.log('Onde gastou: ' + dado );
      }
    });

    this.storage.get('descricaoGasto').then((dado) =>{
      if(dado == null ){
        console.log('Sem dados adicionados ainda');
      } else{
        console.log('Descricao do gasto: ' + dado );
      }
    });
  }

  ionViewDidLOad(){
    console.log(this.navParams.get('title'));
  }

  fecharModal(){//SIMPLESMENTE FECHAR A MODEL
    this.viewCtrl.dismiss();
  }

  salvarDados(val1,val2,val3){ //SALVA OS DADOS E FECHA A MODEL
    //console.log('valores add: ' + val1 +" "+val2+" "+val3 );

    //QUANTO GASTOU
    let quantoGastou = this.storage.get('quantoGastou').then((dado)=>{
      if(dado != null){
        dado.push(val1);
        this.storage.set('quantoGastou', dado);
      }
      else{
        let array =[];
        array.push(val1);
        this.storage.set('quantoGastou', array);
      }
    });

    //ONDE GASTOU
    let ondeGastou = this.storage.get('ondeGastou').then((dado)=>{
      if(dado != null){
        dado.push(val2);
        this.storage.set('ondeGastou', dado);
      }
      else{
        let array = [];
        array.push(val2);
        this.storage.set('ondeGastou', array);
      }
    });

    //DESCRICAO DO GASTO
    let descricaoGasto = this.storage.get('descricaoGasto').then((dado)=>{
      if(dado != null){
        dado.push(val3);
        this.storage.set('descricaoGasto', dado);
      }
      else{
        let array = [];
        array.push(val3);
        this.storage.set('descricaoGasto', array);
      }
    });

    let dados = {
      quantoGastou: quantoGastou,
      ondeGastou: ondeGastou,
      descricaoGasto: descricaoGasto
    };

    this.viewCtrl.dismiss(dados);
  }

}
