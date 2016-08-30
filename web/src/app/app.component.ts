import { Component } from '@angular/core';
import { CourseListComponent } from './course-list'
import { ROUTER_DIRECTIVES, Router } from '@angular/router'
import { MenuComponent } from './menu/menu.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  precompile: [CourseListComponent]
})
export class AppComponent {

  constructor(private router: Router) {}
}
