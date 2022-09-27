import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";

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
      projectName: [
        "",
        [Validators.required, CustomValidators.projectName],
        CustomValidators.asyncProjectName,
      ],
      email: ["", [Validators.required, Validators.email]],
      projectStatus: [""],
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
