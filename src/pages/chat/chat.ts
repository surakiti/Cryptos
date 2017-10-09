import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
// import { FormBuilder, FormGroup ,Validators } from '@angular/forms' 
import { Content } from 'ionic-angular';

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
	@ViewChild(Content) content: Content;
	chatTime: Date = new Date();
	chatting : chatting[];
	chattingNew : chatting[];
	username:string = 'User1032';
	message:string;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.chatting = [{username:'Sommestake',message:'LOL and merchants revenue also counts, what a scam'}
  						 	]
  		this.chattingNew = [{username:'Glorious King',message:'COSS is beating all odds'},
  						 {username:'tek-gsm',message:'Gece 4650 den aldım'},
  						 {username:'Glorious King',message:'75000 coss'},
  						 {username:'mathtaro76',message:'monacoin is very popular with Japanese people. The Japanese group will carry out strategies to raise monacoin prices soon. If you buy it is out of now.'},
  						 {username:'tobiblue',message:'whats wrong with the website ?'},
  						 {username:'sexyman',message:'COSS is the most underrated/underpriced crypto out there by a huge margin'},
  						 {username:'tobiblue',message:'everything is working fine'},
  						 {username:'tek-gsm',message:'@EhvFlyest, satışa 5500 koyup deneyim o zaman çünkü arada baya para fark ediyor'},
  						 {username:'Glorious King',message:'Awesome next level COSS. I saw it happen and again it would. I love you COSS'},
  						 {username:'everynevah',message:'why would coss moon today?'},
  						 {username:'wolke',message:'neo and ripple are mooning today'},
  						 {username:'sexyman',message:' @everynevah, COSS could moon at anytime because its underpriced'},
  						 {username:'jonathan12345678',message:'BET in talks w/ NEO & platform release is ahead of schedule.'},
  						 {username:'Glorious King',message:'75000 COSS'},
  						 {username:'drumcrazy72',message:'@hit123456, Cool, and their Price fields dont update when you change trading pairs, so they need to fix that. Or someones gonna sell their holdings for pennies :)'},
  						 {username:'EhvFlyest',message:'@tek-gsm, Bende yaptim, satis yaparsan super olur aksam uzeri olmassi lazim'},
  						 {username:'Saracen',message:'@ididit, COSS will be listed in more exchanges in this Month of October'},
  						 {username:'sexyman',message:'@everynevah, almost all alts are vaporware bullshit that offer nothing, even long term. COSS has an exchange up and running already'},
  						 {username:'akinator84',message:'OMG COSS !'},
  						 {username:'nbhp1505',message:'@Glorious King, COSS 100$ very soon lol'},
  						 {username:'akinator84',message:'and coss marketcap is only 4M US'}]
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ChatPage');
    	this.autoChatting();
  	}

  	addChatting(username:string,message:string){
  		this.chatting.push({username:username,message:message});
  		console.log('addChatting');
  		this.message = '';
  		this.content.scrollToBottom(0);

  	}

  	autoChatting(){
  		console.log('length : '+this.chattingNew.length);
		(function fn(n,oldChat,chatArray,scroll) {
	  		console.log('Username :'+chatArray[n].username);
	  		oldChat.push({username:chatArray[n].username,message:chatArray[n].message});
	  		scroll.scrollToBottom(0);
	  		if (n < chatArray.length-1) setTimeout(function() { fn(++n,oldChat,chatArray,scroll);}, 2000);
		}(0,this.chatting,this.chattingNew,this.content));
	}


}




export class chatting {
	username: string ;
  	message: string ;
}