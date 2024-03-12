import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

interface CourseTypes{
  name: string;
  img: string;
  fee: number;
  about:string;
  ratings:number;
  duration: string;
  developer:string;
  devImg: string;
  devNumber:string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit {
  public courseList:CourseTypes[]=[
    {
      name:"Angular",
      img:"angular1.jpg",
      fee:5500,
      ratings:4.5,
      duration:"20Days",
      about:"Framework for building web apps",
      developer:"Anjileena li",
      devImg: "developer-1.jpg",
      devNumber:"+91 628602620"
  },
  {
    name: "React Js",
    img: "react.jpg",
    fee: 5500, 
    duration: "45Days",
    about:"Framework for building web apps",
    developer:"Chandini",
    devImg: "developer-1.jpg",
    devNumber:"+91 9182990391",
    ratings:4.5
  },
  {
    name: "Node Js",
    img: "nodejs.webp",
    fee: 7000,
    duration: "25Days",
    about:"Framework for building web apps",
    developer:"Tanish Oad",
    devImg: "developer-1.jpg",
    devNumber:"+91 8008020398",
    ratings:4
  },
  {
    name: "JavaScript",
    img: "js.jpg",
    fee: 7000,
    duration: "35Days",
    about:"Framework for building web apps",
    developer:"Rajeswari",
    devImg: "developer-1.jpg",
    devNumber:"+91 9381469745",
    ratings:3.5
  },
  {
    name: "Java",
    img: "java.jpg",
    fee: 7000,
    duration: "60Days",
    about:"Framework for building web apps",
    developer:"Venkatesh Singh",
    devImg: "developer-1.jpg",
    devNumber:"+91 9391869747",
    ratings:5
  },
  {
    name: "Python",
    img: "python.jpg",
    fee: 7000,
    duration: "55Days",
    about:"Framework for building web apps",
    developer:"Lakshmi",
    devImg: "developer-1.jpg",
    devNumber:"+91 8143529635",
    ratings:3.5
  },
  {
    name: "Mean",
    img: "mean.jpg",
    fee: 2500, 
    duration: "25Days",
    about:"MongoDB, Express.js, Angular, Node.js, JavaScript full-stack framework.",
    developer:"Chandini",
    devImg: "developer-1.jpg",
    devNumber:"+91 9123560391",
    ratings:3
  },
  {
    name: "UI-Web Design",
    img: "ui.jpg",
    fee: 10500, 
    duration: "50Days",
    about:"User interface creation for intuitive, appealing websites.",
    developer:"Rama Rao",
    devImg: "developer-1.jpg",
    devNumber:"+91 7237237299",
    ratings:5
  },
  {
    name: "Mern",
    img: "mern.png",
    fee: 3500, 
    duration: "30Days",
    about:"MongoDB, Express.js, React, Node.js; full-stack JavaScript framework.",
    developer:"Rama Rao",
    devImg: "developer-1.jpg",
    devNumber:"+91 8340560391",
    ratings:4.5
  },
  {
    name: "Mern",
    img: "mern.png",
    fee: 3500, 
    duration: "30Days",
    about:"MongoDB, Express.js, React, Node.js; full-stack JavaScript framework.",
    developer:"Rama Rao",
    devImg: "developer-1.jpg",
    devNumber:"+91 8340560391",
    ratings:3
  },
];



  constructor(public cartservice:CartService) { }

  ngOnInit(): void {
  }

  addCart(course:any){
    console.log(course);
    this.cartservice.addCart(course);
  }

  // isInCart(course: any): boolean {
  //   return this.cartservice.isInCart(course);
  // }


}
