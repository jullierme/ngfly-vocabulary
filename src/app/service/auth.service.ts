import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    user: firebase.User;

    constructor(public angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.authState.subscribe(auth => {
            this.user = auth;
        });
    }

    loginFacebook(): firebase.Promise<any> {
        return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    loginGoogle(): firebase.Promise<any> {
        return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    loginGithub(): firebase.Promise<any> {
        return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    }

    signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signOut(): firebase.Promise<any> {
        return this.angularFireAuth.auth.signOut();
    }

    sendPasswordResetEmail(email: string): firebase.Promise<any> {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }

    createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
}
