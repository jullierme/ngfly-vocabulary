import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../view/login/login.component';
import {HomeComponent} from '../view/home/home.component';
import {AuthGuard} from '../guard/auth.guard';
import {SignupComponent} from '../view/signup/signup.component';
import {LoginEmailComponent} from '../view/login-email/login-email.component';
import {GroupComponent} from '../view/group/group.component';
import {ResetPasswordComponent} from '../view/reset-password/reset-password.component';
import {WordComponent} from '../view/word/word.component';
import {LinkCredentialComponent} from '../view/link-credential/link-credential.component';

export const router: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login-email', component: LoginEmailComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'group', component: GroupComponent, canActivate: [AuthGuard]},
    {path: 'word', component: WordComponent, canActivate: [AuthGuard]},
    {path: 'link-credential', component: LinkCredentialComponent, canActivate: [AuthGuard]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
