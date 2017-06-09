import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {LoginComponent} from './view/login/login.component';
import {LoginEmailComponent} from './view/login-email/login-email.component';
import {SignupComponent} from './view/signup/signup.component';
import {HomeComponent} from './view/home/home.component';

import {AuthGuard} from './guard/auth.guard';
import {routes} from './router/app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {GroupComponent} from './view/group/group.component';
import {ResetPasswordComponent} from './view/reset-password/reset-password.component';
import {AuthService} from './service/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginEmailComponent,
        SignupComponent,
        HomeComponent,
        GroupComponent,
        ResetPasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        routes
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
