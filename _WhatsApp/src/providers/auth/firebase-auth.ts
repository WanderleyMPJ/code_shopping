import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firebaseConfig from '../../app/firebase-config';
import * as firebaseui from 'firebaseui';
import scriptjs from 'scriptjs';
declare const firebraseui;
(<any>window).firebase = firebase;


@Injectable()
export class FirebaseAuthProvider {

  constructor() {
      firebase.initializeApp(firebaseConfig);
  }

  async makePhoneNumberForm(selectorElement: string){
      const firebaseui = await this.getFirebaseUI();
      const uiConfig = {
          signInOptions: [
              firebase.auth.PhoneAuthProvider.PROVIDER_ID
          ]
      };
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start( selectorElement,uiConfig);

  }

  private async getFirebaseUI(): Promise<any> {
      return new Promise((resolve, reject) =>{
          if(window.hasOwnProperty('firebaseui')){
              resolve(firebaseui);
          }
          scriptjs('https://www.gstatic.com/firebasejs/ui/3.4.0/firebase-ui-auth__pt.js', () => {
            resolve(firebaseui)
          });
      });
  }

}
