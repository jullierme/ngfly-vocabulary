import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthService} from './auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebasedbService {
    public dictionary: FirebaseListObservable<any[]>;

    constructor(private authService: AuthService,
                public angularFireDatabase: AngularFireDatabase) {
        this.authService.angularFireAuth.authState
            .subscribe(() => {
                this.dictionary = this.angularFireDatabase.list('/dictionary/' +
                    this.authService.uid + '/group');
            });
    }

    getWord($key): FirebaseListObservable<any[]> {
        return this.angularFireDatabase.list('/dictionary/' +
            this.authService.uid + '/group/' + $key + '/word');
    }

    getPhrase($keyGroup, $keyWord): FirebaseListObservable<any[]> {
        return this.angularFireDatabase.list('/dictionary/' +
            this.authService.uid + '/group/' + $keyGroup + '/word/' + $keyWord + '/phrase');
    }
}
