import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dados } from '../../providers/dados';

@Component({
  selector: 'page-gastos-diario',
  templateUrl: 'gastos-diario.html',
})

export class GastosDiario {

  public items: any = [];
  public itemsLocais: any = [];
  public totalDia: any = 0;

   minhaData: any = new Date();
    diaAtual: any = this.minhaData.getDate();
    mesAtual: any = this.minhaData.getMonth()+1;
    anoAtual: any = this.minhaData.getFullYear();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public servicoDados: Dados) { }

  ionViewDidLoad() {

    this.servicoDados.obterDados().then((dados) => {
      if(dados){
        this.items = JSON.parse(dados); //CONVERTE OS DADOS DO SERVIDOR EM OBJETO 
      }

      
      /* UMA QUERY NA ARRAY: RETORNAR AS POSICOES NA ARRAY EM QUE AS DATAS
        SAO IGUAIS A DATA ATUAL */
      for(let i = 0; i < (this.items).length; i++){
          let item = this.items[i];

          if(item.dia == this.diaAtual && item.mes == this.mesAtual 
            && item.ano == this.anoAtual) {
              this.itemsLocais.push(item);
          }
      }
      //SOMAR OS VALORES DE TODAS POSICOES RETORNADAS      
      for(let i = 0; i < (this.itemsLocais.length); i++){
        this.totalDia += parseFloat(this.itemsLocais[i].quantoGastou);
      }  
    });
  }
}
