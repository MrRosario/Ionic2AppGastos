import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dados } from '../../providers/dados';

@Component({
  selector: 'page-gastos-mensais',
  templateUrl: 'gastos-mensais.html',
})

export class GastosMensais {
  
  public items: any = [];
  public itemsLocais: any = [];
  public total: any = [];
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public servicoDados: Dados) { }

  ionViewDidLoad() {

    this.servicoDados.obterDados().then((dados) => {
      if(dados){
        this.items = JSON.parse(dados); //CONVERTE OS DADOS DO SERVIDOR EM OBJETO 
      }

      //TAREFA: ACHAR UMA FORMA DE SOMAR O VALOR DE "this.items[i]quantoGastou" DE CADA MES REGISTRADO NO APP 
      for(let i = 0; i < (this.items).length; i++){
    
        console.log("vezes add "+this.items[i].mes);
        /*if(this.items[i].mes == this.items[i+1].mes && this.items[i].ano == this.items[i+1].ano) {
          this.total = parseFloat(this.items[i].quantoGastou);
        }*/
          
      }
    });
  }   
}
