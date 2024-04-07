import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SkillsComponent } from './skills/skills.component';
import {NgCircleProgressModule} from 'ng-circle-progress'

const routes: Routes = [
  {
    path: '/skills',
    component: SkillsComponent,
  },
];

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    FlexLayoutModule,
  ]
})
export class SkillsModule { }
