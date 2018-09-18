import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";
import {AuthProvider} from "../../providers/auth/auth";
import {MainPage} from "../main/main";
import {CustomerCreatePage} from "../customer-create/customer-create";

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
           this.handleAuthuser();
           unsubscribed();
         }
      });
      this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
  }

  handleAuthuser(){
      this.authService
          .login()
          .subscribe(
              (token) => {
                  this.redirectToMainPage();
              },
              (responseError) => {
                  this.firebaseAuth
                      .makePhoneNumberForm('#firebase-ui')
                      .then(() => this.handleAuthuser());
                  this.redirectToCustomerCreatePage();
               });
  }

  redirectToMainPage() {
     this.navCtrl.setRoot(MainPage);
   }

   redirectToCustomerCreatePage(){
        this.navCtrl.push(CustomerCreatePage);
   }

}
