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
    'Experienced Software Engineer with 3 years of hands-on expertise, equipped with technical abilities and a decisive nature necessary for successful job development. Expert in gathering requirements, designing systems, and optimizing code. Focused and adaptable professional with a proven track record of 3 years in software engineering positions, skilled at flexing to various roles to meet company and customer needs.',
    'I am seeking challenging opportunities in the field of Computer Science. What sets me apart is my strong research background, my eagerness to learn new technologies, and my enthusiasm for seeking inspiration and ideas from experienced professionals. This is what makes me unique.',
    'Why I Am Special',
    '  - I did in my Msc research Natural Language Processing in Youtube Videos, ',
    '  - I did emotional Recognition project in Computer Vision related project',
    '  - As a part time I am doing freelancing Projects',
    '  - I am working as a software engineer in Full time worker'
  ]
}
