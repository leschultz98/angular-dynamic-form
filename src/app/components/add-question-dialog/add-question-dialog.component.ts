import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { QuestionForm } from '../../shared/models';

interface Type {
  value: string;
  title: string;
}

@Component({
  selector: 'app-add-question-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.scss'],
})
export class AddQuestionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddQuestionDialogComponent, QuestionForm>,
    public fb: FormBuilder,
  ) {}

  types: Type[] = [
    { value: 'paragraph', title: 'Paragraph' },
    { value: 'checkbox', title: 'Checkbox List' },
  ];
  count: number = 1;

  type: string = 'paragraph';
  question: string = '';
  option1: string = '';
  option2: string = '';
  option3: string = '';
  option4: string = '';
  option5: string = '';
  specifyAnswer: boolean = false;
  isRequired: boolean = false;

  increaseCount() {
    this.count++;
  }

  submit(): void {
    this.dialogRef.close({
      type: this.type,
      question: this.question,
      options: {
        option1: this.option1,
        option2: this.option2,
        option3: this.option3,
        option4: this.option4,
        option5: this.option5,
        other: this.specifyAnswer ? 'Other' : '',
      },
      specifyAnswer: this.specifyAnswer,
      isRequired: this.isRequired,
      other: new FormControl(),
      control: new FormControl(undefined, this.isRequired ? [Validators.required] : []),
      group: this.fb.group({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        other: false,
      }),
    });
  }
}
