import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetApiCryptoProvider , cryptoNumbers ,cryto ,orderbook ,asks , bids , NAME} from '../../providers/get-api-crypto/get-api-crypto';
import _ from 'lodash';
import { LoadingController } from 'ionic-angular';
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
  crytoName:any[]=NAME;
  cryptoMix:any[]=[{pairing_id:'',
                    primary_currency:'',
                    secondary_currency:'',
                    change:'',
                    last_price:'',
                    volume_24hours:'',
                    nameCrypto:'',
                    orderbooks:''}];
  constructor(public loadingCtrl: LoadingController,public getCrypto :GetApiCryptoProvider,public navCtrl: NavController, public navParams: NavParams) {
  		this.getCrypto.loadBX().subscribe( data => { this.cryptoNumbers = Object.keys(data).map(key => data[key]) ;
    										console.dir(this.cryptoNumbers)},
  									  error => {console.log("error: "+error);},
  										   () => {this.addName();
                                this.selectThb();
                          console.log("Read park completely");})
      this.isSelect=false;
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  addName(){
    for(let i=0;i<this.cryptoNumbers.length;i++){
      this.cryptoMix[i]={ pairing_id:this.cryptoNumbers[i].pairing_id,
                          primary_currency:this.cryptoNumbers[i].primary_currency,
                          secondary_currency:this.cryptoNumbers[i].secondary_currency,
                          change:this.cryptoNumbers[i].change,
                          last_price:this.cryptoNumbers[i].last_price,
                          volume_24hours:this.cryptoNumbers[i].volume_24hours,
                          nameCrypto:this.crytoName[i],
                          orderbooks:this.cryptoNumbers[i].orderbooks}
      console.log('Sussess '+i+'----- name :'+this.cryptoMix[i].nameCrypto);
    }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MarketsPage');

  // }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  selectThb(){
       if (this.cryptoMix.length>-1){
         let filteredTHB = this.cryptoMix.filter( row => { 
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
       if (this.cryptoMix.length>-1){
         let filteredBTC = this.cryptoMix.filter( row => { 
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
  
}

