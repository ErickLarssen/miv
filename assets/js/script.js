'use strict';



// Função de alternância de elemento
const elementoToggleFunc = function (elem) {elem.classList.toggle("active");}



// Variáveis ​​da barra lateral
const barraLateral = document.querySelector("[data-sidebar]");
const barraLateralBtn = document.querySelector("[data-sidebar-btn]");

// Funcionalidade de alternância da barra lateral para dispositivos móveis
barraLateralBtn.addEventListener("click", function () {elementoToggleFunc(barraLateral);});