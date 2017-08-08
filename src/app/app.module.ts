import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DadosItem } from '../pages/dados-item/dados-item';
import { ItemDescricao } from '../pages/item-descricao/item-descricao';
import { ListPage } from '../pages/list/list';
import { GastosDiario } from '../pages/gastos-diario/gastos-diario';
import { EditarItem } from '../pages/editar-item/editar-item';
import { GastosMensais } from '../pages/gastos-mensais/gastos-mensais';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dados } from '../providers/dados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDescricao,
    GastosDiario,
    ListPage,
    DadosItem,
    EditarItem,
    GastosMensais
  ],
  imports: [
    BrowserModule,
    MomentModule,
    IonicStorageModule.forRoot({
      name: 'dados',
     driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDescricao,
    GastosDiario,
    ListPage,
    DadosItem,
    EditarItem,
    GastosMensais
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dados,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
