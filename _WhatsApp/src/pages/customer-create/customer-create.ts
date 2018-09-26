import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerHttpProvider} from "../../providers/http/customer-http";
import {HttpErrorResponse} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-customer-create',
  templateUrl: 'customer-create.html',
})
export class CustomerCreatePage {

  form: FormGroup;
  photoPreview;

  @ViewChild('inputfilePhoto')
  inputFilePhoto: TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder,
              private customerHttp: CustomerHttpProvider) {
      this.form = this.formBuilder.group({
          name: ['', [Validators.required,Validators.maxLength(255)]],
          email: ['', [Validators.required,Validators.email,Validators.maxLength(255)]],
          photo: null
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerCreatePage');
  }

  submit(){
    this.customerHttp
        .create(this.form.value)
        .subscribe(() => {
          console.log('Cliente foi criado');
        }, (responseError: HttpErrorResponse) => {
            //responseError.error seria o corpo da resposta HTTP
            //logo acessamos qualquer informação do corpo neste caminho
            //aí você pode usar estruturas do Ionic como:
            //Toast, Alert para mostrar uma mensagem de erro pro usuário
            console.log(responseError.error.errors)
        })
  }

  selectPhoto(){
    const nativeElement = this.inputFilePhoto.getElementRef().nativeElement;
    const inputFile = nativeElement.querySelector('input');
    inputFile.click();
  }

    onChoosePhoto(files: FileList){
        if (!files.length){
            return;
        }
        this.makePhotoPreview(files[0]);
        this.form.get('photo').setValue(files[0]);
    }

  makePhotoPreview(file: File){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (event: ProgressEvent) =>{
          const target = event.target;
          this.photoPreview = (<any>target).result;
      }
  }

}
