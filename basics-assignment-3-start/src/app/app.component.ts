import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickLog: number[] = [];
  showParagraph = true;

  onClick(event) {
    this.clickLog.push(event.timeStamp);
    this.showParagraph = !this.showParagraph;
    console.log('clickLog', this.clickLog);
  }

  getLocaleString(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }
}
