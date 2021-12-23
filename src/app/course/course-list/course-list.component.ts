import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  filteredCouses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this._courses = this.courseService.retrieveAll();
    this.filteredCouses = this._courses;
  }

  set filter(value: string){
    this._filterBy = value;

    //Filtra por nome
    this.filteredCouses = this._courses.filter((Course: Course) => Course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    //filtra por codigo
    this.filteredCouses = this._courses.filter((Course: Course) => Course.code.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
