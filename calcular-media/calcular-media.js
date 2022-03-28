// Exercício proposto calcular média.
let aluno = "Camomila";
let n1 = 7;
let n2 = 6;
let n3 = 9;
let media = (n1 + n2 + n3) /3;

function calcularMedia(){
    return media;
};

if(media >=7){
    console.log("Aprovado!!!! Parabéns!!!");
}else if(media >=5 && media <=7){
    console.log("Recuperação! Mas não desista.")
}else{
    console.log("Reprovado! Se lascou....")
}

console.log(`Olá ${aluno}! Sua nota final foi: ${media}`);

 

