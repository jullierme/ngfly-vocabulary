import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn, moveInLeft} from '../../router/router.animations';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [moveIn(), fallIn(), moveInLeft()]
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
        this.setNameAndEmail(this.authService.user);
    }

    setNameAndEmail(user) {
        if (!user.email) {
            const authUser = Object.keys(window.localStorage).filter(item => {
                return item.startsWith('firebase:authUser')
            });
            const storage = JSON.parse(localStorage.getItem(authUser[0]));
            const providerData = storage['providerData'][0];
            this.email = providerData['email'];
        } else {
            this.email = user.email;
        }
        this.name = user.displayName;
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
