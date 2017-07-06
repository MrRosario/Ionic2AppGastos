import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gastos-diario',
  templateUrl: 'gastos-diario.html',
})

export class GastosDiario {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastosDiario');
  }

}
