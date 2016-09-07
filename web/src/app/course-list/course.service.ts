import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt'

@Injectable()
export class CourseService {

  constructor(private authHttp: AuthHttp) {  }

  courseList() {
    return this.authHttp.get('http://localhost:4301/course/list')
      .map(r => r.json())
  }

  course(id) {
    return this.authHttp.get('http://localhost:4301/course/' + id)
      .map(r => r.json())
  }

  addCourse(name, author, description) {
    let url = 'http://localhost:4301/course/add'
    let data = JSON.stringify({name: name, author: author, description: description})
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post(url, data, options)
  }
}
