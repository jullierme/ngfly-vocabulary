import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn, moveInLeft} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css'],
    animations: [moveIn(), fallIn(), moveInLeft()]
})
export class MembersComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    name = '';
    email = '';
    state = '';

    constructor(public afAuth: AngularFireAuth, private router: Router) {
    }

    setNameAndEmail(auth) {
        if (!auth.email) {
            const authUser = Object.keys(window.localStorage).filter(item => {
                return item.startsWith('firebase:authUser')
            });
            const storage = JSON.parse(localStorage.getItem(authUser[0]));
            const providerData = storage['providerData'][0];
            this.email = providerData['email'];
        } else {
            this.email = auth.email;
        }
        this.name = auth.displayName;
    }

    logout() {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.setNameAndEmail(auth);
            }
        });
    }
}
