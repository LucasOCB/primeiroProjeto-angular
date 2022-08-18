import { Injectable } from '@angular/core';
import { produto } from 'src/produtos';
import { produtos } from 'src/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: produto[] = produtos
  pegarProdutos(): produto[]{
    return this.produtos
  }
  pegarUmProduto(idProduto: number){
    return this.produtos.find(produtoEscolhido => produtoEscolhido.id == idProduto)
  }
  constructor() { }
}
