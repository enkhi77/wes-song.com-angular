import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ResumeComponent,
    path: 'resume'
  }
];
