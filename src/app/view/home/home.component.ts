import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn, moveInLeft} from '../../animation/app.animations';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [moveIn(), fallIn(), moveInLeft()],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    name = '';
    email = '';
    state = '';

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.authService.angularFireAuth.authState
            .subscribe(auth => {
                this.setNameAndEmail(auth);
            });
    }

    setNameAndEmail(user) {
        if (!user) {
            return;
        }

        const authUser = Object.keys(window.localStorage).filter(item => {
            return item.startsWith('firebase:authUser')
        });
        const storage = JSON.parse(localStorage.getItem(authUser[0]));
        const providerData = storage['providerData'][0];

        this.email = providerData['email'];
        this.name = providerData['displayName'];
    }

    logout() {
        this.authService.signOut()
            .then(() => this.router.navigateByUrl('/login'));
    }

    newWord() {
        this.router.navigateByUrl('/word');
    }

    newGroup() {
        this.router.navigateByUrl('/group');
    }
}
