import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Dados } from '../../providers/dados';

@Component({
  selector: 'editar-item',
  templateUrl: 'editar-item.html'
})

export class EditarItem{
  quantoGastou: any;
  ondeGastou: any;
  descricaoGasto: any;
  
  tempoAtual: any =  this.navParams.get('item').tempoAtual;
  public items: any = [];

  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, public servicoDados: Dados){ 
    
    this.servicoDados.obterDados().then((dados) => {
      if(dados){
          this.items = JSON.parse(dados); //CONVERTE OS DADOS DO SERVIDOR EM OBJETO
        }
    });
  }

  ionViewDidLoad() {
    this.quantoGastou = this.navParams.get('item').quantoGastou;
    this.ondeGastou = this.navParams.get('item').ondeGastou;
    this.descricaoGasto = this.navParams.get('item').descricaoGasto;
  }

  salvarDadosEditado(){

    /* A EDICAO FUNCIONA MAS EH NECESSARIO ATUALIZAR A PAGINA PARA QUE OS DADOS SEJAM ATUALIZADOS
     "NAO EH ISSO QUE EU QUERO" */
    let posicao: any = this.navParams.data.index;

    let listaDados = {
      quantoGastou: this.quantoGastou,
      ondeGastou: this.ondeGastou,
      descricaoGasto: this.descricaoGasto,
      tempoAtual: this.tempoAtual
    }

    this.items.splice(posicao,1,listaDados);
    //this.items.push(listaDados);
  
    this.servicoDados.salvar(this.items);
    //console.log('Posicao '+ posicao);
    this.viewCtrl.dismiss();
  }
}
