import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule , FormGroup} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { FemenuComponent } from './components/femenu/femenu.component';
import { BemenuComponent } from './components/bemenu/bemenu.component';
import { MenuloginComponent } from './components/menulogin/menulogin.component';
import { MenudataComponent } from './components/menudata/menudata.component';

import {AuthGuard} from './components/guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterializeModule } from "angular2-materialize";

//materialize imports
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdddataService } from './services/adddata.service';
import { HttpHeaders,HttpClient, HttpClientModule } from 'node_modules/@angular/common/http';
import { GetdataService } from './services/getdata.service';

const appRoutes: Routes = [
//, canActivate:[AuthGuard]
  { path: 'bemenu', component: BemenuComponent,
    children: [
       { path: 'login', component: MenuloginComponent},
       { path:'menudata', component: MenudataComponent, canActivate:[AuthGuard]},
       { path: '**', redirectTo: 'login' }
    ]
  },
  { path: 'femenu', component: FemenuComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    FemenuComponent,
    BemenuComponent,
    MenuloginComponent,
    MenudataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [AuthenticationService,AdddataService,HttpClient,GetdataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
