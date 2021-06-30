import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {



  project = {
    projectName: '',
    type: '',
    subject: ''

    };





  constructor(private projectService :ProjectService) { }

  ngOnInit(): void {
  }





  createProject(): void {

    const data = {
      projectName: this.project.projectName,
      type: this.project.type,
      subject: this.project.subject

    };
    this.projectService.create(data)
      .subscribe(
        response => {
          
          if(response =="OK"){
            alert("Registration Successfull");
            
          }

        },
        error => {
          console.log(error);
        });
  }


}
