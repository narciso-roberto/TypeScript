"use strict";
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function puxarDados(url) {
    const data = await fetch(url);
    return await data.json();
}
async function mostrarDados() {
    const data = await puxarDados("https://api.origamid.dev/json/cursos.json");
    if (Array.isArray(data)) {
        data.forEach((curso) => {
            if ('nome' in curso && 'horas' in curso && 'tags' in curso && typeof curso == "object") {
                document.body.innerHTML += `
        <div>${typeof curso.nome == "string" ? curso.nome : ''}</div>
        <div>${typeof curso.aulas == "number" ? curso.aulas : ''}</div>
        <div>${typeof curso.horas == "number" ? curso.horas : ''}</div>
        <div>${typeof curso.gratuito == "boolean" ? curso.gratuito : ''}</div>
        <div>${curso.tags instanceof Array ? curso.tags : ''}</div>`;
            }
        });
    }
}
mostrarDados();
