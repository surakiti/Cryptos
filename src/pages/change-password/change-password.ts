import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms' ;
import { AccountPage } from '../account/account';
/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  passwordForm : FormGroup;
  isComplete:boolean;
  newPassword:any;
  comfirmPassword:any
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public builder:FormBuilder,
  			  public alertCtrl: AlertController,
  			  public viewCtrl: ViewController
  			  ) {
  	this.passwordForm = this.builder.group({
        'newPassword':['',Validators.compose([Validators.required,Validators.minLength(8)])],
        'comfirmPassword':['',Validators.compose([Validators.required,Validators.minLength(8)])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  validate(): any {
     let errorNewPassword : string ;
     let errorComfirmPassword : string ;


      if (this.passwordForm.valid){
        if(this.passwordForm.value.newPassword===this.passwordForm.value.comfirmPassword){
           console.log('Same Password: '+this.passwordForm.value.newPassword+' = '+this.passwordForm.value.comfirmPassword);
           return true ;
        }
      }

      let controlNewPassword = this.passwordForm.controls['newPassword'] ;
      let controlComfirmPassword = this.passwordForm.controls['comfirmPassword'] ;

      if (controlNewPassword.invalid){
        if (controlNewPassword.errors['required']){
            errorNewPassword = 'Please provide a password.' ;
        }else if (controlNewPassword.errors['minlength']) {
            errorNewPassword = 'The password must have at least '+controlNewPassword.errors['minlength'].requiredLength+' characters.' ; 
        }
      }

      if (controlComfirmPassword.invalid){
        if (controlComfirmPassword.errors['required']){
            errorComfirmPassword = 'Please provide a comfirm password.' ;
        }else if (controlComfirmPassword.errors['minlength']) {
            errorComfirmPassword = 'The password must have at least '+controlNewPassword.errors['minlength'].requiredLength+' characters.' ; 
        }
      }


      let alert = this.alertCtrl.create({
          title: 'Invalid!',
          subTitle: errorNewPassword || errorComfirmPassword || 'You enter the password do not match.!'
        });
        alert.present().then(()=>{
          setTimeout(() => {alert.dismiss()}, 1500);
        }).catch(()=>{
            alert.dismiss();
        });

      return false ; 
    }


  checkPassword() {
      if(this.validate()){
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Change password completely',
        });
        alert.present().then(()=>{
                setTimeout(() => {alert.dismiss()}, 1200);
                setTimeout(() => {
                  this.viewCtrl.dismiss();
                  this.newPassword='';
  				  this.comfirmPassword='';
                }, 1600);
        }).catch(()=>{
            alert.dismiss();
        });
      }
  }

  goToAccount(){
  	this.viewCtrl.dismiss();
  }

}
