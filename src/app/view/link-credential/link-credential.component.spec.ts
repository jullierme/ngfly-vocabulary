import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LinkCredentialComponent} from './link-credential.component';

describe('LinkCredentialComponent', () => {
    let component: LinkCredentialComponent;
    let fixture: ComponentFixture<LinkCredentialComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LinkCredentialComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LinkCredentialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
