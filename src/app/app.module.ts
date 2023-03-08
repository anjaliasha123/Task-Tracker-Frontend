import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './home/tasks/tasks.component';
import { MembersComponent } from './home/members/members.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './common/footer/footer.component';
import { MemberHeaderComponent } from './common/member-header/member-header.component';
import { AdminHeaderComponent } from './common/admin-header/admin-header.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchDirective } from './directives/match.directive';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { CreateTeamComponent } from './admin/create-team/create-team.component';
import { CardComponent } from './admin/users/card/card.component';
import { TeamDeatilsComponent } from './admin/teams/team-deatils/team-deatils.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { FindUserComponent } from './admin/find-user/find-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    MembersComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    MemberHeaderComponent,
    AdminHeaderComponent,
    HeaderComponent,
    MatchDirective,
    AdminComponent,
    UsersComponent,
    TeamsComponent,
    CreateTeamComponent,
    CardComponent,
    TeamDeatilsComponent,
    CreateUserComponent,
    FindUserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
