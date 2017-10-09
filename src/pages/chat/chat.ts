import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms' 


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
	chatTime: Date = new Date();
	chatting : chatting[];
	username:string = 'User1032';
	message:string;
	clearInput:boolean = false;
  	constructor(private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
  		this.chatting = [{username:'Sommestake',message:'LOL and merchants revenue also counts, what a scam'},
  						 {username:'Glorious King',message:'COSS is beating all odds'},
  						 {username:'tek-gsm',message:'Gece 4650 den aldım'},
  						 {username:'Glorious King',message:'75000 coss'},
  						 {username:'mathtaro76',message:'monacoin is very popular with Japanese people. The Japanese group will carry out strategies to raise monacoin prices soon. If you buy it is out of now.'},
  						 {username:'tobiblue',message:'whats wrong with the website ?'},
  						 {username:'sexyman',message:'COSS is the most underrated/underpriced crypto out there by a huge margin'},
  						 {username:'tobiblue',message:'everything is working fine'},	]
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ChatPage');
  	}

  	addChatting(username:string,message:string){
  		this.chatting.push({username:username,message:message});
  		console.log('addChatting');
  		this.clearInput=false;

  	}

}


export class chatting {
	username: string ;
  	message: string ;
}