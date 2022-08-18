import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { produtoCarrinho } from 'src/produtos';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }

  notificacaoOk(mensagem: string){
    this.snackBar.open(mensagem, "ok", {
      duration: 4000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
  }
  notificacaoErro(mensagem: string){
    this.snackBar.open(mensagem, "erro", {
      duration: 4000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
  }
  tipoDeMensagem(tipoValorRecebido: number){
    switch(tipoValorRecebido){
      case 1:
        this.notificacaoErro("OPS! paresse que não temos essa quantidade em estoque")
        break;
      case 2:
        this.notificacaoErro("OPS! insira um valor")
        break;
      case 3: 
        this.notificacaoErro("OPS! não é possivel adicionar um valor negativo")
      break;
      case 4:
        this.notificacaoErro("OPS! não é possivel comprar 0 produtos")
        break;
      case 5:    
        this.notificacaoOk("o produto foi adicionado ao carrinho")
        break;
      case 6:
        this.notificacaoOk("atualização feita")
        break;
      case 7:
        this.notificacaoOk("compra efetuada")
        break;
      case 8:
        this.notificacaoErro("OPS! este produto já existe no carrinho")
        break
      default:
        break
    }
  }
  verificarEstoqueItem(quantidade: number, valorMaximo: number): boolean{
    if(quantidade > valorMaximo){
      this.tipoDeMensagem(1)
      return false
    } 
    if(quantidade == 0){
      this.tipoDeMensagem(2)
      return false
    }
    if(quantidade < 0){
      this.tipoDeMensagem(3)
      return false
    }
    this.tipoDeMensagem(6)
    return true
  }
  validarCompra(carrinhosNaLista : produtoCarrinho[]): boolean{
    if(carrinhosNaLista.length === 0){
      this.tipoDeMensagem(4)
      return false
    }
    this.tipoDeMensagem(7)
    return true
  }
}
