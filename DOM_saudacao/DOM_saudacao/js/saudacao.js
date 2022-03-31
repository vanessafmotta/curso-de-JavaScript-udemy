(function () {
    const nomeUsuario = "Vanessa"
    //document.querySelector(".top-bar p").innerHTML = `Bem-vindo(a) ${nomeUsuario}`
    const elemento = document.querySelector(".top-bar p")

    if (nomeUsuario) {
        // elemento.textContent = ("Bem-vindo(a)"+ nomeUsuario)
        elemento.innerHTML += "<b>" + nomeUsuario + "<b>"
    } else {
        // elemento.parentElement.style.display = "nome"
        // elemento.remove()
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover);
    }
    console.log(elemento)
})()

