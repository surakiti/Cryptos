import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,ModalController} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from '../register/register';
import { AccountPage } from '../account/account';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms' 

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm : FormGroup;
  errorMsg:string;
  username:string;
  password:string;
  account:any = {username:'',password:''};
  constructor(public builder:FormBuilder,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
    this.loginForm = this.builder.group({
        'username':['',Validators.required],
        'password':['',Validators.compose([Validators.required,Validators.minLength(8)])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validate(): any {
      if (this.loginForm.valid){
        return true ;
      }

      let controlUsername = this.loginForm.controls['username'] ;
      let controlPassword = this.loginForm.controls['password'] ;

     if (controlUsername.invalid){
        if (controlUsername.errors['required']){
            this.errorMsg = 'Invalid username or password try again.!' ;
        } 
      }

      if (controlPassword.invalid){
            this.errorMsg = 'Invalid username or password try again.!' ;
      }
      return false ; 
    }

    signIn() {
      this.errorMsg = '';
      if(this.validate()){
        this.account = {username:this.username,password:this.password};
        let alert = this.alertCtrl.create({
          title: 'Login Success!'
        });

        alert.present().then(()=>{
                setTimeout(() => {alert.dismiss()}, 800);
                setTimeout(() => {
                  this.navCtrl.push(AccountPage,this.account);
                  this.username='';
                  this.password='';
                }, 900);
            }).catch(()=>{
                 alert.dismiss();
            });
      }else{
        console.log('ERROR : '+this.errorMsg)
        let alert = this.alertCtrl.create({
          title: 'Invalid!',
          subTitle: this.errorMsg,
        });
        alert.present().then(()=>{
          setTimeout(() => {alert.dismiss()}, 1000);
        });
      }
    }
  
  goToSignUp(){
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }
}
