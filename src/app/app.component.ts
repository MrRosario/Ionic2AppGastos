import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
  paginas: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.paginas = [
      { titulo: 'Gastos diarios', component: HomePage, icone: 'ios-time-outline'},
      { titulo: 'Gastos semanais', component: ListPage, icone: 'ios-paper-outline'},
      { titulo: 'Gastos mensais', component: ListPage, icone: 'ios-calendar-outline'},
      { titulo: 'Ajuda', component: ListPage, icone: 'ios-help-circle-outline'},
      { titulo: 'Sobre', component: ListPage, icone: 'ios-information-circle-outline'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  abrirPagina(pagina) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pagina.component);
  }
}
