import { Component } from '@angular/core'
import { User } from './models/user'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  activeUser: User;

  users: User[] = [{
    id: 777, name: 'Far',
    username: 'aifarfa'
  }, {
    id: 22,
    name: 'John Doe',
    username: 'john.d'
  }]

  selectUser(user: User) {
    this.activeUser = user;
  }

  onUserCreated(e) {
    this.users = this.users.concat([e.user]);
  }
}
