import { Component, OnInit } from '@angular/core';

import {GithubService} from './services/github.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aggregate Gists';
  private gists;
  public user;
  public loading;

  constructor(private github: GithubService, public auth: AuthService, public router: Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {

    this.loading = true;

    // List Public Gists
    this.github.listPublicGists()
    .then(function (gists) {

      this.loading = false;

      this.gists = gists;
      console.log(this.gists);
    }.bind(this));

    // Get user details if present
    const user = JSON.parse(localStorage.getItem('user'));

    this.user = (user) ? user : null;
  }

  isAuthenticated () {
    return localStorage.getItem('user');
  }

  login () {
    this.router.navigate(['/login']);
  }

  logout () {
    localStorage.removeItem('user');
    this.router.navigate(['']);
    location.reload();
  }

  goToCreateGist () {
    this.router.navigate(['/creategist']);
  }

  goToMyGists () {
    this.router.navigate(['me/gists']);
  }

  goToPublicGists (){
    this.router.navigate(['']);
  }

  
}
