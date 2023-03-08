import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent {
  membersList: number[] = [];
  constructor(private fb: FormBuilder, private server:BackendService){}
  createTeam: any = this.fb.group({
    teamName: ['', [Validators.required]],
    empid:[0]
  });
  registerTeam(){
    let teaamData = {
      teamName : this.createTeam.get('teamName').value,
      members: this.membersList
    };
    this.server.registerTeam(teaamData).subscribe((response: any)=>{
       alert(response)
       this.createTeam.reset();
       this.membersList = [];
    });
  }
  addMember(){
    this.membersList.push(this.createTeam.get('empid').value);
  }
}
