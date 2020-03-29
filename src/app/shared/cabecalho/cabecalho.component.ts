import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  showSearchInput: boolean;

  
  user: UserComponent;
  constructor() {
    this.user = new UserComponent;
   }

  ngOnInit(): void {
  }
  toggleSearch() {
    this.showSearchInput = !this.showSearchInput;
  }

}
