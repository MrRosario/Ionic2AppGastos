import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'item-descricao',
  templateUrl: 'item-descricao.html'
})

export class ItemDescricao{

  descricao: any;

  constructor(public navParams: NavParams){ }

  ionViewDidLoad() {
    this.descricao = this.navParams.get('item').descricaoGasto;
  }

}
