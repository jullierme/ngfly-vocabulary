import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginEmailComponent} from './login-email.component';

describe('LoginEmailComponent', () => {
    let component: LoginEmailComponent;
    let fixture: ComponentFixture<LoginEmailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginEmailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
