import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-from-usuarios',
  templateUrl: './form-usuarios.component.html', 
  styleUrls: ['./form-usuarios.component.scss']
})
export class FromUsuariosComponent implements OnInit {
  formUsers = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, public userService: UsuariosService) { }

  ngOnInit(): void {
    this.userService.botaoEdit.subscribe(edit =>{
      if( edit !== null){
        this.formUsers.get('name').setValue(edit.name);
        this.formUsers.get('email').setValue(edit.email);
        this.formUsers.get('password').setValue(edit.password);
        this.formUsers.get('admin').setValue(edit.admin);
      }
    });
  }

  save(){
    if(this.formUsers.valid){
      Swal.fire({
        icon: 'success',
        title:'Uhuuul',
        text: 'Usuário cadastrado com sucesso!'
      });
      this.router.navigate(['/lista-usuarios']);
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Cadastro não realizado. Preencha corretamente todos os campos!'
      });
    }
  }
}
