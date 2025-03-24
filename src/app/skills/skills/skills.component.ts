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
    this.sortSkillsByPercentage();
  }
  sortSkillsByPercentage(): void {
    this.skills.sort((a, b) => b.percentage - a.percentage); // Descending order
  }
  getOuterStrokeColor(): string {
    return '#9b69d9'; // Purple
  }

  getInnerStrokeColor(): string {
    return '#bda1df'; // Lighter purple
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
