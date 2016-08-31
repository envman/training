import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { DeveloperService } from './developer.service'
import { BadgeService } from '../badges/badge.service'

@Component({
  moduleId: module.id,
  templateUrl: 'developer.component.html',
  styleUrls: ['developer.component.css'],
  providers: [DeveloperService, BadgeService]
})
export class DeveloperComponent {
  badges: any[]
  developer: any
  sub: any
  id: string

  constructor(private route: ActivatedRoute, private developerService: DeveloperService, private badgeService: BadgeService) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']

      this.developerService.developer(this.id)
        .subscribe(d => {
          this.developer = d
        })

      this.badgeService.badgeList(this.id)
        .subscribe(b => {
          this.badges = b
        })
    })
  }
}
