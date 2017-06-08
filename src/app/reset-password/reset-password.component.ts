import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css'],
    animations: [moveIn(), fallIn()]
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    @ViewChild('iPassoword') iPassoword: ElementRef;

    state = '';
    error: any;
    user: any = {};

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.iPassoword.nativeElement.focus();
    }

    constructor(public af: AngularFireAuth, private router: Router) {
    }

    onSubmit(formData) {
        if (formData.valid) {

            this.af.auth.sendPasswordResetEmail(this.user.email).then(
                (success) => {
                    this.error = 'We just sent you a reset link to your email';

                    setTimeout(() => {
                        this.router.navigate(['/login-email'], {queryParams: {email: this.user.email}});
                    }, 5000);

                }).catch(
                (err) => {
                    this.error = err;
                })
        }
    }
}
