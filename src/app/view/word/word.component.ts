import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {fallIn, moveIn, moveInLeft} from '../../animation/app.animations';
import {FirebasedbService} from '../../service/firebasedb.service';
import {FirebaseListObservable} from 'angularfire2/database';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss'],
    animations: [moveIn(), fallIn(), moveInLeft()]
})
export class WordComponent implements OnInit, AfterViewInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    @ViewChild('iGroup') iGroup: ElementRef;
    @ViewChild('iWord') iWord: ElementRef;

    entity: any = {};
    state = '';

    wordList: FirebaseListObservable<any[]>;

    constructor(public firebasedbService: FirebasedbService) {
    }

    ngOnInit() {
        this.entity = {};
    }

    ngAfterViewInit() {
        this.iGroup.nativeElement.focus();
    }

    onSubmit(formData) {
        if (formData.valid) {
            if (!this.entity.$key) {
                this.wordList.push(this.entity);
            } else {
                this.wordList.update(this.entity.$key, this.entity);
            }
            this.newWord();
        }
    }

    setWordList($key) {
        this.wordList = this.firebasedbService.getWord($key);
    }

    remove(item) {
        this.wordList.remove(item);

        this.iWord.nativeElement.focus();
    }

    edit(item) {
        this.entity = item;

        this.iWord.nativeElement.focus();
    }

    newWord() {
        this.entity = {
            dictionaryId: this.entity.dictionaryId
        };

        this.iWord.nativeElement.focus();
    }
}
