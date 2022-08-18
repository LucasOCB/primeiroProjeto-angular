export interface usuario{
    nome: string,
    senha: string
}
//como não estou me comunicando com o Back-End para a criação de usuarios criei usuarios já logados
export const usuariosLogados: usuario[] = [
    {nome: "usuario1", senha: '1234'},
]