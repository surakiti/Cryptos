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
	favoriteCrypto:objectCoinMarKetCap[]=[] ;
	constructor(public alertCtrl: AlertController,public http: Http) {

	console.log('Hello GetApiCryptoProvider Provider');


	}
	loadTwitter(){
		// let oembedResponse =  fetch(new Request('https://publish.twitter.com/oembed?url=https://twitter.com/jack/status/20'));
		// let oembedTweet = oembedResponse.json();
		return this.http.get("https://publish.twitter.com/oembed?url=https://twitter.com/search?f=tweets&vertical=default&q=%24KNC")
	  			   .map(response => {
	  			   		return response.json()
	  			   });
	}

	loadCoinMarKetCap():Observable<objectCoinMarKetCap[]>{
	  	return this.http.get("https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=100")
	  			   .map(response => {
	  			   		return response.json()
	  			   });
	}

	addFavoriteCrypto(cryto: objectCoinMarKetCap){
		let success = this.alertCtrl.create({
	        title: 'Successful!',
	        subTitle: 'Save " '+cryto.name+' " in your favorites',
	    });

	    let unsuccess = this.alertCtrl.create({
	        title: 'Already!',
	        subTitle: '" '+cryto.name+' " already in your favorites yet',
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
				
				if(this.favoriteCrypto[i].id!=cryto.id){
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

	getFavoriteCrypto(): objectCoinMarKetCap[] {
	    return this.favoriteCrypto ;
	}

	removeFavoriteCrypto(cryto: objectCoinMarKetCap){
		let index = this.favoriteCrypto.indexOf(cryto);
		if (index > -1){
			this.favoriteCrypto.splice(index,1);
		}
	}

}

export class objectCoinMarKetCap{
	id:any;
	name:any;
	symbol:any;
	rank:any;
	price_usd:number;
	price_btc:number;
	h24_volume_usd:any;
	market_cap_usd:any;
	available_supply:any;
	total_supply:any;
	percent_change_1h:any;
	percent_change_24h:any;
	percent_change_7d:any;
	last_updated:any;
	price_thb:number;
	h24_volume_thb:any;
	market_cap_thb:any;


}

