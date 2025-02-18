
document.querySelector("a")?.href


const {body} = document

console.log(document)

function retorno<Tipo extends HTMLElement>(a: string): Tipo | null {
  return document.querySelector(a)
}


retorno<HTMLAnchorElement>("a")









































