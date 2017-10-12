import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  // rootPage:any = AccountPage;
  @ViewChild(Nav) nav: Nav;

  users : any[] = ['Thimsed','nbhp1505','Glorious King','tek-gsm','jonathan12345678','Geody1977','mathtaro76','Sluddoluat80','tobiblue','Sigiand',
                   'sexyman','akinator84','wolke','Ephimagent','everynevah','Paptur','drumcrazy72','Abst1981','EhvFlyest','Haps1953','Saracen','Sixeclog'];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
