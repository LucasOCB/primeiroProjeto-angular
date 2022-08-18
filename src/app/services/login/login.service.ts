import { Injectable } from '@angular/core';
import { usuario } from 'src/usuario';
import { usuariosLogados } from 'src/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginFeito: boolean = false
  usuarios: usuario[] = usuariosLogados
  
  estouAutenticado(): boolean{
    return this.loginFeito
  }
  sairLogin(){
    this.loginFeito = false
  }
  validarLogin(usuario: string, senha: string){
    let quantidadeUsuarios: number = this.usuarios.length
    for(let n = 0; n < quantidadeUsuarios; ++n){
      if(this.usuarios[n].nome.includes(usuario) && this.usuarios[n].senha === senha){
        this.loginFeito = true
        return true
      }
    }
    this.loginFeito = false
    return false
  }

  constructor() { }
}
