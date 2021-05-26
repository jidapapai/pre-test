import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { QuizOneComponent } from './quiz-one/quiz-one.component';
import { QuizTwoComponent } from './quiz-two/quiz-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'quiz-one', component: QuizOneComponent },
  { path: 'quiz-two', component: QuizTwoComponent },
  { path: 'intro', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
