import { Component, OnInit } from '@angular/core'

@Component({
  moduleId: module.id,
  templateUrl: 'developer.component.html'
})
export class DeveloperComponent {
  developer: any = <any>{
    id: '1',
    name: 'Robert Gill',
    email: 'robertgill@etech.net'
  }

  constructor() {  }
}
