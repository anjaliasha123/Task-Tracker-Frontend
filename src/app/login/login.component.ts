import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder, private server: BackendService, private router: Router){}
  loginForm: any = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  login(){
    let loginData = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };
    this.server.loginMember(loginData).subscribe((response)=>{
      if(response === null){
        console.log('Error logging');
        alert('Logging error');
      }else{
        // localStorage.setItem('localUser', response.username);
        sessionStorage.setItem('localUser', response.username);
        if(response.admin){
          this.router.navigate(['admin']);
        }else{
          this.router.navigate(['home']);
        }
      }
    })
  }
}
