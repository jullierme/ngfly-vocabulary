import {Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {fallIn, moveIn} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css'],
    animations: [moveIn(), fallIn()]
})
export class EmailComponent implements OnInit, OnDestroy {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    @ViewChild('iPassoword') iPassoword: ElementRef;

    state = '';
    error: any;
    user: any = {};
    private subscribeParams: any;
    private subscribeHome: any;

    constructor(public afAuth: AngularFireAuth, private router: Router,
                private activatedRoute: ActivatedRoute,
                private elRef: ElementRef) {
    }

    ngOnInit() {
        this.setEmailDefault();

        this.subscribeHome = this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/members');
            }
        });
    }

    ngOnDestroy() {
        this.subscribeParams.unsubscribe();
        this.subscribeHome.unsubscribe();
    }

    setEmailDefault() {
        this.subscribeParams = this.activatedRoute.queryParams.subscribe(params => {
            if (params['email']) {
                this.user.email = params['email'];
                this.iPassoword.nativeElement.focus();
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
