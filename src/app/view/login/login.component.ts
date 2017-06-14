import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {moveIn} from '../../animation/app.animations';
import {AuthService} from '../../service/auth.service';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [moveIn()]
})
export class LoginComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    error: any;

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.authService.angularFireAuth.authState
            .subscribe(auth => {
                if (auth) {
                    this.router.navigateByUrl('/home');
                }
            });
    }

    loginFacebook() {
        this.authService.loginFacebook()
            .then(success => this.signInWithPopupResult(success))
            .catch(error => this.signInWithPopupFault(error));
    }

    loginGoogle() {
        this.authService.loginGoogle()
            .then(success => this.signInWithPopupResult(success))
            .catch(error => this.signInWithPopupFault(error));
    }

    loginGithub() {
        this.authService.loginGithub()
            .then(success => this.signInWithPopupResult(success))
            .catch(error => this.signInWithPopupFault(error));
    }

    loginTwitter() {
        this.authService.loginTwitter()
            .then(success => this.signInWithPopupResult(success))
            .catch(error => this.signInWithPopupFault(error));
    }

    signInWithPopupResult(success) {
        this.authService.accessToken = success.credential.accessToken;
        this.router.navigate(['/home']);
    }

    signInWithPopupFault(error) {
        this.error = error;
    }
}
