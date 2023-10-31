import { Component, ElementRef, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  config: { itemsPerPage: number; currentPage: number; totalItems: any; };
  // projects: void;
  // config: { itemsPerPage: number; currentPage: number; totalItems: any; };

  constructor(private el: ElementRef) { }
  faGithub = faGithub;
  ngOnInit() {
    console.log(this.projects)
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
    console.log(this.config)
    
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
  
 
   projects: any=[{
      id:1,
      title: 'Emotion Recognition for Monitoring Gameplay',
      description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
      imgUrl:'/assets/videos/Emotion_detection.mp4',
      technology:"Python, deep learning, machine learning, image processing, CNN",
      githurl:""
    },
  {
    id:2,
    title: 'Portfolio',
    description: 'This project is portfolio of mine. It is created using angular framework. It is include my details with my projects and experience. It is help to identify the employers to my skills and knowledge using this portfolio. This portfolio helps to explain the more details about my skills knowledge than my cv.',
    imgUrl:'/assets/videos/Farmer.mp4',
    technology:'Angular, typescript, html, css, Docker, Google Clouds',
    githurl:"https://github.com/Nirodhachathuri/Portfolio-Angular"
  
  },
  {
    id:3,
    title: 'Student Registration Portal',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl:'/assets/videos/AdminPart -1.mp4',
    technology:'Java, struts, JSP, HTML, CSS, mySQL',
    githurl:"https://github.com/Nirodhachathuri/Web-Application"
  },
  {
    id:4,
    title: 'Sentimental Analysis',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl:'/assets/videos/sentimental.mp4',
    technology:'Java, struts, JSP, HTML, CSS, mySQL',
    githurl:"https://github.com/Nirodhachathuri/Web-Application"
  },{
    id:5,
    title: 'Google Analytics',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl:'/assets/videos/googleAnalytics.mp4',
    technology:'Java, struts, JSP, HTML, CSS, mySQL',
    githurl:"https://github.com/Nirodhachathuri/Web-Application"
  }]


}
