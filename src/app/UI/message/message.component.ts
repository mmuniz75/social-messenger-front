import { Component, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class MessageComponent  {
    
  @Input() isError = false;
  @Input() text = '';

  @ViewChildren('content') messageContent:QueryList<ElementRef>;
  
  getTitle() {
      return this.isError ? 'Aviso':'Confirmação';
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open() {
    this.modalService.open(this.messageContent.first, { size: 'sm' });
  }

}
