import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {moveIn, fallIn, moveInLeft} from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()]
})
export class MembersComponent implements OnInit {
  @HostBinding('@moveIn') get moveIn() {
    return '';
  }

  name = '';
  email = '';
  state = '';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.displayName;
        this.email = auth.email;
      }
    });
  }
}
