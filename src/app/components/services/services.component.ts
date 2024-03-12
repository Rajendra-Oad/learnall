import { Component, OnInit } from '@angular/core';

interface coursesType {
  name: string,
  fee: number,
  img: string,
  content: any,
  duration: string,
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent implements OnInit {


  //Courses in table Details change in dynamically
  public courses: coursesType[] = [
    {
      name: "HTML",
      img: "html.png",
      fee: 5500, duration: "20Days",
      content: ['Language for creating web pages.',
       'Defines structure and content.'] 
    },
    {
      name: "CSS",
      img: "css.png",
      fee: 9000,
      duration: "28Days",
      content: ['Styles appearance of web pages.',
       'Controls layout, colors, and fonts.']
    },
    {
      name: "JavaSript",
      img: "javascript.png",
      fee: 12000,
      duration: "45Days",
      content: ['Adds interactivity to web pages.',
       'Enables dynamic content and user interaction.']
    },
    {
      name: "Angular",
      img: "angularlogo.png",
      fee: 15000,
      duration: "20Days",
      content: ['Framework for building web apps.',
       'Provides tools for dynamic and responsive apps.']
    },
    {
      name: "Python",
      img: "pythonlogo.png",
      fee: 25000,
      duration: "60Days",
      content: ['Powerful and easy-to-learn language.',
       'Used for web development, data analysis, and AI.']
    },
    {
      name: "Java",
      img: "javalogo.png",
      fee: 35000,
      duration: "60Days",
      content: ['Versatile language for various applications.',
       'Known for portability and performance.']
    },
    {
      name: "C++",
      img: "c++.png",
      fee: 9000,
      duration: "60Days",
      content: ['Extension of C with added features.',
       'Used for system software, games, and applications.']
    },
    {
      name: "SQL",
      img: "sql.png",
      fee: 12000,
      duration: "75Days",
      content: ['Manages and manipulates databases.',
       'Performs queries, inserts, updates, and deletes.']
    },
    {
      name: "C#",
      img: "c1.png",
      fee: 20000,
      duration: "45Days",
      content: ['Modern object-oriented language by Microsoft.',
       'For Windows apps, web apps, and games with .NET.']
    },
    {
      name: "C",
      img: "c.png",
      fee: 30000,
      duration: "60Days",
      content: ['General-purpose programming language.',
       'Efficient and flexible.']
    }

  ];

  constructor() {

  }

  ngOnInit(): void {

  }


}
