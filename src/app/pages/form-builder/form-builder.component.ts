import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AddQuestionDialogComponent } from '../../components/add-question-dialog/add-question-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { QuestionForm } from '../../shared/models';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  constructor(
    public dialog: MatDialog,
    public dynamicFormService: DynamicFormService,
    private router: Router,
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open<AddQuestionDialogComponent, any, QuestionForm>(AddQuestionDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dynamicFormService.addControl(result);
      }
    });
  }

  review() {
    let valid = true;
    this.dynamicFormService.forms$.value.forEach((form) => {
      const f = form.type === 'checkbox' ? form.group : form.control;
      f.markAsTouched();
      if (!f.valid) valid = false;
    });

    if (valid) {
      this.router.navigate(['/form/answers']);
    }
  }
}
