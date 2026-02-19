import imcSpecs from '../data/imc.specs.js'

export function calculaIMC(peso,altura){
    return peso / Math.pow(altura,2)
}

export function classificaIMC(idade,sexo,peso,altura){
    let imc = calculaIMC(peso,altura);
    let idadeReal = idade < 10 ? 5 : idade < 15 ? 10 : 15;
    let tabela;

    if (idade < 18) {
        if (sexo === "M") tabela = imcSpecs.menino.idade[idadeReal];
        else tabela = imcSpecs.menina.idade[idadeReal];
    } 
    else if (idade < 60) {
        tabela = imcSpecs.adulto;
    } 
    else {
        tabela = imcSpecs.idoso;
    }

    const alvo = tabela.find(e => imc <= e.imc);
    return alvo ? alvo.classifica : tabela.at(-1).classifica;
}