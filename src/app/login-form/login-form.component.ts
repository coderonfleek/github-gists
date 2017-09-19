import { Component, OnInit } from '@angular/core';

import {GithubService} from '../services/github.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginForm;

  constructor(private github: GithubService, public router: Router) { }

  ngOnInit() {

    this.loginForm = {};

    const user = localStorage.getItem('user');

    if(user){
      this.router.navigate(['']);
    }
  }

  login (details) {

    this.github.authenticate(details.username, details.password)
    .then(
      function (user) {
        console.log(user);

        // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user));

        // Go to public gists
        location.reload();
      }.bind(this),
      function (err) {
        console.log(err);
      }
    );

  }// login

}
