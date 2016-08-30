import { Component } from '@angular/core';
import { CourseListComponent } from './course-list'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CourseListComponent]
})
export class AppComponent {
  title = 'app works!'
  
}
