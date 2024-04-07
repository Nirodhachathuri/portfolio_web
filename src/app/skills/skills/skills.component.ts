import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skillName: string;
  @Input() percentage: number;
  constructor() {}

  ngOnInit(): void {
    
  }
  skills: any=[{
    id:1,
    skillName: 'Java',
    percentage: 80,
  },
{
  id:2,
  skillName: 'HTML',
  percentage: 90,
},
{
  id:3,
  skillName: 'CSS',
  percentage: 85,
}]
}
