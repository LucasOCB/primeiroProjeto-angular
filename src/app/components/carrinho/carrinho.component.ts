import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';
import { produtoCarrinho } from 'src/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  constructor(public carrinhoService: CarrinhoService, private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
    this.atualizarGeral()
  }

  produtosCarrinho: produtoCarrinho[] = []
  totalCompra: number = 0
  aparecerMensagemVazio: boolean = false
  aparecerMensagemCompra: boolean = false
  timer: any


  //funções
  atualizarHub(): void{
    this.produtosCarrinho = this.carrinhoService.pegarCarrinho()
  }
  atualizarValorTotal(): void{
    let total = this.produtosCarrinho.reduce(
      (valorAntes, dadoAtual) => valorAntes + dadoAtual.preco * dadoAtual.quantidadeCompra, 0
    )
    this.totalCompra = total
  }
  statusCarrinho(){
    if(this.produtosCarrinho.length == 0){
      this.aparecerMensagemVazio = true
      return
    }
    this.aparecerMensagemVazio = false
  }
  atualizarGeral(): void{
    this.atualizarHub()
    this.atualizarValorTotal()
    this.statusCarrinho()
  }
  retirarUmItem(itemEscolhido: produtoCarrinho): void{
    this.carrinhoService.tirarUmItemCarrinho(itemEscolhido)
    this.atualizarGeral()
  }
  limparCarrinho(): void{
    this.carrinhoService.limparCarrinho()
    this.atualizarGeral()
  }
  atualizarQuantidadeItem(item: produtoCarrinho): void{
    //a msg aparece msm se o valor não for atualizado
    let validacaoNotificacao: boolean = this.notificacaoService.verificarEstoqueItem(item.quantidadeCompra, item.quantidadeEstoque)
    if(validacaoNotificacao == false){
      this.atualizarHub()
      return
    }
    this.carrinhoService.atualizarUmItem(this.produtosCarrinho)
    this.atualizarValorTotal()
  }
  msgCompraAprovada(){
    if(this.aparecerMensagemCompra == true){
      this.aparecerMensagemCompra = false
      this.statusCarrinho()
      clearInterval(this.timer)
      return
    }
    this.aparecerMensagemCompra = true
  }
  efetuarCompra(): void{
    let compraEfetuada: boolean = this.notificacaoService.validarCompra(this.produtosCarrinho)
    if(compraEfetuada == false){
      return
    }
    this.carrinhoService.limparCarrinho()
    this.atualizarHub()
    this.atualizarValorTotal()
    this.msgCompraAprovada()
    this.timer = setInterval(() =>{
      this.msgCompraAprovada()
    }, 5000)
    // setInterval
  }
}
