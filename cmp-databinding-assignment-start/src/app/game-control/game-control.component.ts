import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() incrementNumber = new EventEmitter<{ count: number }>();
  intervalId: NodeJS.Timeout;
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  startCount() {
    this.intervalId = setInterval(() => {
      this.count++;
      this.incrementNumber.emit({ count: this.count });
      console.log("count", this.count);
    }, 1000);
  }

  stopCount() {
    clearInterval(this.intervalId);
  }
}
