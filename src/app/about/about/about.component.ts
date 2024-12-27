import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myData: string[][] = [
    ['Name', 'Nirodha Chathuri Malalagama'],
    // ['DOB','25/11/1992'],
    ['Email', 'chathuri.malalagama@ymail.com'],
    // ['Phone','+94776707048'],
    // ['Address','326, Wilgoda Road, Kurunegala, Sri Lanka']
  ];
  aboutMe: string[] = [
   " Experienced Software Engineer with 4 years of hands-on expertise, specializing as a Full Stack Developer. I possess strong technical abilities and a decisive nature essential for successful project development. I excel in gathering requirements, designing systems, and optimizing code. A focused and adaptable professional, I have a proven track record of 4 years in software engineering roles, with a solid understanding of front-end and back-end development to meet both company and customer needs.",
   "I am seeking challenging opportunities in the field of Computer Science. My strong research background, eagerness to learn new technologies, and enthusiasm for gaining insights from experienced professionals set me apart. These qualities, along with my ability to balance full-time work and freelance projects, make me unique.",
   'Why I Am Special',
    '  - My MSc research focused on Natural Language Processing in YouTube videos. ',
    '  - I developed an Emotion Recognition project related to Computer Vision.',
    '  - I actively take on freelance projects as part-time work',
    '  - I am currently employed as a full-time Software Engineer, specializing in Full Stack Development with a strong understanding of modern development tools and practices.'
  ]
}
