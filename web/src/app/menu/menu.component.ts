import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES, Router } from '@angular/router'
import { AdalService } from 'angular2-adal/core'
import { AdalConfigurationService } from '../adal/adal-configuration.service';

@Component({
  moduleId: module.id,
  selector: 'nav-menu',
  templateUrl: 'menu.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent {

  constructor(private adalService: AdalService, private adalConfigurationService: AdalConfigurationService) {}

  logIn() {
    this.adalService.login();
  }

  logOut() {
    this.adalService.logOut();
  }

  getUserName() {
    return this.adalService.userInfo.userName;
  }

  getFullName() {
    return this.adalService.userInfo.profile.given_name + ' ' + this.adalService.userInfo.profile.family_name;
  }

  isAuthenticated() {
    return this.adalService.userInfo.isAuthenticated;
  }
}
