import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fakeBackendProvider } from './helpers/fake-backend';

import { MockBackend } from '@angular/http/testing';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule,BaseRequestOptions,Http } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    NoAccessComponent,
    NotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'login', component: LoginComponent },
      { path: 'no-acess', component: NoAccessComponent },
    ])
  ],
  providers: [
    AuthService,
    OrderService,

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
