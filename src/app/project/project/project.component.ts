import { Component, ElementRef, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

  pageChanged(event: any) {
    this.config.currentPage = event;
  }


  projects: any = [
    {
      id: 1,
      title: 'Simancnc Product Page',
      description: 'This web page developed using laravel and react. Customer request is enhance the web page loading time using react. I did this task sucessfully without using compress tool. It is added animation, product url according to product title. ',
      imgUrl: '/assets/videos/simancnc.mp4',
      technology: 'ReactJs, Laravel, Javascript, HTML, CSS, mySQL',
      githurl: "https://www.simancnc.com/products/"
    },
    {
      id: 2,
      title: 'Developed the dynamic map',
      description: 'This dynamic map was developed using Angular, Python, and Node.js. The Angular Leaflet, D3, and Leaflet-Cluster packages were used to help develop the map dynamically.',
      imgUrl: '/assets/videos/developed_map.mp4',
      technology: 'Angular, Nodejs, MongoDB, Python',
      githurl: "https://github.com/Nirodhachathuri/new-apps/"
    },
    {
      id: 3,
      title: 'Dashboard development for differecnt users',
      description: 'This dynamic map was developed using Angular, Python, and Node.js. The Angular Leaflet, D3, and Leaflet-Cluster packages were used to help develop the map dynamically.',
      imgUrl: '/assets/videos/dashboard_development.mp4',
      technology: 'PHP, Laravel, Mysql, HTML, CSS, JavaScript',
      githurl: "https://github.com/Nirodhachathuri/new-apps/"
    },
    {
    id: 8,
    title: 'Emotion Recognition for Monitoring Gameplay',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl: '/assets/videos/Emotion_detection.mp4',
    technology: "Python, deep learning, machine learning, image processing, CNN",
    githurl: ""
  },
  {
    id: 9,
    title: 'Portfolio',
    description: 'This project is portfolio of mine. It is created using angular framework. It is include my details with my projects and experience. It is help to identify the employers to my skills and knowledge using this portfolio. This portfolio helps to explain the more details about my skills knowledge than my cv.',
    imgUrl: '/assets/videos/Portfolio.mp4',
    technology: 'Angular, typescript, html, css, Docker, Google Clouds',
    githurl: "https://github.com/Nirodhachathuri/Portfolio-Angular"

  },
  {
    id: 3,
    title: 'Student Registration Portal',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl: '/assets/videos/AdminPart -1.mp4',
    technology: 'Java, struts, JSP, HTML, CSS, mySQL',
    githurl: "https://github.com/Nirodhachathuri/Web-Application"
  },
  {
    id: 4,
    title: 'Sentimental Analysis',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl: '/assets/videos/sentimental.mp4',
    technology: 'Java, struts, JSP, HTML, CSS, mySQL',
    githurl: "https://github.com/Nirodhachathuri/Web-Application"
  }, {
    id: 5,
    title: 'Google Analytics',
    description: 'This study aims to utilize emotion recognition technology to comprehend the emotional response of gamers during significant events in a game. The research team trained a convolutional neural network (CNN) algorithm using the FER2013 dataset to identify player emotions.',
    imgUrl: '/assets/videos/googleAnalytics.mp4',
    technology: 'Java, struts, JSP, HTML, CSS, mySQL',
    githurl: "https://github.com/Nirodhachathuri/Web-Application"
  }, {
    id: 6,
    title: 'IELTS Web Page',
    description: 'The Blue sky study agency required web page to promote their main business. They want to published their IELTS class events through this page.It is making as a device responsive web page.',
    imgUrl: '/assets/videos/webPage.mp4',
    technology: 'Angular, Google CLouds, JSP, HTML, CSS, mySQL',
    githurl: "https://github.com/Nirodhachathuri/bluesky/"
  },
  {
    id: 7,
    title: 'Bonk Baby Page',
    description: 'The Bonk Baby web page is developed for his cryptocurrency. It is mobile responsive webpage. ',
    imgUrl: '/assets/videos/reactWeb.mp4',
    technology: 'ReactJs, Google CLouds, JSP, HTML, CSS, mySQL',
    githurl: "https://github.com/Nirodhachathuri/new-apps/"
  },
  


]


}
