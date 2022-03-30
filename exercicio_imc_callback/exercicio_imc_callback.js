function calcularImc(peso, altura, callback) {
    if (peso === undefined || altura === undefined) {
        throw Error("Obrigatório o valor de peso e altura")
    }
    let imc = peso / (altura * altura)
    if (typeof callback === "function") {
        return callback(imc)
    }
    return imc
}

function classificarImc(imc) {
    if (imc <= 16.9) {
        return "Muito a baixo do peso."
    } else if (imc <= 18.4) {
        return "Abaixo do peso."
    } else if (imc <= 24.9) {
        return "Peso normal."
    } else if (imc <= 29.9) {
        return "Acima do peso"
    } else if (imc <= 34.9) {
        return "Obesidade Grau I"
    } else if (imc <= 40) {
        return "Obesidade Grau II"
    } else if (imc > 40) {
        return " Obesidade Grau III"
    }
}

let imc = (calcularImc(80, 1.65))
let imc2 = (calcularImc(80, 1.65, classificarImc))
console.log(imc)
console.log(imc2)