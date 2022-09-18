import { Injectable } from "@angular/core";

// Provide the service in App Module to be injected in another service
@Injectable({ providedIn: "root" })
export class CountersService {
  toActiveCounts: number = 0;
  toInactiveCounts: number = 0;

  incrementToActiveCounts() {
    this.toActiveCounts++;
    console.log("this.toActiveCounts", this.toActiveCounts);
  }
  incrementToInactiveCounts() {
    this.toInactiveCounts++;
    console.log("this.toInactiveCounts", this.toInactiveCounts);
  }
}
