import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dados } from '../../providers/dados';

@Component({
  selector: 'page-gastos-diario',
  templateUrl: 'gastos-diario.html',
})

export class GastosDiario {

  public items: any = [];
  public itemsLocais: any;
  public meuTotal: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicoDados: Dados) {

  }


  ionViewDidLoad() {

    this.servicoDados.obterDados().then((dados) => {
      if(dados){
        this.items = JSON.parse(dados); //CONVERTE OS DADOS DO SERVIDOR EM OBJETO
        console.log(this.items[0].tempoAtual);
      }

      //FILTRAR OS ONDE AS DATAS SAO IGUAIS
      /*
      for(let i = 0; i < (this.items).length; i++){

          let item = this.items[i];

          if(this.items[i].tempoAtual === this.items[i + 1].tempoAtual) {

            this.itemsLocais.push(item);
          }
      }
          console.log(this.itemsLocais);
      /*
      
      /* somar todos os gastos
      for(let i = 0; i < (this.items).length; i++){
        this.meuTotal += parseFloat(this.items[i].quantoGastou);
      }
      console.log(this.meuTotal);*/
    });

  }
}
