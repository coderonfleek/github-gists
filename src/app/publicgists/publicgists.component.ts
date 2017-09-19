import { Component, OnInit } from '@angular/core';

import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-publicgists',
  templateUrl: './publicgists.component.html',
  styleUrls: ['./publicgists.component.css']
})
export class PublicgistsComponent implements OnInit {

  loading;

  constructor(private github: GithubService) { }

  ngOnInit() {

    this.loading = true;

    // List Public Gists
    this.github.listPublicGists()
    .then(function (gists) {

      this.loading = false;

      this.gists = gists;
      console.log(this.gists);
    }.bind(this));
  }

}
