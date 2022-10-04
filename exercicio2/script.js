// Pratica guiada 2 
// alterando elementos

function escondeSenha(event) {
    event.preventDefault()
    const inputSenha = document.getElementById("password")
    console.log(inputSenha)
    inputSenha.setAttribute("type", "password")
}

const corFormulario = document.querySelector(".light")
corFormulario.classList.remove("light")
corFormulario.classList.add("dark")