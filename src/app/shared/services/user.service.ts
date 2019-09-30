import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([

  ]);

  constructor() { }

  addUser(username): void {
    this.users.value.push(username);
    this.users.next(this.users.value);
  }
}
