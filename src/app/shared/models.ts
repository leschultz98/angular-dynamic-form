import { FormControl, FormGroup } from '@angular/forms';

export interface QuestionForm {
  type: string;
  question: string;
  options: Options;
  specifyAnswer: boolean;
  isRequired: boolean;
  other: FormControl;
  control: FormControl;
  group: FormGroup;
}

export interface Options {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}
