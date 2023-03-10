import { Component, ElementRef, Input, ViewChild, Inject } from '@angular/core';
import { JQUERY_TOKEN } from './jquery.service';

@Component({
  selector: 'simple-modal',
  template:`
  <div id={{elementId}} class="modal fade" #modalContainer tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
  styles:[`
    .modal-body{height:250px; overflow-y:scroll}
  `]
})

export class SimpleModalComponent {
  @Input() title:string;
  @Input() elementId:string;
  @ViewChild('modalContainer') modalCon:ElementRef;
  constructor(@Inject(JQUERY_TOKEN) private $:any) { }

  closeModal(){
    this.$(this.modalCon.nativeElement).modal('hide')
  }
}
