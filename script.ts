
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela


type venda = [string, number, string, {marca:string,cor:string}]

async function getData<T>(url:string): Promise<T>{
  const data = await fetch(url)
  const dataJson = await data.json()
  return dataJson
}


async function exibirTela(){
  const dados = await getData<Array<venda>>("https://api.origamid.dev/json/vendas.json")
  let soma = dados.reduce((acumu, atual) => acumu+atual[1],0)
  console.log(soma)
}

exibirTela()




















