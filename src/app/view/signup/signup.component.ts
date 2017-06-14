import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../../animation/app.animations';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [moveIn(), fallIn()]
})
export class SignupComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    state = '';
    error: any;
    user: any = {};

    ngOnInit() {
    }

    constructor(public authService: AuthService, private router: Router) {
    }

    onSubmit(formData) {
        if (formData.valid) {

            if (this.user.password !== this.user.confirmPassword) {
                this.error = 'Entered passwords do not match';
                return;
            }

            this.authService.createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => this.router.navigate(['/login']))
                .catch((err) => this.error = err);
        }
    }
}
