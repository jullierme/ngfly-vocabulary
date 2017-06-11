import {Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {fallIn, moveIn} from '../../router/router.animations';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-email',
    templateUrl: './login-email.component.html',
    styleUrls: ['./login-email.component.scss'],
    animations: [moveIn(), fallIn()]
})
export class LoginEmailComponent implements OnInit, OnDestroy {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    @ViewChild('iPassoword') iPassoword: ElementRef;

    state = '';
    error: any;
    user: any = {};
    private subscribeParams: any;
    private subscribeHome: any;

    constructor(public authService: AuthService, private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.setEmailDefault();

        this.subscribeHome = this.authService.angularFireAuth.authState
            .subscribe(auth => {
                if (auth) {
                    this.router.navigateByUrl('/home');
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
            this.authService.signInWithEmailAndPassword(this.user.email, this.user.password)
                .then((success) => this.router.navigate(['/home']))
                .catch((err) => this.error = err)
        }
    }
}
