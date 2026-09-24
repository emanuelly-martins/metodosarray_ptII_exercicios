// 1. map()
// exercício 02:

const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: 'Mouse', preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: 'Teclado', preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: 'Monitor', preco: 1200, estoque: 3, ativo: true },
];

const produtosComDesconto = produtos.map((produtos) => {
    return produtos.preco * 0.9;
});

console.log("Com 10% de descontos:", produtosComDesconto);
console.log("\n")
