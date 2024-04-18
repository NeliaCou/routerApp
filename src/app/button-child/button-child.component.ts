import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrl: './button-child.component.css'
})
export class ButtonChildComponent {

  @Input() colorChild: string="";
  @Output() clickTextChange: EventEmitter<string> = new EventEmitter<string>();

  isDisabled: boolean = false;

  sendToParent(): void {
    this.clickTextChange.emit(this.colorChild);
    this.isDisabled = !this.isDisabled;
};


}
