import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'developer-list',
  templateUrl: 'developer-list.component.html'
})
export class DeveloperListComponent {

  developers: any [] = [
    { id: '1', name: 'Robert Gill', xp: '1000', level: 'Code Monkey Grand Master' },
    { id: '2', name: 'James Neal', xp: '800', level: 'Senior Code Monkey' },
    { id: '3', name: 'Matthew Baylon', xp: '400', level: 'Code Monkey' },
    { id: '4', name: 'Steve Tsang', xp: '0', level: 'Baby Code Monkey' }
  ]

  constructor(private router: Router) {  }

  click(dev) {
    this.router.navigate(['/developer', dev.id]);
  }
}
