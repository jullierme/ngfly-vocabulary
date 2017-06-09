import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {moveIn} from '../../router/router.animations';
import {AuthService} from '../../service/auth.service';

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

    loginFb() {
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

    signInWithPopupResult(success) {
        this.router.navigate(['/home']);
    }

    signInWithPopupFault(error) {
        /*const currentUser = this.afAuth.auth.currentUser;
         const credential = error['credential'];

         this.afAuth.auth.currentUser.linkWithCredential(credential)
         .then(function (user) {
         console.log('Account linking success', user);
         }, function (err) {
         console.log('Account linking error', err);
         });
         */
        this.error = error;
    }
}
