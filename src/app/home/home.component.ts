import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  tasks: any = [];
  teams: any = [];
  constructor(private server:BackendService){}
  ngOnInit(): void {
    let username: any = sessionStorage.getItem('localUser');
    // console.log('user: ',username)
    this.server.getMember(username).subscribe((data: any)=>{
      if(data){
        this.tasks = data.tasks;
        this.teams = data.teams;
      }
      
    });
  }
}
