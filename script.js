"use strict";
const elementos = document.querySelectorAll(".link");
function changeColor(element) {
    element.style.color = "red";
}
function changeBorder(element) {
    element.style.borderColor = "blue";
}
elementos.forEach((elementos) => {
    if (elementos instanceof HTMLElement) {
        changeBorder(elementos);
        changeColor(elementos);
    }
});
