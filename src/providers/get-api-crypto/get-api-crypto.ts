import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { OnInit } from '@angular/core';
import axios from 'axios';
/*
  Generated class for the GetApiCryptoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let num;
for (let i = 1 ; i <= 27; i++) {
	num=[i];
}




@Injectable()
export class GetApiCryptoProvider {
// imgeUrl : string = 'https://d2v7vc3vnopnyy.cloudfront.net/img/coins';

	// nameCrypto:any[]=["Bitcoin","Litecoin","Namecoin","Dogcoin",
	// 				"Peercoin","Feathercoin","Primecoin","Zcash",
	// 				"HyperStake","Pandacoin","Cryptonite","Paycoin",
	// 				"Quark","Ethereum","Ethereum","Dash","Augur","Gnosis",
	// 				"Ripple","OmiseGo","BitcoinCash"];
	favoriteCrypto:any[]=[] ;
	constructor(public http: Http) {

	console.log('Hello GetApiCryptoProvider Provider');

	}

	loadBX():Observable<cryptoNumbers[]>{
	  	return this.http.get("/api")
	  			   .map(response => {
	  			   		return response.json()
	  			   });
	}

	addFavoriteCrypto(cryto: any){
	    this.favoriteCrypto.push(cryto) ;
	}

	getFavoriteCrypto(): cryto[] {
	    return this.favoriteCrypto ;
	}

}
export class bids{
	total:any
	volume:any
	highbid:any
}
export class asks{
	total:any
	volume:any
	highbid:any
}
export class orderbook{
	bids : bids[]
	asks : asks[]
}
export class cryto{
	pairing_id:any
	primary_currency:any
	secondary_currency:any
	change:number
	last_price:string
	volume_24hours:any
	orderbooks:orderbook[]
}
export class cryptoNumbers{
	// number:string='1';
	crytos:cryto[]
}

export const NAME:any[] = ["Bitcoin","Litecoin","Namecoin","Dogcoin",
					"Peercoin","Feathercoin","Primecoin","Zcash",
					"HyperStake","Pandacoin","Cryptonite","Paycoin",
					"Quark","Ethereum","Ethereum","Dash","Augur","Gnosis",
					"Ripple","OmiseGo","BitcoinCash"];

