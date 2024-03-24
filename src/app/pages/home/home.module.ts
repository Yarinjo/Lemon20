import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeDailyTasksComponent } from './home-daily-tasks/home-daily-tasks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    HomeNewsComponent,
    HomeDailyTasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class HomeModule { }
