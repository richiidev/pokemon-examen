import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProgressBarComponent } from "src/app/shared/progress-bar/progress-bar.component";

@NgModule({
    declarations: [ProgressBarComponent],
    imports: [
      CommonModule
    ],
    exports: [
      ProgressBarComponent
    ]
  })
  export class SharedModule { }