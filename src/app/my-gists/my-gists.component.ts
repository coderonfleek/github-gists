import { Component, OnInit } from '@angular/core';

import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-my-gists',
  templateUrl: './my-gists.component.html',
  styleUrls: ['./my-gists.component.css']
})
export class MyGistsComponent implements OnInit {

  public loading;

  constructor(private github: GithubService) { }

  ngOnInit() {

    this.loading = true;

    // List Personal Gists
    this.github.listUserGists()
    .then(function (gists) {

      this.loading = false;

      this.gists = gists;
      console.log(this.gists);
    }.bind(this));
  }

}
