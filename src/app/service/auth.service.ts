import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    user: firebase.User;
    uid: string;
    accessToken: string;

    constructor(public angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.authState
            .subscribe(auth => {
                this.user = auth;
                this.uid = this.user.uid;
            });
    }

    loginFacebook(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    loginGoogle(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    loginGithub(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.GithubAuthProvider());
    }

    loginTwitter(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }

    signInWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithEmailAndPassword(email, password);
    }

    signOut(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signOut();
    }

    sendPasswordResetEmail(email: string): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .sendPasswordResetEmail(email);
    }

    createUserWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .createUserWithEmailAndPassword(email, password);
    }

    linkWithFacebook(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(success => this.linkWithCredential(success['credential']))
            .catch(error => this.linkWithCredential(error['credential']));
    }

    linkWithGoole(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(success => this.linkWithCredential(success['credential']))
            .catch(error => this.linkWithCredential(error['credential']));
    }

    linkWithGithub(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then(success => this.linkWithCredential(success['credential']))
            .catch(error => this.linkWithCredential(error['credential']));
    }

    linkWithTwitter(): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithPopup(new firebase.auth.TwitterAuthProvider())
            .then(success => this.linkWithCredential(success['credential']))
            .catch(error => this.linkWithCredential(error['credential']));
    }

    linkWithEmailAndPassword(email: string, password: string): firebase.Promise<any> {
        return this.angularFireAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(success => this.linkWithCredential(success['credential']))
            .catch(error => this.linkWithCredential(error['credential']));
    }

    linkWithCredential(credential) {
        if (credential) {
            this.angularFireAuth.auth.currentUser
                .linkWithCredential(credential);
        }
    }
}
