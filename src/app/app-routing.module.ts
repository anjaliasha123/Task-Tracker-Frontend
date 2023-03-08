import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateTeamComponent } from './admin/create-team/create-team.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { FindUserComponent } from './admin/find-user/find-user.component';
import { TeamDeatilsComponent } from './admin/teams/team-deatils/team-deatils.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'users', component: UsersComponent},
    {path: 'teams', component: TeamsComponent},
    {path: 'create', component: CreateTeamComponent},
    {path: 'createUser', component: CreateUserComponent},
    {path: 'find-user', component: FindUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
