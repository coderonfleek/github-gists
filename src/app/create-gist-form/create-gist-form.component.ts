import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {GithubService} from '../services/github.service';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-create-gist-form',
  templateUrl: './create-gist-form.component.html',
  styleUrls: ['./create-gist-form.component.css']
})
export class CreateGistFormComponent implements OnInit {

  public gistForm;
  public processing;

  constructor(private github: GithubService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {

    this.gistForm = {};
  }

  createGist (details) {

    this.processing = true;

    const files = {};

    files[details.filename] = { 'content' : details.content };

    console.log(files);

    this.github.createGist(details.description, files)
    .then(function (newGist) {

      this.processing = false;

      /*this.gists = gists;
      console.log(this.gists);*/
      this.toastr.success('Gist Successfully Created', 'Success');

      // Go to new gist
      this.router.navigate(['me/gists']);
    }.bind(this));

  }// createGist

}
