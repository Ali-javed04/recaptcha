import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';

const routes: Routes = [
  {
    path:'',component:RecaptchaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
