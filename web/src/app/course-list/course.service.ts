import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable }     from 'rxjs/Observable'
import { AuthHttp, AuthConfig, AUTH_PROVIDERS } from 'angular2-jwt'

@Injectable()
export class CourseService {

  constructor(private authHttp: AuthHttp) {  }

  courseList() {
    return this.authHttp.get('http://localhost:4300/course/list')
      .map(r => r.json())
  }

  course(id) {
    return this.authHttp.get('http://localhost:4300/course/' + id)
      .map(r => r.json())
  }

  addCourse(name, author, description, xp, time, skills) {
    let url = 'http://localhost:4300/course/add'
    let data = JSON.stringify({name: name, author: author, description: description, xp: xp, time: time, skills: skills})
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });

    return this.authHttp.post(url, data, options)
  }
}
