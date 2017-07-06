import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DadosItem } from '../pages/dados-item/dados-item';
import { ItemDescricao } from '../pages/item-descricao/item-descricao';
import { ListPage } from '../pages/list/list';
import { GastosDiario } from '../pages/gastos-diario/gastos-diario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dados } from '../providers/dados'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDescricao,
    GastosDiario,
    ListPage,
    DadosItem
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDescricao,
    GastosDiario,
    ListPage,
    DadosItem
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dados,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
