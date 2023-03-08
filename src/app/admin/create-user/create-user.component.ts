import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private fb: FormBuilder, private server: BackendService){}
  createUser: any = this.fb.group({
    username: ['', [Validators.required]],
    empid: ['', [Validators.required]],
    isAdmin: ['']
  })
  registerUser(){
    let memberData = {
      username: this.createUser.get('username').value,
      empid: this.createUser.get('empid').value,
      isAdmin: this.createUser.get('isAdmin').value,
      password: 'admin'
    }
    this.server.createUser(memberData).subscribe((response)=>{
      alert(response);
    });
  }
}
