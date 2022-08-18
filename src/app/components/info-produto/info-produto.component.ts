import { Component, OnInit } from '@angular/core';
import { produto, produtoCarrinho } from 'src/produtos';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { NotificacaoService } from 'src/app/services/notificacao/notificacao.service';
import { CarrinhoService } from 'src/app/services/carrinho/carrinho.service';

@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css']
})
export class InfoProdutoComponent implements OnInit {


  constructor(
    private rota: ActivatedRoute, 
    private produtosService: ProdutosService,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void {
    const parametroRota = this.rota.snapshot.paramMap
    const idProduto = Number(parametroRota.get("id"))
    this.produto = this.produtosService.pegarUmProduto(idProduto)
  }

  quantidadeProduto: number = 0
  produto?: produto

  ativarMensagem(tipo: number){
    switch(tipo){
      case 1:
        this.notificacaoService.tipoDeMensagem(1)
        break;
      case 2:
        this.notificacaoService.tipoDeMensagem(2)
        break;
      case 3: 
        this.notificacaoService.tipoDeMensagem(3)
        break;
      case 4:    
        this.notificacaoService.tipoDeMensagem(5)
        break;
      default:
        break
    }
  }
  verificarQuantidadeCarrinho(quantidade: number): boolean{
    if(this.produto){
      if(quantidade > this.produto.quantidadeEstoque){
        this.ativarMensagem(1)
        return false
      }
    }
    if(quantidade == 0){
      this.ativarMensagem(2)
      return false
    }
    if(quantidade < 0){
      this.ativarMensagem(3)
      return false
    }
    this.ativarMensagem(4)
    return true
  }
  enviarCarrinho(){
    let validarChamada: boolean = this.verificarQuantidadeCarrinho(this.quantidadeProduto)
    let validarCopia: boolean = this.carrinhoService.validarItemJaExistente(this.produto!) 
    if(validarChamada === false || validarCopia === true){
      return
    }
    this.ativarMensagem(4)
    const produtoEnviar: produtoCarrinho = {
      ...this.produto!,
      quantidadeCompra: this.quantidadeProduto
    }
    this.carrinhoService.adicionarAoCarrinho(produtoEnviar)
  }

}
