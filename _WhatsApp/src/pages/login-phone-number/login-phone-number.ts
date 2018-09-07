import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";
import {AuthProvider} from "../../providers/auth/auth";
import {MainPage} from "../main/main";

@IonicPage()
@Component({
  selector: 'page-login-phone-number',
  templateUrl: 'login-phone-number.html',
})
export class LoginPhoneNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth : FirebaseAuthProvider,
              private authService: AuthProvider) {
  }

  ionViewDidLoad(){
     const unsubscribed =  this.firebaseAuth.firebase.auth().onAuthStateChanged((user)=> {
         if(user){
           this.authService
               .login()
               .subscribe(
                   (token) => {
                       this.redirectToMainPage();
                    },
                   (responseError) => {

                   });
           unsubscribed();
         }
      });

      this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
  }

  redirectToMainPage() {
     this.navCtrl.setRoot(MainPage);
   }

   redirectToCustomerCreatePage(){
        this.navCtrl.setRoot(MainPage);
   }

}
