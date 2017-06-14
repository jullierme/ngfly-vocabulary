import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../../animation/app.animations';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
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

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.iPassoword.nativeElement.focus();
    }

    onSubmit(formData) {
        if (formData.valid) {

            this.authService.sendPasswordResetEmail(this.user.email).then(
                () => {
                    this.error = 'We just sent you a reset link to your email';

                    setTimeout(() => {
                        this.router.navigate(['/login-email'], {queryParams: {email: this.user.email}});
                    }, 5000);
                }).catch((err) => this.error = err)
        }
    }
}
