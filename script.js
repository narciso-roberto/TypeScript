"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
function verify(input) {
    if (input.id == "nome" || input.id == "email" || input.id == "cpf") {
        const valor = localStorage.getItem(input.id);
        if (valor) {
            window.UserData[`${input.id}`] = valor;
            input.value = valor;
        }
    }
}
const form = document.getElementById("form");
function click(event, value, id) {
    window.UserData[`${id}`] = value;
    localStorage.setItem(`${id}`, value);
}
if (form instanceof HTMLFormElement) {
    const forms = form.querySelectorAll("input");
    forms.forEach((input) => {
        verify(input);
        if (input.id == "nome" || input.id == "email" || input.id == "cpf") {
            const id = input.id;
            input.addEventListener("input", function (even) { click(even, input.value, id); });
        }
    });
}
