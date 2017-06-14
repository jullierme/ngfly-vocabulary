import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn, moveInLeft} from '../../animation/app.animations';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-link-credential',
    templateUrl: './link-credential.component.html',
    styleUrls: ['./link-credential.component.scss'],
    animations: [moveIn(), fallIn(), moveInLeft()],
    encapsulation: ViewEncapsulation.None
})
export class LinkCredentialComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    auth: any;
    state = '';

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.authService.angularFireAuth.authState
            .subscribe(auth => {
                this.auth = auth;
            });
    }

    linkFacebook() {
        this.authService.linkWithFacebook()
            .then(success => this.linkResult(success))
            .catch(error => this.linkFault(error));
    }

    linkGoogle() {
        this.authService.linkWithGoole()
            .then(success => this.linkResult(success))
            .catch(error => this.linkFault(error));
    }

    linkTwitter() {
        this.authService.linkWithTwitter()
            .then(success => this.linkResult(success))
            .catch(error => this.linkFault(error));
    }

    linkGithub() {
        this.authService.linkWithGithub()
            .then(success => this.linkResult(success))
            .catch(error => this.linkFault(error));
    }

    linkResult(success) {
        alert('link realizado com sucesso');
    }

    linkFault(error) {
        alert('Erro ao linkar');
    }
}
