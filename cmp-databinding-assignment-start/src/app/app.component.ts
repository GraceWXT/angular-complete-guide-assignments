import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrementNumber(gameData: { count: number }) {
    const newNumber = gameData.count;
    if (newNumber % 2 === 1) {
      this.oddNumbers.push(newNumber);
    } else {
      this.evenNumbers.push(newNumber);
    }

    console.log("this.oddNumbers", this.oddNumbers);
    console.log("this.evenNumbers", this.evenNumbers);
  }
}
