import { Component } from '@angular/core';

import { MarketsPage } from '../markets/markets';
import { FavoritePage } from '../favorite/favorite';
import { ChatPage } from '../chat/chat';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MarketsPage;
  tab2Root = FavoritePage;
  tab3Root = ChatPage;
 

  constructor() {

  }
}
