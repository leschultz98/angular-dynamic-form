import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionForm } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  forms$: BehaviorSubject<QuestionForm[]> = new BehaviorSubject([] as QuestionForm[]);

  addControl(config: QuestionForm): void {
    this.forms$.next([...this.forms$.value, config]);
  }
}
