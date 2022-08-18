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
    {id: 1, descricao: 'Mouse comum', preco: 250, descricaoPreco: "À vista no PIX", imagem:"./assets/mouse-1.png", quantidadeEstoque: 300},
    {id: 2, descricao: 'Mouse gamer', preco: 499.99, descricaoPreco: "À vista no PIX", imagem:"./assets/mouse-2.jpg", quantidadeEstoque: 75},
    {id: 3, descricao: 'Teclado barato', preco: 299.99, descricaoPreco: "À vista no PIX", imagem:"./assets/teclado-1.jpg", quantidadeEstoque: 50},
    {id: 4, descricao: 'Teclado excelente', preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/teclado-2.jpg", quantidadeEstoque: 10},
    {id: 5, descricao: 'Fone para jogos FPS', preco: 299.99, descricaoPreco: "À vista no PIX", imagem:"./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 200},
    {id: 6, descricao: 'Fone bluetooth', preco: 399.99, descricaoPreco: "À vista no PIX", imagem:"./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 1000},
    {id: 7, descricao: 'Fone de ouvido Bom', preco: 499.99, descricaoPreco: "À vista no PIX", imagem:"./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 700},
    {id: 8, descricao: 'HD 1TB', preco: 549.99, descricaoPreco: "À vista no PIX", imagem:"./assets/hd.jpg", quantidadeEstoque: 60},
    {id: 9, descricao: 'placas de video', preco: 1400.00, descricaoPreco: "À vista no PIX", imagem:"./assets/placa-video.jpg", quantidadeEstoque: 15},
    {id: 10, descricao: 'ProcessdorRyzen', preco: 400.00, descricaoPreco: "À vista no PIX", imagem:"./assets/processador.jpg", quantidadeEstoque: 5},
    {id: 11, descricao: 'Notbook barato', preco: 200.00, descricaoPreco: "À vista no PIX", imagem:"./assets/laptop-1.jpg", quantidadeEstoque: 100},
    {id: 12, descricao: 'Notbook ótimo', preco: 700.00, descricaoPreco: "À vista no PIX", imagem:"./assets/laptop-2.jpg", quantidadeEstoque: 25},
]