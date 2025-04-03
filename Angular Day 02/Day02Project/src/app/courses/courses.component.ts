import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @Input() paidCourse:number = 0;
  @Input() freeCourse:number = 0;
  @Input() totalCourse:number = 0;

  courses = [
    {
      id: 101, name: "Python", author: "Yogesh", duration: 48, price: 0.00, type: 'Free',
      rating: 4.5, image: '/assets/python.jfif', description: "In this course you will learn basic of python"
    },
    {
      id: 102, name: "Java", author: "Bharat", duration: 45, price: 250.00, type: 'Paid',
      rating: 4.5, image: '/assets/java.png', description: "In this course you will learn basic of core java"
    },
    {
      id: 103, name: "Angular", author: "Rishi", duration: 50, price: 500.00, type: 'Paid',
      rating: 4.5, image: '/assets/angular.png', description: "In this course you will learn basic of angular"
    },
    {
      id: 104, name: "React", author: "Mahesh", duration: 30, price: 0.00, type: 'Free',
      rating: 4.5, image: '/assets/react.jfif', description: "In this course you will learn basic of react"
    },
    {
      id: 105, name: "DotNet", author: "Ram", duration: 40, price: 40.00, type: 'Paid',
      rating: 4.5, image: '/assets/dotnet.png', description: "In this course you will learn basic of dotnet C#"
    },
  ];

  filterCourses:any[]=[...this.courses];
  getType(data:any)
  {
    //alert(type)
    if(data == "Paid")
    {
      // alert(data)
      this.filterCourses = this.courses.filter((course)=> course.type == data)
      //console.log(this.filterCourses  )
    }

    else if(data == "Free")
    {
      //console.log(data);
      // alert(data)
      this.filterCourses = this.courses.filter((course)=> course.type == data)
    }

    else{
      this.filterCourses= this.courses
    }
  }

  getText(text:string)
  {
    
    this.filterCourses = this.filterCourses.filter((course)=> course.name.toLowerCase().includes(text.toLowerCase()))
  }

}
