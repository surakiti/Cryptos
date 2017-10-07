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
	cryptoNumbers:cryto[];
	THB:cryto[];
	BTC:cryto[];
  isSelect:boolean;

  constructor(public getCrypto :GetApiCryptoProvider,public navCtrl: NavController, public navParams: NavParams) {
  		this.getCrypto.loadBX().subscribe( data => { this.cryptoNumbers = Object.keys(data).map(key => data[key]) ;
    										console.dir(this.cryptoNumbers)},
  									  error => {console.log("error: "+error);},
<<<<<<< HEAD
  										   () => {this.selectThb();
                          console.log("Read park completely");})
      this.isSelect=false;
  		// for(let i=0;i<27;i++){
  		// 	let number = this.cryptoNumbers[i];
  		// 	console.dir('Number :' + number);
  		// } E-เตี้ยยยยยย testttttt2
=======
  										  () => {this.selectThb();
                          console.log("Read park completely");})
      this.isSelect=false;
>>>>>>> d13b86bf25b7a29fb3fdab376851cdd360a03d8f
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketsPage');
  }

  selectThb(){
      if (this.cryptoNumbers.length>-1){
        let filteredTHB = this.cryptoNumbers.filter( row => { 
            if (row.primary_currency=='THB') {
                return true;
            }else {
                return false ;
              }
        });
        this.isSelect=false;
        console.log('FilterTHB : '+filteredTHB) ;
        this.THB = filteredTHB ;
      }else {
        console.log('No data') ;
      }
  }

<<<<<<< HEAD
  selectThb(){
       if (this.cryptoNumbers.length>-1){
         let filteredTHB = this.cryptoNumbers.filter( row => { 
            if (row.primary_currency=='THB') {
                 return true;
             }else {
                 return false ;
               }
         });
         this.isSelect=false;
         console.log('FilterTHB : '+filteredTHB) ;
        this.THB = filteredTHB ;
       }else {
        console.log('No data') ;
       }
  }


  selectBtc(){
       if (this.cryptoNumbers.length>-1){
         let filteredBTC = this.cryptoNumbers.filter( row => { 
             if (row.primary_currency=='BTC') {
                 return true;
             }else {
                 return false ;
               }
         });
         this.isSelect=true;
         console.log('FilterBTC : '+filteredBTC) ;
         this.BTC = filteredBTC ;
       } else {
         console.log('No data') ;
       }
  }
  
=======
  selectBtc(){
      if (this.cryptoNumbers.length>-1){
        let filteredBTC = this.cryptoNumbers.filter( row => { 
            if (row.primary_currency=='BTC') {
                return true;
            }else {
                return false ;
              }
        });
        this.isSelect=true;
        console.log('FilterBTC : '+filteredBTC) ;
        this.BTC = filteredBTC ;
      } else {
        console.log('No data') ;
      }
  }


>>>>>>> d13b86bf25b7a29fb3fdab376851cdd360a03d8f
}

