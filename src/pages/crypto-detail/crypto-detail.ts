import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetApiCryptoProvider } from '../../providers/get-api-crypto/get-api-crypto';
/**
 * Generated class for the CryptoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crypto-detail',
  templateUrl: 'crypto-detail.html',
})
export class CryptoDetailPage {
 	data:any[];
  constructor(private cryptoData : GetApiCryptoProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.data = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CryptoDetailPage');
  }

}
