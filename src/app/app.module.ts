import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { InventorService } from './inventory/inventor.service';
import { ModalModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './inventory/request/request.component';
import { ManageComponent } from './inventory/manage/manage.component';
import { ApproveComponent } from './inventory/approve/approve.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';



export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };


const appRoutes: Routes = [
 { path: "", component: HomeComponent },
 { path: "manage", component: ManageComponent, canActivate: [AuthGuard]},
 { path: "request", component: RequestComponent, canActivate: [AuthGuard] },
 { path: "approve", component: ApproveComponent, canActivate: [AuthGuard] },
 { path: "signin", component: SigninComponent },
 { path: "signup", component: SignupComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RequestComponent,
    ManageComponent,
    ApproveComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    ModalModule.forRoot()
  ],
  providers: [AuthService,
   AngularFireAuth,
   AngularFireDatabase,
   AuthGuard,
   InventorService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
