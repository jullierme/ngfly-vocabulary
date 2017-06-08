import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import {AuthGuard} from './auth.guard';
import {SignupComponent} from './signup/signup.component';
import {EmailComponent} from './email/email.component';
import {GroupComponent} from './group/group.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

export const router: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login-email', component: EmailComponent},
    {path: 'members', component: MembersComponent, canActivate: [AuthGuard]},
    {path: 'group', component: GroupComponent, canActivate: [AuthGuard]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
