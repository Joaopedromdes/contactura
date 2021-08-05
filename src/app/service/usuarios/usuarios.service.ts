import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private dataEdit = new BehaviorSubject<User>(null);
  botaoEdit = this.dataEdit.asObservable();
  
  constructor() { }

  getUserList(user: User){
    this.dataEdit.next(user);
  }
}
