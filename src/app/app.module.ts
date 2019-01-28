import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { TouchID } from '@ionic-native/touch-id';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

import { HttpClientModule } from '@angular/common/http';

import { NavController } from '@ionic/angular';

//import { XToast } from 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    SpinnerDialog,
    FingerprintAIO,
    NavController,
    Storage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
