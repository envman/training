import { provideRouter, RouterConfig } from '@angular/router'

import { CourseListComponent } from './course-list/course-list.component'
import { DeveloperListComponent } from './developer-list/developer-list.component'
import { DeveloperComponent } from './developer/developer.component'
import { AdminComponent } from './admin/admin.component'

export const routes: RouterConfig = [
    { path: '', component: CourseListComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'developers', component: DeveloperListComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'developer/:id', component: DeveloperComponent },
    { path: '**', redirectTo: '/' }
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
