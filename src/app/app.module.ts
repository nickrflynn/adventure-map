import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

// Angular Material
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';

import { environment } from '../environments/environment';
import { LoginDialogComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, "adventure-map"),
    AngularFireAuthModule,
    MatDialogModule
  ],
  providers: [
    AuthService,
    AngularFireDatabase
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class AppModule { }
