import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
// import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt';

@Injectable()
export class DeveloperService {

  constructor(private http: Http) {  }

  developerList() {
    return this.http.get('http://localhost:4300/dev/list')
      .map(this.convertData)
  }

  convertData(res: Response) {
    let body = res.json()
    return body || { }
  }
}