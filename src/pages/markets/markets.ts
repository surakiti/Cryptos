import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetApiCryptoProvider , objectCoinMarKetCap} from '../../providers/get-api-crypto/get-api-crypto';
import _ from 'lodash';
import { LoadingController ,ItemSliding ,AlertController } from 'ionic-angular';
import { CryptoDetailPage } from '../crypto-detail/crypto-detail';
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
  cryptoMarketUSDandTHB:objectCoinMarKetCap[];

  decimalPriceCrypto:objectCoinMarKetCap[];
  testing:string='thb';
  isSelect:boolean;
  filteredCrypto: objectCoinMarKetCap[]  ;
  isfiltered: boolean ;
  
  constructor(public alertCtrl: AlertController,public loadingCtrl: LoadingController,public getCrypto :GetApiCryptoProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.getCrypto.loadCoinMarKetCap().subscribe(data => { this.cryptoMarketUSDandTHB = data },
                      error => {console.log("error: "+error);},
                        () => {console.log("Read qoute completely");})
     

      this.isSelect=false;
  }

  goToDetial(param){
    this.navCtrl.push(CryptoDetailPage,param);
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketsPage');
  }

  addFavorite(slidingItem: ItemSliding, crypto: any){

    // let price : number = +crypto.price_thb.toFixed(2);
    console.log('parseInt '+parseFloat(crypto.price_thb).toFixed(2) );
    this.getCrypto.addFavoriteCrypto({id: crypto.id,
                                      name:crypto.name,
                                      symbol:crypto.symbol,
                                      rank:crypto.rank,
                                      price_usd:crypto.price_usd,
                                      price_btc:crypto.price_btcs,
                                      h24_volume_usd:crypto.h24_volume_usd,
                                      market_cap_usd:crypto.market_cap_usd,
                                      available_supply:crypto.available_supply,
                                      total_supply:crypto.total_supply,
                                      percent_change_1h:crypto.percent_change_1h,
                                      percent_change_24h:crypto.percent_change_24h,  
                                      percent_change_7d:crypto. percent_change_7d,
                                      last_updated:crypto.last_updated,
                                      price_thb:crypto.price_thb,
                                      // price_thb:parseFloat(crypto.price_thb).toFixed(2),
                                      h24_volume_thb:crypto.h24_volume_thb,
                                      market_cap_thb:crypto.market_cap_thb,
                                    }) ;
    // console.log(price.toFixed(2));
    console.log('addFavorite : '+crypto.name);
    slidingItem.close();

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }


  searchCrypto(event){
    if (event.target.value){
      if (event.target.value.length>1){
        let filteredJson = this.cryptoMarketUSDandTHB.filter( row => { 
              if ((row.symbol.indexOf(event.target.value) != -1) || (row.name.indexOf(event.target.value)!= -1)) {
                return true;
            } else {
                return false ;
              }
        });
        this.isfiltered = true ;
        this.filteredCrypto = filteredJson ;
      } else {
        this.isfiltered = false ;
      }
    } else {
      this.isfiltered = false ;
    }
  }

  clearQuotes(event) {
    event.target.value="" ;
  }

  selectThb(){
         this.isSelect=false;
  }


  selectBtc(){
         this.isSelect=true;
  }

  decimalFormat(crypto){
     this.decimalPriceCrypto.push()
  }
  
}

