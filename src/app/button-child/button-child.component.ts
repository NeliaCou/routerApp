import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrl: './button-child.component.css'
})
export class ButtonChildComponent {
@Input() colorChild: string="";

}
