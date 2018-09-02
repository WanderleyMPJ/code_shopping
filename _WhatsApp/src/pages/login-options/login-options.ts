import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LoginOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-options',
  templateUrl: 'login-options.html',
})
export class LoginOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOptionsPage');
  }

  openLoginOptions(){
    const actionSheet = this.actionSheetCtrl.create({
        title: 'Já tem telefone cadastrado?',
        buttons: [
            {
              text: 'Já tenho, quero logar'
            },
            {
              text: 'Já tenho, quero trocar de telefone'
            },
            {
                text: 'Não, quero criar uma conta'
            },
            {
                text: 'Cancelar',
                role: 'cancel'
            }
        ]
    })
    actionSheet.present();
  }

}
