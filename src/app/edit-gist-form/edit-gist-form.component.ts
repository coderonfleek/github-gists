import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {GithubService} from '../services/github.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-gist-form',
  templateUrl: './edit-gist-form.component.html',
  styleUrls: ['./edit-gist-form.component.css']
})
export class EditGistFormComponent implements OnInit {

  private routingInfo;
  private gistId;
  public loading;
  public editForm;
  public processing;
  public gist;

  constructor(private route: ActivatedRoute, private github: GithubService, public router: Router, private toastr: ToastrService) {}

  ngOnInit() {

    this.loading = true;

    // get URL parameters
    this.routingInfo = this.route.params.subscribe(params => {
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
        this.errMsg = this.toastr.error('Could not fetch gist', 'Error');
      });
    });
  }

  editGist(details) {
    this.processing = true;

    const files = {};

    if (details.filename) {
      files[details.filename] = { filename: details.filename};
    }

    if (details.content) {
      files[details.filename].content = details.content;
    }

    const filesToSend = (details.filename) ? files : this.gist.files;


    console.log(files);

    this.github.editGist(this.gistId, details.description, filesToSend).then(
      function(editedGist) {
        this.processing = false;

        /*this.gists = gists;
          console.log(this.gists);*/
        this.toastr.success('Gist Successfully Edited', 'Success');

        // Go to new gist
        this.router.navigate(['me/gists']);
      }.bind(this),
      function (err) {
        console.log(err);

        this.toastr.error('Gist Could Not be Edited', 'Error');
      }
    );
  } // editGist
}
