"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {
    nome: "",
    email: "",
    cpf: ""
};
function isProp(value) {
    if (value == "cpf" || value == "email" || value == "nome") {
        return true;
    }
    return false;
}
function isUserData(value) {
    if (value && typeof value == "object" && 'nome' in value && "cpf" in value && "email" in value) {
        return true;
    }
    return false;
}
function refreshLocal() {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
        const dataObj = JSON.parse(dataString);
        if (isUserData(dataObj)) {
            const campos = document.querySelectorAll("#form input");
            campos.forEach((campo) => {
                if (campo instanceof HTMLInputElement && isProp(campo.id)) {
                    campo.value = dataObj[`${campo.id}`];
                }
            });
            window.UserData = dataObj;
        }
    }
}
function handleKeyUp(eve) {
    const alvo = eve.target;
    if (alvo instanceof HTMLInputElement && isProp(alvo.id)) {
        window.UserData[`${alvo.id}`] = alvo.value;
    }
    localStorage.setItem("userData", JSON.stringify(window.UserData));
}
const formulario = document.querySelector("#form");
formulario?.addEventListener("keyup", handleKeyUp);
refreshLocal();
//verificar interfaces e inviavel, pois elas nao existem em runtime... Como assim ? pq elas n existem ? oq ue isso significa ? exisem outros exemplos ?
