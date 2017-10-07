import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetApiCryptoProvider , cryptoNumbers ,cryto ,orderbook ,asks , bids } from '../../providers/get-api-crypto/get-api-crypto';
import _ from 'lodash';
/**
 * Generated class for the MarketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-markets',
  templateUrl: 'markets.html',
})
export class MarketsPage {
	cryptoNumbers:cryptoNumbers[];
	THB:cryto[];
	BTC:cryto[];

  constructor(public getCrypto :GetApiCryptoProvider,public navCtrl: NavController, public navParams: NavParams) {
  		this.getCrypto.loadBX().subscribe( data => { this.cryptoNumbers = Object.keys(data).map(key => data[key]) ;
    										console.dir(this.cryptoNumbers)},
  									  error => {console.log("error: "+error);},
  										  () => {console.log("Read park completely");})
  		// for(let i=0;i<27;i++){
  		// 	let number = this.cryptoNumbers[i];
  		// 	console.dir('Number :' + number);
  		// } E-เตี้ยยยยยยยยยยยยยยยยยยยยยยยยย111
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketsPage');

  }

  SelectThb(){
  	for(let i=0;i<27;i++){
  		console.log("sasdas");
  		//let filter:any[]=this.cryptoNumbers.map(key => this.filter[key])
  		let filter:cryto[] =this.cryptoNumbers[i].crytos;
  		console.log('FILTER : '+filter);

  		let thb:any[] = Object.keys(filter).map(key => filter[key]);
  		console.log('THB : '+thb);
  		// for(let numbers=this.cryptoNumbers[i];numbers.crytos.length>0;){

  		// }
  	}
  }
}

