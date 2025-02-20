// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData


interface UserData {
  nome?:string,
  email?:string,
  cpf?:string;
}

interface Window {
  UserData: any;
}

window.UserData = {}

function JSONparse(obj: string){
  try{
    JSON.parse(obj)
  }catch(e){
    return false
  }
  return true
}

function verify(obj: unknown): obj is UserData{
  if(obj && typeof obj == "object" && ("nome" in obj || "cpf" in obj || "email" in obj)){
    return true
  }
  return false
}

function autoComplete(){
  const store = localStorage.getItem("UserData")
  if(store && JSON.parse(store)){
    const dados = JSON.parse(store);
    if(verify(dados)){
        Object.entries(dados).forEach(([chave,valor]) => {
          window.UserData[chave] = valor;
          const input = document.getElementById(chave) as HTMLInputElement
          input.value = valor;
        })
    }
    
  }
}

autoComplete()

const form = document.getElementById("form")

function click({target}:Event){
  if(target instanceof HTMLInputElement){ 
    window.UserData[target.id] = target.value
    localStorage.setItem("UserData", JSON.stringify(window.UserData))
  }
}

form?.addEventListener("input",click)














































