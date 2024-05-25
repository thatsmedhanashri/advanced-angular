import { Component } from '@angular/core';

export interface person{
  name: string,
  employeeId: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  child1Data = 'Child1'
  personData: person = {
    name: '',
    employeeId: -1
  }
  course_name : string = ''

  getData(data: any){
    this.personData = data
    console.log("person data -> ", this.personData)
  }
  getCourseName(data:any){
    this.course_name = data
  }
}
