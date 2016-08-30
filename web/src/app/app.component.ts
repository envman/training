import { Component } from '@angular/core';
import { CourseListComponent } from './course-list'
import { ROUTER_DIRECTIVES, Router } from '@angular/router'
import { MenuComponent } from './menu/menu.component'
import { AdalService } from 'angular2-adal/core'
import { AdalConfigurationService } from '../app/adal/adal-configuration.service'
import { DeveloperService } from './developer/developer.service'
import { DeveloperListComponent } from './developer-list/developer-list.component'
import { DeveloperComponent } from './developer/developer.component'
import { AdminComponent } from './admin/admin.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DeveloperService],
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  precompile: [CourseListComponent, DeveloperListComponent, DeveloperComponent, AdminComponent]
})
export class AppComponent {

  constructor(private router: Router, private adalService: AdalService, private adalConfigurationService: AdalConfigurationService, private developerService: DeveloperService) {

    this.adalService.init(this.adalConfigurationService.adalConfig)
    this.adalService.handleWindowCallback()

    if (this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['/'])
      let userId = this.adalService.userInfo.profile.aud
      localStorage.setItem('id_token', this.adalService.getCachedToken(userId))
      this.developerService.checkDeveloper()
    } else {
      this.adalService.login()
    }
  }
}
