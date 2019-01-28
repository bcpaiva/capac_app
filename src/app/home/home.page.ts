import { Component } from '@angular/core';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


import { TouchID } from '@ionic-native/touch-id';

import { Storage } from '@capacitor/core';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

import { NewPagePage } from '/Users/beaupaiva/Downloads/capacitor-fingerprint-app-master 3/src/app/new-page/new-page.page';

import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public faio: FingerprintAIO,private spinnerDialog: SpinnerDialog,private navCtrl: NavController) { }

  check() {
    console.log('check');
    this.faio.isAvailable().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  async setObject(theKey: string, theValue: string) {
await Storage.set({
key: theKey,
value: JSON.stringify({
id: 1,
name: theValue
})
});
}

async getItem(theKey: string) {
  const value = await Storage.get({ key: theKey});
  console.log(theKey,' : ', value);
}


  show() {
    console.log('show');
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only necessary for Android
      disableBackup: true,  // Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', // Only for iOS
      localizedReason: 'Please authenticate' // Only for iOS
    }).then(result => {
      console.log(result);
      if (result == "Success"){

        this.getItem("username");
        this.getItem("password");
        this.getItem("refresh_ticket");
        this.getItem("auth_ticket");



        // this.storage.get('username').then((val) => {
        //   console.log('Your username is', val);
        // });
        // this.storage.get('password').then((val) => {
        //   console.log('Your password is', val);
        // });
        // this.storage.get('auth_ticket').then((val) => {
        //   console.log('Your auth_ticket is', val);
        // });
        // this.storage.get('refresh_ticket').then((val) => {
        //   console.log('Your refresh_ticket is', val);
        // });

      }
    }).catch(err => {
      console.log(err);
    });
  }
  credentials(){

  this.setObject('username','bcpaiva');
  this.setObject('password','myPassword')
  this.setObject('auth_ticket','Agr34u');
  this.setObject('refresh_ticket','fsdgfe');


}
api(){
  console.log("API Button Pressed");
  this.spinnerDialog.show();
}
pushNext(){

//this.navCtrl.push(NewPagePage);
}
}
