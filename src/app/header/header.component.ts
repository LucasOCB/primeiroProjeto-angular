import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CarrinhoService } from '../services/carrinho/carrinho.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, public carrinhoService: CarrinhoService) { }
  
  ngOnInit(): void {
  }
  
  deslogar(){
    this.loginService.sairLogin()
  }
  

}
