import { Component } from '@angular/core';
import { CourseListComponent } from './course-list'
import { ROUTER_DIRECTIVES, Router } from '@angular/router'
import { MenuComponent } from './menu/menu.component'
import { AdalService } from 'angular2-adal/core'
import { AdalConfigurationService } from '../app/adal/adal-configuration.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  precompile: [CourseListComponent]
})
export class AppComponent {

  constructor(private router: Router, private adalService: AdalService, private adalConfigurationService: AdalConfigurationService) {

    this.adalService.init(this.adalConfigurationService.adalConfig);
    this.adalService.handleWindowCallback();

    if (this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['/']);
      let userId = this.adalService.userInfo.profile.aud;
      localStorage.setItem('id_token', this.adalService.getCachedToken(userId));
    } else {
      this.adalService.login();
    }
  }
}
