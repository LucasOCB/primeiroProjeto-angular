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
    this.listarProdutos()
  }

  produtos?: produto[]
  pesquisa: string = ''
  listarProdutos(){
    this.produtos = this.produtoService.pegarProdutos()
  }

  pesquisarItem(itemPesquisa: string): void{
    console.log(itemPesquisa)
    console.log("r")
    if(itemPesquisa == ''){
      this.listarProdutos
      return
    }
    this.produtos = this.produtos?.filter((dadoManter) => itemPesquisa === dadoManter.descricao)
  }

}
