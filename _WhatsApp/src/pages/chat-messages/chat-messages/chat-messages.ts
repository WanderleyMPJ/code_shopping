import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatGroup} from "../../../app/model";
import {FirebaseAuthProvider} from "../../../providers/auth/firebase-auth";

/**
 * Generated class for the ChatMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-messages',
  templateUrl: 'chat-messages.html',
})
export class ChatMessagesPage {

  messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth: FirebaseAuthProvider) {
  }

  ionViewDidLoad() {
      const database = this.firebaseAuth.firebase.database();

      database.ref('chat_groups/1/messages').on('child_added', (data) =>{
              const message = data.val();
              database.ref(`users/${message.user_id}`).on('value', (data) => {
                    message.user = data.val();
                    console.log(message);
                    this.messages.push(message);
              });
          });
  }

}