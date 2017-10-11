import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http' ;
import { FormsModule } from '@angular/forms';

import { MarketsPage } from '../pages/markets/markets';
import { FavoritePage } from '../pages/favorite/favorite';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { CryptoDetailPage } from '../pages/crypto-detail/crypto-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetApiCryptoProvider } from '../providers/get-api-crypto/get-api-crypto';

@NgModule({
  declarations: [
    MyApp,
    MarketsPage,
    FavoritePage,
    TabsPage,
    ChatPage,
    LoginPage,
    RegisterPage,
    AccountPage,
    ProfilePage,
    CryptoDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MarketsPage,
    FavoritePage,
    TabsPage,
    ChatPage,
    LoginPage,
    RegisterPage,
    AccountPage,
    ProfilePage,
    CryptoDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetApiCryptoProvider
  ]
})
export class AppModule {}
