import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit{
  teams: any[] | undefined;
  members:  number[] = [];
  name: string= '';
  viewTeamStatus: boolean = false;
  addMemberStatus: boolean = false;
  addMemberEmpId: number = 0;
  removeMemberStatus: boolean = false;
  addMemberTeamName: string = '';
  constructor(private server: BackendService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.server.getAllTeams().subscribe((data: any)=>{
      this.teams = data;
    })
  }

  onClick(event: any){
    this.name = event.teamName;
    this.members = event.members;
    this.viewTeamStatus = true;
    this.addMemberStatus = false;
    this.removeMemberStatus = false;

  }
  clearMembers(event: any){
    this.members = [];
  }
  onAdd(event: any){
    this.addMemberStatus = true;
    this.viewTeamStatus = false;
    this.removeMemberStatus = false;
    this.addMemberTeamName = event.teamName;
    
  }
  onRemove(event: any){
    this.addMemberStatus = false;
    this.viewTeamStatus = false;
    this.removeMemberStatus = true;
  }
  addMember(){
    this.members.push(this.addMemberEmpId)
    this.server.addMemberToTeam({teamName: this.addMemberTeamName, empId: this.addMemberEmpId})
    .subscribe((response)=>{
      alert(response);
      this.addMemberEmpId = 0
    });
  }
}
