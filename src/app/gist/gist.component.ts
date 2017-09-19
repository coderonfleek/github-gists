import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import {GithubService} from '../services/github.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: "app-gist",
  templateUrl: "./gist.component.html",
  styleUrls: ["./gist.component.css"]
})
export class GistComponent implements OnInit {
  @Input() gist;
  public starring;
  public deleting;

  constructor(
    public router: Router,
    private github: GithubService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const files = this.gist.files;
    this.gist.file = files[Object.keys(files)[0]];

    console.log(this.gist.file);

    // Check if gist is starred
    if(!this.isPublic()){

      this.github.isGistStarred(this.gist.id).then(
        function(status) {
          this.gist.starred = status === 204;
        }.bind(this)
      );

    }
    
  }

  goToGist(id) {
    this.router.navigate(["/gists/" + id]);
  }

  goToEdit(id) {
    this.router.navigate(["/gists/edit/" + id]);
  }

  starGist(id) {
    this.starring = true;

    this.github.starGist(id).then(
      function() {
        this.starring = false;
        this.toastr.success("Gist successfully Starred", "Success");

        this.gist.starred = true;
      }.bind(this),
      function(err) {
        this.starring = false;
        this.toastr.error("Could not Star gist", "Error");
      }.bind(this)
    );
  } // starGist

  unStarGist(id) {
    this.starring = true;

    this.github.unStarGist(id).then(
      function() {
        this.starring = false;
        this.toastr.success("Gist successfully Unstarred", "Success");

        this.gist.starred = false;

      }.bind(this),
      function(err) {
        this.starring = false;
        this.toastr.error("Could not Un-Star gist", "Error");
      }.bind(this)
    );
  } // unStarGist

  deleteGist(id) {
    this.deleting = true;

    this.github.deleteGist(id).then(
      function() {
        this.deleting = false;
        this.toastr.success("Gist successfully Deleted", "Success");

        this.gist.deleted = true;
      }.bind(this),
      function(err) {
        this.deleting = false;
        this.toastr.error("Could not Delete gist", "Error");
      }.bind(this)
    );
  } // deleteGist

  isPublic () {

    const user = JSON.parse(localStorage.getItem('user'));

    if(this.gist.owner && user){
      
      return this.gist.owner.login != user.login;
    }else{
      return true;
    }
    
  }
}
