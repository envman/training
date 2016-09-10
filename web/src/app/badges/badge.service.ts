import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt'

@Injectable()
export class BadgeService {

  constructor(private authHttp: AuthHttp) {  }

  badgeList(id) {
    return this.authHttp.get('http://localhost:4300/badge/' + id)
      .map(this.convertData)
  }

  convertData(res: Response) {
    let body = res.json()
    return body || { }
  }
}
