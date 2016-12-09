import { Component, Output, EventEmitter } from '@angular/core'
import { User } from '../models/user'

@Component({
  selector: 'user-form',
  styles: [`
    form: {
      padding 10px;
    }

  `],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter()

  active: boolean = true;
  user: User = new User();

  onSubmit(e) {
    this.userCreated.emit({
      user: this.user
    })
    this.user = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}