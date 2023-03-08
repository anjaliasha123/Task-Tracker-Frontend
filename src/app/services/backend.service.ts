import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // username='Anja';
  tasks: any;
  constructor(private http: HttpClient) { }
  getMember(username: string){
    return this.http.get('http://localhost:3000/members/'+username);
  }
  getTeams(){
    return this.http.get('http://localhost:3000/teams');
  }
  registerMember(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/members', data);
  }
  loginMember(data: any): Observable<any>{
    console.log('login member function');
    return this.http.post('http://localhost:3000/members/login', data);
  }
  getAllUsers(){
    return this.http.get('http://localhost:3000/members');
  }
  getAllTeams(){
    return this.http.get('http://localhost:3000/teams');
  }
  registerTeam(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/teams', data);
  }
  createUser(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/members', data)
  }
  addMemberToTeam(data: any): Observable<any>{
    console.log(data.empId, data.teamName)
    return this.http.patch('http://localhost:3000/teams/'+data.empId+'/'+data.teamName,{});
  }
  getASpecificMember(username: any){
    return this.http.get('http://localhost:3000/members/'+username);
  }
  addMemberTasks(data: any): Observable<any>{
    return this.http.put('http://localhost:3000/members/'+data.username, data);
  }
  deleteAMember(username: any): Observable<any>{
    return this.http.delete('http://localhost:3000/members/'+username);
  }
  editTaskStatus(data: any): Observable<any>{
    return this.http.patch('http://localhost:3000/members/'+data.empID+"/"+data.taskName, data);
  }
}
