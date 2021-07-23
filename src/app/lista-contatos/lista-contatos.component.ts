import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';

@Component({
  selector: 'app-lita-contatos',
  templateUrl: './lista-contatos.component.html', //Troquei aqui
  styleUrls: ['./lista-contatos.component.scss']
})
export class LitaContatosComponent implements OnInit {

  contactsList: Contacts[];
  collection = {count: 10, data: []};

  constructor() { }

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
}
