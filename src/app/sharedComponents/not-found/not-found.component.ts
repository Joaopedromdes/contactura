import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  
  ngOnInit(): void {
    document.querySelector('html').style.background = 'linear-gradient(to right, cyan, rgba(0, 60, 255, 0.651))';
  }
  backToLogin(){
    this.router.navigate(['/login']);
  }
}
