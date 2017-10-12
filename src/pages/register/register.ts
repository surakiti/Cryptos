import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController ,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms' 

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
  password : any;
  email:any;
  rePassword:any;
  regisForm : FormGroup;
  errorMsg:string;
  constructor(public builder:FormBuilder,
              public alertCtrl: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
      this.regisForm = this.builder.group({
        'username':['',Validators.compose([Validators.required,Validators.minLength(5)])],
        'email':['',Validators.compose([Validators.required,Validators.email])],
        'password':['',Validators.compose([Validators.required,Validators.minLength(8)])],
        'rePassword':['',Validators.compose([Validators.required,Validators.minLength(8)])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

   validate(): any {
     let errorMsgUsername : string ;
     let errorMsgPassword : string ;
     let errorMsgEmail : string ;
     let errorMsgPasswordCheck : string ;


      if (this.regisForm.valid){
        if(this.regisForm.value.password===this.regisForm.value.rePassword){
           console.log('Same Password: '+this.regisForm.value.password+' = '+this.regisForm.value.rePassword);
           return true ;
        }
      }

      let controlUsername = this.regisForm.controls['username'] ;
      let controlEmail = this.regisForm.controls['email'] ;
      let controlPassword = this.regisForm.controls['password'] ;

     if (controlUsername.invalid){
        if (controlUsername.errors['required']){
            errorMsgUsername = 'Please provide a username.' ;
        }else if (controlUsername.errors['minlength']) {
            errorMsgUsername = 'The username must have at least '+controlUsername.errors['minlength'].requiredLength+' characters.' ; 
        }
      }

      if (controlEmail.invalid){
        if (controlEmail.errors['required']){
            errorMsgEmail = 'Please provide a e-mail.' ;
        }else if(controlEmail.errors['email']){
            errorMsgEmail = 'Please enter a valid email address. ' ;
        }
      }

      if (controlPassword.invalid){
        if (controlPassword.errors['required']){
            errorMsgPassword = 'Please provide a password.' ;
        }else if (controlPassword.errors['minlength']) {
            errorMsgPassword = 'The password must have at least '+controlPassword.errors['minlength'].requiredLength+' characters.' ; 
        }
      }


      let alert = this.alertCtrl.create({
          title: 'Invalid!',
          subTitle: errorMsgUsername || errorMsgEmail ||errorMsgPassword || 'You enter the password do not match.!'
        });
        alert.present().then(()=>{
          setTimeout(() => {alert.dismiss()}, 1500);
        });

      return false ; 
    }


  signUp() {
      this.errorMsg = '';
      if(this.validate()){
        let alert = this.alertCtrl.create({
          title: 'Welcome!',
          subTitle: 'Hello! "'+this.username+'" Welcome to my app',
        });
        alert.present().then(()=>{
                setTimeout(() => {alert.dismiss()}, 1200);
                setTimeout(() => {
                  this.navCtrl.push(LoginPage);
                  this.username='';
                  this.password='';
                  this.rePassword='';
                  this.email='';
                }, 1600);
        }).catch(()=>{
            alert.dismiss();
        });
      }
  }

  goToSignIn(){
    this.viewCtrl.dismiss();
  }




}
