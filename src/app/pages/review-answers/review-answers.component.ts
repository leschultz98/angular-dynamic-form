import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-review-answers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.scss'],
})
export class ReviewAnswersComponent {
  constructor(public dynamicFormService: DynamicFormService) {}
}
