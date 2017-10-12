import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MarketsPage } from '../markets/markets';
import { FavoritePage } from '../favorite/favorite';
import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { AccountPage } from '../account/account';



@Component({
  templateUrl: 'tabs.html'
})



export class TabsPage {
  	tab1Root = MarketsPage;
  	tab2Root = FavoritePage;
  	tab3Root = ChatPage;
  	tab4Root = LoginPage;
  
  constructor() {

  }


}
