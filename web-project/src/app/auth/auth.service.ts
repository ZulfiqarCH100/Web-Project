import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private user: firebase.User | null;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = null;
    afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider).then(() => {
      this.router.navigateByUrl('');
    });
  }
  signInWithFacebook() {
    const fbAuthProvider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.signInWithPopup(fbAuthProvider).then(() => {
      this.router.navigateByUrl('');
    });
  }
  signInWithMicrosoft() {
    const msAuthProvider = new firebase.auth.OAuthProvider('microsoft.com');
    this.afAuth.signInWithPopup(msAuthProvider).then(() => {
      this.router.navigateByUrl('');
    });
  }
  signOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }
  getAuthState() {
    return this.afAuth.authState;
  }

  getAfAuth() {
    return this.afAuth;
  }

  getCurrentUser() {
    return this.user;
  }
}
