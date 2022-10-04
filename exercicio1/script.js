// Prática guiada 1
// criar um item 0 e item 5, no começo e final da litsa, respectivamente

// criar uma nova tag li
const itemNovo = document.createElement("li")

const item5 = document.createElement("li")

console.log(itemNovo, item5)

// criando um conteúdo
const conteudoItemNovo = document.createTextNode("Item 0")

const conteudoItem5 = document.createTextNode("Item 5")

console.log(conteudoItemNovo, conteudoItem5)

// colocando o conteúdo da tag
item5.appendChild(conteudoItem5)

itemNovo.appendChild(conteudoItemNovo)

// criando um elemento de referência
const referenciaItem5 = document.getElementById("lista")

const elementoReferencia = document.getElementById("lista")

console.log(elementoReferencia, referenciaItem5)

// adicionar na tela
referenciaItem5.insertAdjacentElement("beforeend", item5)

elementoReferencia.insertAdjacentElement("afterbegin", itemNovo)