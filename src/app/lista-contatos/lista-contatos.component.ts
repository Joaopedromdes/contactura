import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Contacts } from '../models/contacts';
import { ContatosService } from '../service/contatos/contatos.service';

@Component({
  selector: 'app-lita-contatos',
  templateUrl: './lista-contatos.component.html', 
  styleUrls: ['./lista-contatos.component.scss']
})

export class LitaContatosComponent implements OnInit {

  contactsList: Contacts[];
  collection = {count: 10, data: []};

  constructor(private router: Router, public contatosService: ContatosService) { }

  ngOnInit(): void {
    this.populateContacts();
  }

  //Método para preencher os contatos com dados mocados
  populateContacts(){
    for(let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        name: 'teste' + i,
        email: 'email' + i + '@contactura.com',
        phone: '(' + 0 + 8 + 1 + ')' + 9 + i + i + i + i + '-' + i + i + i + i
      });
    }
    this.contactsList = this.collection.data;
    console.log(this.contactsList);
  }
  editContatos(contatos: Contacts){
    console.log('edit está funcionando', contatos);
    this.contatosService.getContactsList(contatos);
    this.router.navigate(['/cadastro-contatos']);
  }

  deleteContacts(contatos: Contacts){
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Deseja mesmo deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire(
          'Deletado com sucesso!',
        );
      }
    });
  }
}
