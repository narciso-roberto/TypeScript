"use strict";
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function getData() {
    const dados = await fetch("https://api.origamid.dev/json/cursos.json");
    const final = await dados.json();
    preencherTela(final);
}
function isAula(target) {
    if (target && typeof target == "object" && 'nome' in target && 'horas' in target && 'tags' in target) {
        return true;
    }
    return false;
}
getData();
function preencherTela(itens) {
    console.log(itens);
    if (itens instanceof Array) {
        itens.forEach((item) => {
            if (isAula(item)) {
                const main = document.querySelector("main");
                if (main) {
                    main.innerHTML += `
            <div>
              ${item.aulas}
            </div>
            `;
                }
            }
        });
    }
}
