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
},
{
  id:4,
  skillName: 'Tyescript',
  percentage: 90,
},
{
  id:5,
  skillName: 'JavaScript',
  percentage: 85,
},
{
  id:6,
  skillName: 'Python',
  percentage: 90,
},
{
  id:7,
  skillName: 'R -studio',
  percentage: 90,
},
{
  id:8,
  skillName: 'Communication Skills',
  percentage: 90,
}]
}
