import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicgistsComponent} from './publicgists/publicgists.component';
import {SingleGistComponent} from './single-gist/single-gist.component';
import {CreateGistFormComponent} from './create-gist-form/create-gist-form.component';
import {EditGistFormComponent} from './edit-gist-form/edit-gist-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {MyGistsComponent} from './my-gists/my-gists.component';

const routes: Routes = [
  {
    path: '',
    component : PublicgistsComponent
  },
  {
    path: 'gists',
    component : PublicgistsComponent
  },
  {
    path: 'gists/:id',
    component : SingleGistComponent
  },
  {
    path: 'creategist',
    component : CreateGistFormComponent
  },
  {
    path: 'gists/edit/:id',
    component : EditGistFormComponent
  },
  {
    path: 'login',
    component : LoginFormComponent
  },
  {
    path: 'me/gists',
    component : MyGistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
