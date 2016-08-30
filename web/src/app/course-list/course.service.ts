import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt'

@Injectable()
export class CourseService {

  constructor(private authHttp: AuthHttp) {  }

  courseList() {
    return this.authHttp.get('http://localhost:4301/course/list')
      .map(this.convertData)
  }

  convertData(res: Response) {
    let body = res.json()
    return body || { }
  }
}
