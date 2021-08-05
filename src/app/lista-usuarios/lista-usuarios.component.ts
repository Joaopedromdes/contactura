import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  userList: User[];
  collection = {count: 10, data: []};
  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.populateUser();
  }
  populateUser(){
    for (let i = 0; i < this.collection.count; i++){
      this.collection.data.push({
        name: 'joao ' + i,
        email: 'jpemota' + i +'@gmail.com',
        password: 'joao' + i + i + i + i,
        admin: true
      });
    }
    this.userList = this.collection.data;
    console.log(this,this.userList);
  }
  editUsers(user: User){
    console.log('Edit está funcinando', user);
    this.usuariosService.getUserList(user);    
    this.router.navigate(['/cadastro-usuario']);
  }

  deleteUsers(user: User){
    Swal.fire({
      title: 'Você tem certezaz?',
      text: 'Deseja mesmo deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) =>{
      if(result.isConfirmed){
        Swal.fire(
          'Deletado com sucesso!',
        );
      }
    });
  }
}
