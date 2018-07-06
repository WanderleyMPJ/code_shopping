import {Component, ElementRef, OnInit} from '@angular/core';

declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  show(){
        this.getjQueryElement().modal('show');
    }

    hide(){
        this.getjQueryElement().modal('hide');
    }

    private getjQueryElement(){
        const nativeElement = this.element.nativeElement;
        return $(nativeElement.firstChild);
    }
}
