import { Component,ItemSliding  } from '@angular/core'; 
// delete import { Component,ItemSliding } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetApiCryptoProvider} from '../../providers/get-api-crypto/get-api-crypto';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
favoriteCryptos:any[];
  constructor(public getCrypto :GetApiCryptoProvider,public navCtrl: NavController, public navParams: NavParams) {
  	this.favoriteCryptos = getCrypto.getFavoriteCrypto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
  }

  removeFavorite(slidingItem: ItemSliding, crypto: any){
    this.getCrypto.removeFavoriteCrypto(crypto) ;
    console.log('removeFavorite : '+crypto.nameCrypto);
    slidingItem.close();

  }

}
