import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatusOptions = ["Stable", "Critical", "Finished"];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      // formControlName: [initial value string, sync Validators[], async Validators[]]
      projectName: ["", Validators.required, this.validateProjectName],
      email: ["", [Validators.required, Validators.email]],
      projectStatus: [""],
    });
  }

  validateProjectName(
    projectName: FormControl
  ): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return new Promise((resolve) => {
      projectName.value === "Test"
        ? resolve({ invalidProjectName: true })
        : resolve(null);
    });
  }
}
