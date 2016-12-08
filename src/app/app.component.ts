import { Component } from '@angular/core'
import { User } from './models/user'

@Component({
    selector: 'my-app',
    template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="nvabar-header">
          <a class="navbar-brand" href="/">My App</a>
        </div>
      </nav>
    </header>
    <main>
      <div class="row">

        <div class="col-sm-4">
          <div *ngIf="users">
            <ul class="list-group users-list">
              <li class="list-group-item"
                *ngFor="let user of users"
                (click)="selectUser(user)"
                [class.active]="user === activeUser">
                {{user.name}} ({{user.username}})</li>
            </ul>
          </div>
        </div>

        <div class="col-sm-8">
          <div class="jumbotron" *ngIf="activeUser">
            <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>
            <input class="form-control" [(ngModel)]="activeUser.name" />
          </div>
          <div class="jumbotron" *ngIf="!activeUser">
            <h2>Choose a user.</h2>
            <span class="glyphicon glyphicon-hand-left"></span>
          </div>
        </div>

      </div>
    </main>
    <footer class="text-center">
      Copy right 2016
    </footer>
  `,
    styles: [`
    .jumbotron .glyphicon {
      font-size: 80px;
    }
    .users-list > .list-group-item {
      cursor: pointer;
    }
  `]
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
    }, {
        id: 24,
        name: 'Unknown',
        username: 'unknown'
    }]

    selectUser(user: User) {
        this.activeUser = user;
    }
}
