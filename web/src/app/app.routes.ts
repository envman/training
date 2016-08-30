import { provideRouter, RouterConfig } from '@angular/router'

import { CourseListComponent } from './course-list/course-list.component';
// import { SurveyComponent } from './+survey/survey.component'
// import { ImportComponent } from './import/import.component'
// import { SurveyEditComponent } from './+survey-edit/survey-edit.component'
// import { RuleEditComponent } from './+rule-edit/rule-edit.component'
// import { HomeComponent } from './+home/home.component'
// import { CanActivateViaAuthGuard } from './guards/canActivateViaAuth.guard'

export const routes: RouterConfig = [
    { path: '', component: CourseListComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'developers', component: CourseListComponent },
    // { path: 'survey', component: SurveyComponent },
    { path: '**', redirectTo: '/' }
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
