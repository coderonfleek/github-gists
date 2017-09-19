import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-single-gist',
  templateUrl: './single-gist.component.html',
  styleUrls: ['./single-gist.component.css']
})
export class SingleGistComponent implements OnInit {

  private routingInfo;
  private gistId;
  public loading;
  public errMsg;

  constructor(private route: ActivatedRoute, private github: GithubService) { }

  ngOnInit() {

    this.loading = true;

    // get URL parameters
    this.routingInfo = this.route
    .params
    .subscribe(params => {
        // Get gist Id
        this.gistId = params['id'];

        console.log(this.gistId);

        // Get the gist
        this.github.getSingleGist(this.gistId).then(function(gist) {
          this.loading = false;

          this.gist = gist;
          console.log(this.gist);
        }.bind(this), function(err) {
          this.loading = true;
          this.errMsg = "Could not fetch gist";
        }.bind(this));
    });
  }

}
