function insereItem(event) {
    //criar um elemento novo
    let elementoNovo = document.createElement("li")
    console.log(elementoNovo)

    //criar uma variável que guarda os itens novos
    let meuInput = document.getElementById("meu-input")
    console.log(meuInput.value)

    //colocar o item novo no elemento novo
    // elementoNovo.appendChild(meuInput.value)
    elementoNovo.innerHTML = meuInput.value

    let referencia = document.getElementById("lista")
    referencia.insertAdjacentElement("beforeend", elementoNovo)
    
    meuInput.value = ""
}