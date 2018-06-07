import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UnConductorPage } from '../pages/un-conductor/un-conductor';
import { DosConductoresPage } from '../pages/dos-conductores/dos-conductores';
import { MenuPage } from '../pages/menu/menu';
import {InicioPage } from '../pages/inicio/inicio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InicioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
