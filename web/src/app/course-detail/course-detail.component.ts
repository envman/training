import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { CourseService } from '../course-list/course.service'

@Component({
  moduleId: module.id,
  selector: 'app-course-detail',
  templateUrl: 'course-detail.component.html',
  styleUrls: ['course-detail.component.css'],
  providers: [CourseService]
})
export class CourseDetailComponent {

  badges: any[]
  course: any
  sub: any
  id: string

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']

      this.courseService.course(this.id)
        .subscribe(c => {
          this.course = c
        })
    })
  }
}
