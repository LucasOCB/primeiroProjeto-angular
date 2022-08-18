import { Injectable } from '@angular/core';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';
import { produtoCarrinho } from 'src/produtos';
import { produto } from 'src/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itenSelecionado: produtoCarrinho[] = []

  pegarCarrinho(){
    this.itenSelecionado = JSON.parse(localStorage.getItem("carrinho") || "")
    return this.itenSelecionado
  }

  attCarrinho(): void{
    localStorage.setItem("carrinho", JSON.stringify(this.itenSelecionado))
  }

  adicionarAoCarrinho(produto: produtoCarrinho): void{
    this.itenSelecionado.push(produto)
    this.attCarrinho()
  }
  validarItemJaExistente(dadoEntrada: produto): boolean{
    let quantidadeItensLista: number = this.itenSelecionado.length
    console.log(this.itenSelecionado)
    if(this.itenSelecionado.length == 0){
      return false
    }
    for(let numero = 0; numero < quantidadeItensLista; ++numero){
      if(this.itenSelecionado[numero].id == dadoEntrada.id){
        this.notificacaoService.tipoDeMensagem(8)
        return true
      }
    }
    return false
  }

  tirarUmItemCarrinho(dadoEntrada: produtoCarrinho): void{
    this.itenSelecionado = this.itenSelecionado.filter((dadoRemover) => dadoEntrada.id !== dadoRemover.id)
    this.attCarrinho()
  }
  atualizarUmItem(dadoEntrada: produtoCarrinho[]):void{
    this.itenSelecionado = dadoEntrada
    this.attCarrinho()
  }
  limparCarrinho(): void{
    this.itenSelecionado = []
    this.attCarrinho()
  }
  pegarQuantidadeItens(): number{
    return this.itenSelecionado.length
  }
  constructor(private notificacaoService: NotificacaoService) { }
}
