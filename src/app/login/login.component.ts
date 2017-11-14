import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginDialogComponent {

  constructor(
    public authService: AuthService,
    public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

  loginFacebook() {
    this.authService.facebookLogin();
  }

  logout() {
    this.authService.signOut();
  }

}
