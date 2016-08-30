import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES, Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'nav-menu',
  templateUrl: 'menu.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MenuComponent {

  constructor() {}
}
