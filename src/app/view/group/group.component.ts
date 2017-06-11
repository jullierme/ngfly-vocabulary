import {Component, HostBinding, OnInit} from '@angular/core';
import {fallIn, moveIn, moveInLeft} from '../../router/router.animations';
import {FirebasedbService} from '../../service/firebasedb.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    animations: [moveIn(), fallIn(), moveInLeft()]
})
export class GroupComponent implements OnInit {
    @HostBinding('@moveIn') get moveIn() {
        return '';
    }

    state = '';

    constructor(public firebasedbService: FirebasedbService) {
    }

    ngOnInit() {
    }

    onSubmit(formData: NgForm) {
        if (formData.valid) {
            this.firebasedbService.dictionary.push(formData.value);
        }
    }
}
