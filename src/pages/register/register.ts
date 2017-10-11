import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
username :any;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
showAlert() {
  	if(this.username){
    let alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: 'Hello! "'+this.username+'" Welcome to my app',
      buttons: [{
		          text: 'OK',
		          handler: () => {
		            this.navCtrl.push(LoginPage);
		          }
        		}]

    });
    alert.present();
	}else{
		let alert = this.alertCtrl.create({
      	title: 'Error!',
      	subTitle: 'Please! Enter your username'
      	
    });
    alert.present();
	}
  }

}
