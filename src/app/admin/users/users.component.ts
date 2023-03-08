import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: any[] | undefined;
  constructor(private server:BackendService){}
  ngOnInit(): void {
    this.server.getAllUsers().subscribe((data: any)=>{
      this.users = data;
    });
  }
  
}
