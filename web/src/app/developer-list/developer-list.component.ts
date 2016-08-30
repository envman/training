import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DeveloperService } from '../developer/developer.service'

@Component({
  moduleId: module.id,
  selector: 'developer-list',
  templateUrl: 'developer-list.component.html',
  providers: [DeveloperService]
})
export class DeveloperListComponent {

  developers: any []

  constructor(private router: Router, private developerService: DeveloperService) {  }

  ngOnInit() {
    this.developerService.developerList()
      .subscribe(d => this.developers = d)
  }

  click(dev) {
    this.router.navigate(['/developer', dev.id]);
  }
}
