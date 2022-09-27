import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatusOptions: ["Stable", "Critical", "Finished"];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      projectName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      projectStatus: [""],
    });
  }
}
