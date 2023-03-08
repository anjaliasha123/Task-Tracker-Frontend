import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private server: BackendService, private router: Router){}
  registerForm: any = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    confirmPassword: ['',[Validators.required]],
    empid: ['',[Validators.required]],
    isAdmin: ['']
  }, {validators: this.validate()});

  register(){
    // alert(this.registerForm.get('username').value)
    let data = {
      'username': this.registerForm.get('username').value,
      'password': this.registerForm.get('password').value,
      'empid': this.registerForm.get('empid').value,
      'isAdmin': this.registerForm.get('isAdmin').value
    }
    this.server.registerMember(data).subscribe((d)=>{
      if(d){
        alert('Successfully added');
        this.router.navigate(['login']);
      }else{
        alert('Not registered!')
      }
    });
    console.log(data);
  }
  validate(): ValidatorFn{
    return (group: AbstractControl): ValidationErrors=>{
      let errors: any[] = [];
      if(group.value.password !== group.value.confirmPassword){
        errors.push({
          'matchingError': true
        });
      }
      return errors;
    }
  }

}
