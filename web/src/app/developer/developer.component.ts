import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { DeveloperService } from './developer.service'

@Component({
  moduleId: module.id,
  templateUrl: 'developer.component.html',
  providers: [DeveloperService]
})
export class DeveloperComponent {
  developer: any 
  sub: any
  id: string

  constructor(private route: ActivatedRoute, private developerService: DeveloperService) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']

      this.developerService.developer(this.id)
        .subscribe(d => {
          this.developer = d
        })
    })
  }
}
