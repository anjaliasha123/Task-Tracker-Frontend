import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {
  users: any;
  tasks: any = [];
  userViewStatus: boolean = false;
  userName: string = '';
  eat: boolean = false;
  vt: boolean = false;
  us: boolean = false;
  constructor(private server: BackendService, private fb: FormBuilder){}
  addTaskForm: any = this.fb.group({
    taskName : [''],
    status: ['']
  });
  updateStatusForm: any = this.fb.group({
    taskName : [''],
    status: ['']
  })
  searchMember(){
    this.eat = false;
    this.vt = false;
    this.tasks = [];
    this.users = undefined;
    this.server.getASpecificMember(this.userName).subscribe((response: any)=>{
      if(response !== null){
        this.users = response;
        this.tasks = response.tasks;
        console.log(this.users)
      }

    });
  }
  enableAddTasks(){
    this.eat = true;
    this.vt = false;
  }
  addTasks(){
    
    let obj = {
      taskName: this.addTaskForm.get('taskName').value,
      completed: this.addTaskForm.get('status').value,
      username: this.userName
    };
    this.server.addMemberTasks(obj).subscribe((response: any)=>{
      alert(response);
      this.eat = false;
    });
    this.tasks.push(obj);
  }
  enableViewTasks(){
    this.vt = true;
  }
  onDelete(){

    this.server.deleteAMember(this.userName).subscribe((response: any)=>{
      alert(response);
      this.users = undefined;
    })
  }
  onUpdate(){
    this.us = true;
    this.eat = false;
    this.vt = false;
  }
  updateStatus(){
    let data = {
      empID: this.users.empId,
      taskName: this.updateStatusForm.get('taskName').value,
      completed: this.updateStatusForm.get('status').value
    };
    this.server.editTaskStatus(data).subscribe((response)=>{
      alert(response);
      this.us = false;
    })
  }
}
