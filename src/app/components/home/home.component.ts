import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {


  testimonials = [
    { name: 'Jonathan M.', 
    role: 'Frontend Developer', 
    img:'developer-1.jpg',
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, ex ad! Eveniet tempore, totam eaque pariatur non tempora enim exercit sit " 
  },
    { name: 'Samantha L.', 
    role: 'UI/UX Designer', 
    img:'developer-1.jpg',
    comment: "ALorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, ex ad! Eveniet tempore, totam eaque pariatur non tempora enim exercit sit " 
  },
    { name: 'Michael P.', 
    role: 'Full-Stack Developer', 
    img:'developer-1.jpg',
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, ex ad! Eveniet tempore, totam eaque pariatur non tempora enim exercit sit " 
  },
    { name: 'Sarah K.', 
    role: 'Beginner Web ', 
    img:'developer-1.jpg',
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, ex ad! Eveniet tempore, totam eaque pariatur non tempora enim exercit sit " 
  }
  ];

constructor() { }

  ngOnInit(): void {
  }

}