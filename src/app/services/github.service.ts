import { Injectable } from '@angular/core';

import {Http , Response, Headers, RequestOptions} from '@angular/http';
import {appConfig} from '../app.config';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  private baseUrl = appConfig.baseUrl;
  private token = appConfig.token;

  constructor(private http: Http) { }

  authenticate(username, password) {

    const headers = new Headers({'Authorization': 'Basic ' + btoa(username + ':' + password)});

    const data = {
      'scopes' : ['gist'],
      'note' : 'Test Login'
    };

    return this.http
    .post(this.baseUrl + 'user', JSON.stringify(data), {headers: headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);

  }// authenticate

  listPublicGists() {
    return this.makeGetRequest(this.baseUrl + 'gists/public');
  }// listPublicGists

  getSingleGist(id) {
    return this.makeGetRequest(this.baseUrl + 'gists/' + id);
  }// getSingleGist

  createGist(description, files) {

    // Set the auth header
    const headers = new Headers({'Authorization': 'token ' + this.token});

    const gistData = {
      'description': description,
      'public': true,
      'files': files
    };

    // return this.makePostRequest(this.baseUrl + 'gists', gistData);

    return this.http
    .post(this.baseUrl + 'gists', JSON.stringify(gistData), {headers: headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);

  }// createGist

  editGist(id, description, files) {

    const gistUpdate = {
      'description': description,
      'public': true,
      'files': files
    };

    // Set the auth header
    const headers = new Headers({'Authorization': 'token ' + this.token});

    return this.http
    .patch(this.baseUrl + 'gists/' + id, JSON.stringify(gistUpdate), {headers: headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);

  }// editGist

  // TODO: Might need authentication
  deleteGist(id) {

    const headers = new Headers({'Authorization': 'token ' + this.token, 'Content-Type' : 'application/json'});

    const options = new RequestOptions({headers : headers});

    return this.http.delete(this.baseUrl + 'gists/' + id, {headers: headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);

  }// deleteGist

  starGist(id) {

    const headers = new Headers({'Content-Length': 0, 'Authorization': 'token ' + this.token});

    return this.http
    .put(this.baseUrl + 'gists/' + id + '/star', JSON.stringify({}), {headers: headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);

  }// starGist

  unStarGist(id) {

    const headers = new Headers({'Authorization': 'token ' + this.token});


    return this.http.delete(this.baseUrl + 'gists/' + id + '/star',  {headers: headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);

  }// unStarGist

  isGistStarred (id) {

    const headers = new Headers({'Authorization': 'token ' + this.token});

    return this.http.get(this.baseUrl + 'gists/' + id + '/star', {headers: headers})
    .toPromise()
    .then(response => response.status)
    .catch(this.handleError);

  }// isGistStarred

  listUserGists() {

    return this.makeGetRequest(this.baseUrl + 'users/' + appConfig.username + '/gists');

  }// listUserGists

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  makeGetRequest(url) {
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  makePostRequest(url, data) {
    return this.http
    .post(url, JSON.stringify(data))
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }


}
