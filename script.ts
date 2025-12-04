
// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button



const nav = document.querySelector("#nav")
const botao = document.getElementById('btn-mobile');

function ativarMenu(event: PointerEvent){
  if(event instanceof MouseEvent){
    nav?.classList.toggle("active")
  }

  if(event.currentTarget instanceof HTMLButtonElement){
    if(nav?.classList.contains("active")){
      event.currentTarget?.setAttribute("aria-expanded", "true")
      event.currentTarget?.setAttribute("aria-label", "true")
      return
    }
    event.currentTarget?.setAttribute("aria-expanded", "false")
    event.currentTarget?.setAttribute("aria-label", "false")

  }
}


botao?.addEventListener("pointerdown",ativarMenu)