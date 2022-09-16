import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() incrementNumber = new EventEmitter<{ count: number }>();
  intervalId: NodeJS.Timeout;

  constructor() {}

  ngOnInit(): void {}

  startCount() {
    let count = 0;
    this.intervalId = setInterval(() => {
      count++;
      this.incrementNumber.emit({ count });
      console.log("count", count);
    }, 1000);
  }

  stopCount() {
    clearInterval(this.intervalId);
  }
}
