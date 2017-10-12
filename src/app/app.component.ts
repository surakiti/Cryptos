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
  usersOffline : any[] = ['Glar1937','Putdow','Thatilgincim','Boarra1983','Sartur','Eldis1944','Thountim','Mustithe85','Emenceapery','Anconst',
                          'Frover','Diffeclus','Bing1938','Himeaved','Posixed','Winciaten','Musere','Canuttle','Hishoss','Hompalatcho','Oping1971','Whary',
                          'Reautive','Ment1985','Entoofor','Huragnional','Timperelligy','Lighly','Comel1995','Fratirld','Oventopereed','Hatheat','Toly183',
                          'Oping1991','Consel','Thervice','Andided','Andise','Camer1935','Fection','Rickel','Substing','JosephRSuarez','Priellost','BillyDHutto',
                          'Bargain','Esther','Marshall','Emerson','Alaust','PoliticalCrew','Audrey','Boozer','Reupok','Tracey','Sinegal','Hadet1940','TrustyToys'];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.usersOffline = this.usersOffline.sort();
    });
  }
}
