import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
colorList: string[] = ["blue", "green", "yellow", "pink", "purple"];
newColorList: string[] = [];

colorClicked: string = "";

changeText(event: string) : void{
this.colorClicked = event;
this.newColorList.push(event);
}
}
