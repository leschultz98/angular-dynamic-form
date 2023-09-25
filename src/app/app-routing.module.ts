import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { ReviewAnswersComponent } from './pages/review-answers/review-answers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form/builder',
    pathMatch: 'full',
  },
  {
    path: 'form/builder',
    component: FormBuilderComponent,
    title: 'Form builder',
  },
  {
    path: 'form/answers',
    component: ReviewAnswersComponent,
    title: 'Review answers',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
