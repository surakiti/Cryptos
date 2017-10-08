import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { OnInit } from '@angular/core';
import axios from 'axios';
import { AlertController } from 'ionic-angular';
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
	favoriteCrypto:crytoWithName[]=[] ;
	constructor(public alertCtrl: AlertController,public http: Http) {

	console.log('Hello GetApiCryptoProvider Provider');

	}

	loadBX():Observable<cryptoNumbers[]>{
	  	return this.http.get("/api")
	  			   .map(response => {
	  			   		return response.json()
	  			   });
	}

	addFavoriteCrypto(cryto: crytoWithName){
		let success = this.alertCtrl.create({
	        title: 'Successful!',
	        subTitle: 'Save " '+cryto.secondary_currency+' " in your favorites',
	    });

	    let unsuccess = this.alertCtrl.create({
	        title: 'Already!',
	        subTitle: '" '+cryto.secondary_currency+' " already in your favorites yet',
	    });

		if(this.favoriteCrypto.length==0){
			this.favoriteCrypto.push(cryto);
			success.present().then(()=>{
					      setTimeout(() => {success.dismiss()}, 800)
					  }).catch(()=>{
					       success.dismiss();
					  });
		}else{
			for(let i=0;i<this.favoriteCrypto.length;i++){
				console.log('['+i+']'+' lenth('+this.favoriteCrypto.length)+')';
				
				if(this.favoriteCrypto[i].pairing_id!=cryto.pairing_id){
					console.log('ไม่ซ้ำ');
					if(i==this.favoriteCrypto.length-1){
						console.log('Successful');
							this.favoriteCrypto.push(cryto) ;
							success.present().then(()=>{
								setTimeout(() => {success.dismiss()}, 800)
							}).catch(()=>{
								success.dismiss();
							});
						break;
					}
				continue;	
				}else{
					console.log('Already crypto');
					unsuccess.present().then(()=>{
						setTimeout(() => {unsuccess.dismiss()}, 1000)
					}).catch(()=>{
						unsuccess.dismiss();
					});
					break;
				}
			}
		}
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

export class crytoWithName{
	pairing_id:any
	primary_currency:any
	secondary_currency:any
	change:number
	last_price:string
	volume_24hours:any
	nameCrypto:any
	orderbooks:orderbook[]
}