"use strict";
// Define que o retorno será um HTMLAnchorElement
const link = document.querySelector('.link');
link?.href;
// async function getData<T>(url: string): Promise<T> {
//   const response = await fetch(url);
//   return await response.json();
// }
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
