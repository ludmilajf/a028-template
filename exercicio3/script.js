function checaCaps(event) {
    // const inputTextoEvento = event.target

    console.log(event.shiftKey)

    const paragrafo = document.getElementById("mensagem")

    if (event.shiftKey) {
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO TECLA SHIFT"
    } else {
        paragrafo.innerHTML = ""
    }
}