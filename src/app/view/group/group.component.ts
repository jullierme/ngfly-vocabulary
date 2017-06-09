import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fallIn, moveIn, moveInLeft} from '../../router/router.animations';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css'],
    animations: [moveIn(), fallIn(), moveInLeft()]
})
export class GroupComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    items: FirebaseListObservable<any[]>;
    itemObservable: FirebaseObjectObservable<any>;

    group = '';
    state = '';

    constructor(public authService: AuthService,
                public angularFireDatabase: AngularFireDatabase,
                private router: Router) {
        this.items = angularFireDatabase.list('/item/' + this.authService.user.email.replace('@', '').replace('.', ''));
        this.itemObservable = angularFireDatabase.object('/item');
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        if (formData.valid) {
            this.items.push({name: this.group});
        }
    }
}
