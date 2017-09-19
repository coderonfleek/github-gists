import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// External Dependencies
import {ToastrModule} from 'ngx-toastr';

// Custom
import { GithubService } from './services/github.service';
import { GistComponent } from './gist/gist.component';
import { PublicgistsComponent } from './publicgists/publicgists.component';
import { AuthService } from './auth/auth.service';
import { SingleGistComponent } from './single-gist/single-gist.component';
import { CreateGistFormComponent } from './create-gist-form/create-gist-form.component';
import { EditGistFormComponent } from './edit-gist-form/edit-gist-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyGistsComponent } from './my-gists/my-gists.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    GistComponent,
    PublicgistsComponent,
    SingleGistComponent,
    CreateGistFormComponent,
    EditGistFormComponent,
    LoginFormComponent,
    MyGistsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [GithubService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
