import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css'],
    animations: [moveIn(), fallIn()]
})
export class EmailComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    state = '';
    error: any;
    user: any = {};

    ngOnInit() {
    }

    constructor(public afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/members');
            }
        });
    }


    onSubmit(formData) {
        if (formData.valid) {

            this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(
                (success) => {
                    this.router.navigate(['/members']);
                }).catch(
                (err) => {
                    this.error = err;
                })
        }
    }
}
