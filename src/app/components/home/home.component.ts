import { Component, OnInit } from '@angular/core';
import { produto } from 'src/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }
  
  ngOnInit(): void {
    this.pegarProdutos()
  }

  produtos?: produto[]
  pesquisa: string = ''
  itemPesquisa: string = ''
  msgPesquisaInvalida: boolean = false
  
  pegarProdutos(){
    this.produtos = this.produtoService.pegarProdutos()
  }
  pesquisarItem(): void{
    if(this.itemPesquisa == ''){
      this.pegarProdutos()
      this.msgPesquisaInvalida = false
      return
    }
    this.pegarProdutos()
    this.produtos = this.produtos!.filter((dadoManter) => true == dadoManter.descricao.includes(this.itemPesquisa))
    this.msgPesquisaInvalida = false
    if(this.produtos.length == 0){
      this.msgPesquisaInvalida = true
    }
  }

}
