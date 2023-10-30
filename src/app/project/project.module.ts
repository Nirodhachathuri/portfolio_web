import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { HoverAutoplayDirective } from './hover-autoplay.directive';

const routes: Routes = [
  {
    path: '/projects',
    component: ProjectComponent,
  },
];

@NgModule({
  declarations: [ProjectComponent, HoverAutoplayDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class ProjectModule { }
