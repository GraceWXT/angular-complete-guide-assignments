import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  // static methods/properties are for the class itself, not the instances
  static asyncProjectName(
    projectName: FormControl
  ): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return new Promise((resolve) => {
      projectName.value === "Test"
        ? resolve({ invalidProjectName: true })
        : resolve(null);
    });
  }
  static projectName(
    projectName: FormControl
  ): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return new Promise((resolve) => {
      projectName.value === "Test Project"
        ? resolve({ invalidProjectName: true })
        : resolve(null);
    });
  }
}
