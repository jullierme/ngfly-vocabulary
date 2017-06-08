import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {moveIn} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()]
})
export class LoginComponent implements OnInit {
  @HostBinding('@moveIn') get moveIn() {
    return '';
  }

  error: any;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFb() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGithub() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(
      (success) => {
        this.router.navigate(['/members']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }
}
