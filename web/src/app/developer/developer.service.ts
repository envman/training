import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt'

@Injectable()
export class DeveloperService {

  constructor(private authHttp: AuthHttp) {  }

  developerList() {
    return this.authHttp.get('http://localhost:4300/dev/list')
      .map(this.convertData)
  }

  developer(id) {
    return this.authHttp.get('http://localhost:4300/dev/' + id)
      .map(this.convertData)
  }

  convertData(res: Response) {
    let body = res.json()
    return body || { }
  }

  checkDeveloper() {
    this.authHttp.get('http://localhost:4300/dev/check')
      .subscribe(d => {})
  }
}
