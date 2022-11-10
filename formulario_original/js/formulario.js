(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            showErrorMessage("Preencha todos os campos", function (e) {
                txtTitulo.focus()
            })
            e.preventDefault();
        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        function hideErrorMessage() {
            console.log("clicando close")
            feedbackMessage.classList.remove("show")

            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)

            if (typeof cb === "function") {
                cb()
            }

        }
        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)
    }



    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    mostraNumero(maxima)

    contadorContainer.style.display = "block"

    function checkLength() {
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostraNumero(caracteresRestantes)
    }

    function mostraNumero(n) {
        resta.textContent = n
    }

    txtDescricao.addEventListener("change", checkLength)

    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")

    chkAceito.addEventListener('click', function () {
        btn.disabled = !this.checked
    })
})()