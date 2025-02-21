"use strict";
// 1 - Faça um fetch das vendas: "https://api.origamid.dev/json/vendas.json"
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function pegarDados(url) {
    const response = await fetch(url);
    const dados = await response.json();
    console.log(dados);
    return dados;
}
async function printarDados() {
    const data = await pegarDados("https://api.origamid.dev/json/vendas.json");
    let soma = data.reduce((acumulador, atual) => {
        return acumulador + atual[1];
    }, 0);
    document.body.innerHTML += `<h1>Total: ${soma}</h1>`;
}
printarDados();
