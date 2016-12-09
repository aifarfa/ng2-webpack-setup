import { Component, Output, EventEmitter } from '@angular/core'
import { User } from '../models/user'

@Component({
  selector: 'user-form',
  styles: [`
    form: {
      padding 10px;
    }

  `],
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <input type="text" class="form-control" name="name" placeholder="name" required [(ngModel)]="user.name" #name="ngModel" />
        <span class="help-block" *ngIf="name.invalid && name.touched">name is required</span>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" name="username" placeholder="username" required [(ngModel)]="user.username" #username="ngModel" />
        <span class="help-block" *ngIf="username.invalid && username.touched">username is required</span>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-block btn-lg btn-primary" [disabled]="form.invalid">Create User</button>
      </div>
    </form>
  `
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter()

  user: User = new User();

  onSubmit(e) {
    this.userCreated.emit({
       user: this.user
    })
    // TODO: clear form
    this.user = new User()
  }
}