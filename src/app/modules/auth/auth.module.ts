import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    CarouselModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
     AuthRoutingModule.components, 
     LoginComponent,
     ForgotPasswordComponent,
     RegisterComponent,
     ],
  providers: []
})
export class AuthModule { }