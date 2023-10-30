import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { BREAKPOINT, FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver } from '@angular/cdk/layout';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
  },
];

@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [
    BreakpointObserver,
    {
      provide: BREAKPOINT,
      useValue: {
        xs: '(max-width: 599px)',
        sm: '(min-width: 600px) and (max-width: 959px)',
        md: '(min-width: 960px) and (max-width: 1279px)',
        lg: '(min-width: 1280px) and (max-width: 1919px)',
        xl: '(min-width: 1920px)',
      },
    },
  ],
})
export class ExperienceModule { }
