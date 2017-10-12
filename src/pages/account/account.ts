import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ModalController} from 'ionic-angular';
import { FavoritePage } from '../favorite/favorite';
import { ChangePasswordPage } from '../change-password/change-password';
import { LoginPage } from '../login/login';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
	phone:any;
	account:any = {username:'',password:'',email:''};
  constructor(public alertCtrl: AlertController,
  			  public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController) {
  	this.account={username:navParams.get('username'),password:navParams.get('password'),email:'example@hotmail.com'};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goToFavorite(){
  	this.navCtrl.push(FavoritePage);
  }

  changePassword(){
  	let modal = this.modalCtrl.create(ChangePasswordPage);
    modal.present();
  }
	
	logOut(){
  	this.navCtrl.pop();
  }

  setPhone(){
  	let prompt = this.alertCtrl.create({
	      title: 'Phone',
	      message: "Please provide a phone.",
	      inputs: [
	        {
	          name: 'phone',
	          placeholder: 'Phone number'
	        }
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Save',
	          handler: data => {
	            console.log('Saved clicked');
	            this.phone = data.phone;
	            console.log('Data '+data.phone);
	            
	          }
	        }
	      ]
	    });

	    prompt.present();
  }

}
