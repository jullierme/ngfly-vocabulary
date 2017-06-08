import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
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

    constructor(public af: AngularFireAuth, private router: Router) {
    }

    onSubmit(formData) {
        if (formData.valid) {

            if (this.user.password !== this.user.confirmPassword) {
                this.error = 'Entered passwords do not match';
                return;
            }

            this.af.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(
                (success) => {
                    this.router.navigate(['/login'])
                }).catch(
                (err) => {
                    this.error = err;
                })
        }
    }
}
