/*
Exercício proposto -- Construir uma função para calcular IMC

Requisitos

IMC= peso / altura 
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não número
Deve retornar erro caso não receba nenhum parâmetro

  --------TABELA - IMC  ---------
Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2

*/

function calcularIMC(peso, altura) {
	if (peso === undefined || altura === undefined) {
		throw Error("Obrigatório o valor do peso e altura!")
	}
	return peso / (altura * altura)
}

function classificarImc() {
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

let imc = (calcularIMC(80, 1.65))

console.log(imc)
console.log(classificarImc())

