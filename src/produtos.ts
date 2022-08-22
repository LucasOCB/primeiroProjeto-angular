export interface produto{
    id: number,
    descricao: string,
    preco: number,
    descricaoPreco: string,
    imagem: string,
    quantidadeEstoque: number
}

export interface produtoCarrinho extends produto{
    quantidadeCompra: number
}

export const produtos: produto[] = [
    {id: 1, descricao: 'mouse comum', preco: 249.99, descricaoPreco: "À vista no PIX", imagem:"./assets/mouse-1.png", quantidadeEstoque: 200},
    {id: 2, descricao: 'mouse gamer', preco: 499.99, descricaoPreco: "À vista no PIX", imagem:"./assets/mouse-2.jpg", quantidadeEstoque: 75},
    {id: 3, descricao: 'teclado barato', preco: 299.99, descricaoPreco: "À vista no PIX", imagem:"./assets/teclado-1.jpg", quantidadeEstoque: 50},
    {id: 4, descricao: 'teclado excelente', preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/teclado-2.jpg", quantidadeEstoque: 10},
    {id: 5, descricao: 'fone para jogos', preco: 299.99, descricaoPreco: "À vista no PIX", imagem:"./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 200},
    {id: 6, descricao: 'fone bluetooth', preco: 399.99, descricaoPreco: "À vista no PIX", imagem:"./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 1000},
    {id: 7, descricao: 'fone de ouvido', preco: 499.99, descricaoPreco: "À vista no PIX", imagem:"./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 700},
    {id: 8, descricao: 'hd 1TB', preco: 549.99, descricaoPreco: "À vista no PIX", imagem:"./assets/hd.jpg", quantidadeEstoque: 60},
    {id: 9, descricao: 'placas de video', preco: 1399.99, descricaoPreco: "À vista no PIX", imagem:"./assets/placa-video.jpg", quantidadeEstoque: 15},
    {id: 10, descricao: 'processdor Ryzen', preco: 399.99, descricaoPreco: "À vista no PIX", imagem:"./assets/processador.jpg", quantidadeEstoque: 5},
    {id: 11, descricao: 'notbook barato', preco: 199.99, descricaoPreco: "À vista no PIX", imagem:"./assets/laptop-1.jpg", quantidadeEstoque: 100},
    {id: 12, descricao: 'notbook ótimo', preco: 699.99, descricaoPreco: "À vista no PIX", imagem:"./assets/laptop-2.jpg", quantidadeEstoque: 25},
]