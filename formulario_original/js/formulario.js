(function() {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function(e){
        console.log(txtTitulo.value)
       if(!txtTitulo.value){
            alert("Preencha todos os campos")
            e.preventDefault();
            txtTitulo.focus()
       }
    })

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength

    contadorContainer.style.display = "block"

    function checkLength(){
        let numeroLetrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        resta.textContent = caracteresRestantes
    }

    txtDescricao.addEventListener("input", checkLength)
})()