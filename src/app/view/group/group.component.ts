import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {fallIn, moveIn, moveInLeft} from '../../animation/app.animations';
import {FirebasedbService} from '../../service/firebasedb.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    animations: [moveIn(), fallIn(), moveInLeft()]
})
export class GroupComponent implements OnInit, AfterViewInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    @ViewChild('iGroup') iGroup: ElementRef;

    state = '';
    entity: any = {};

    constructor(public firebasedbService: FirebasedbService) {
    }

    ngOnInit() {
        this.entity = {};
    }

    ngAfterViewInit() {
        this.iGroup.nativeElement.focus();
    }

    onSubmit(formData: NgForm) {
        if (formData.valid) {
            if (!this.entity.$key) {
                this.firebasedbService.dictionary.push(this.entity);
            } else {
                this.firebasedbService.dictionary.update(this.entity.$key, this.entity);
            }
            this.entity = {};

            this.iGroup.nativeElement.focus();
        }
    }

    remove(item) {
        this.firebasedbService.dictionary.remove(item);

        this.iGroup.nativeElement.focus();
    }

    edit(item) {
        this.entity = item;

        this.iGroup.nativeElement.focus();
    }
}
