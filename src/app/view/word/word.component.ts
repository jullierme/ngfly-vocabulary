import {Component, HostBinding, OnInit} from '@angular/core';
import {fallIn, moveIn, moveInLeft} from '../../router/router.animations';
import {FirebasedbService} from '../../service/firebasedb.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss'],
    animations: [moveIn(), fallIn(), moveInLeft()]
})
export class WordComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    state = '';

    wordList: FirebaseListObservable<any[]>;
    phrase: FirebaseListObservable<any[]>;

    constructor(public firebasedbService: FirebasedbService) {
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        if (formData.valid) {
            this.wordList.push(formData.value);
        }
    }

    setWordList($key) {
        this.wordList = this.firebasedbService.getWord($key);
    }

    addFhrase(pfrase) {

    }
}
