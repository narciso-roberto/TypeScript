










const elementos = document.querySelectorAll(".link")

function changeColor(element: HTMLElement){
  element.style.color = "red"
}

function changeBorder(element: HTMLElement){
  element.style.borderColor = "blue"
}

elementos.forEach((elementos) => {
  if(elementos instanceof HTMLElement){
    changeBorder(elementos)
    changeColor(elementos)
  }
})




