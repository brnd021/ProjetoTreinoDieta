import imcSpecs from './objectIMC.js'

function calculaIMC(peso,h){
    return peso / Math.pow(h,2)
}

function classificaIMC(idade,sexo,peso,h){
    let imc = calculaIMC(peso,h);
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
    return alvo ? alvo.classifica : tabela[tabela.length - 1].classifica;
}
function pollock3M(age,chest,abs,thighs){
    return 1.10938 - (0.0008267 * (chest + abs + thighs)) + (0.0000016 * Math.pow((chest + abs + thighs),2)) - (0.0002574 * age);
}
function pollock3F(age,triceps,supra,thighs){
    return 1.0994921 - (0.0009929 * (triceps + supra + thighs)) + (0.0000023 * Math.pow((triceps + supra + thighs),2)) - (0.0001392 * age);
}
function pollock4(triceps,biceps,sub,supra){
    return 1.1599 - (0.0717 * Math.log10(triceps + biceps + sub + supra));
}
function pollock7M(age,chest,abs,thighs,triceps,sub,supra,axilar){
    return 1.112 - (0.00043499 * (chest + abs + thighs + triceps + sub + supra + axilar)) + (0.00000055 * Math.pow((chest + abs + thighs + triceps + sub + supra + axilar),2)) - (0.00028826 * age);
}
function pollock7F(age,chest,abs,thighs,triceps,sub,supra,axilar){
    return 1.097 - (0.00046971 * (chest + abs + thighs + triceps + sub + supra + axilar)) + (0.00000056 * Math.pow((chest + abs + thighs + triceps + sub + supra + axilar),2)) - (0.00012828 * age);
}
function DurninWomersleyM(age,biceps,triceps,supra,sub){
    if(age >= 17 && age <= 19){
        return 1.1620 - (0.0630 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 20 && age <= 29){
        return 1.1631 - (0.0632 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 30 && age <= 39){
        return 1.1422 - (0.0544 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 40 && age <= 49){
        return 1.1620 - (0.0700 * Math.log10(biceps + triceps + supra + sub));
    }
    else{
        return 1.1715 - (0.0779 * Math.log10(biceps + triceps + supra + sub));
    }
}
function DurninWomersleyF(age,biceps,triceps,supra,sub){
      if(age >= 17 && age <= 19){
        return 1.1549 - (0.0678 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 20 && age <= 29){
        return 1.1599 - (0.0717 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 30 && age <= 39){
        return 1.1423 - (0.0632 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 40 && age <= 49){
        return 1.1333 - (0.0612 * Math.log10(biceps + triceps + supra + sub));
    }
    else{
        return 1.1339 - (0.0645 * Math.log10(biceps + triceps + supra + sub));
    }
}
function Faulkner(abs,triceps,sub,supra){
    return 0.153 * (abs + triceps + sub + supra) + 5.783;
}
function SloanM(chest,thighs){
    return 1.1043 - (0.001327 * chest) - (0.00131 * thighs) ;
}
function SloanF(triceps,crista){
    return 1.0764 - (0.0008 * triceps) - (0.00088 * crista) ;
}
function GuedesM(chest,abs,thighs){
    return 1.17136 - (0.06706 * Math.log10(chest + abs + thighs));
}
function GuedesF(triceps,supra,thighs){
    return 1.16650 - (0.07063 * Math.log10(triceps + supra + thighs));
}
function Siri(bodyDensity){
    return (495 / bodyDensity) - 450;
}
function Brozek(bodyDensity){
    return (457 / bodyDensity) - 414.2;
}
function dobras(nome,sexo){
    if (nome === 'JP3') return  sexo === 'M' ? ['Peito', 'Abdômen', 'Coxa'] : ['Tríceps', 'Supra-ilíaca', 'Coxa'];
    else if (nome === 'JP4') return  ['Tríceps', 'Bíceps', 'Subescapular', 'Supra-ilíaca'];
    else if (nome === 'JP7') return  ['Peito', 'Abdômen', 'Coxa', 'Tríceps', 'Subescapular', 'Supra-ilíaca', 'Axilar média'];
    else if (nome === 'DW') return  ['Bíceps', 'Tríceps', 'Supra-ilíaca', 'Subescapular'];
    else if (nome === 'F') return  ['Abdômen', 'Tríceps', 'Subescapular', 'Supra-ilíaca']
    else if (nome === 'S') return  sexo === 'M' ? ['Peito', 'Coxa'] : ['Tríceps', 'Crista ilíaca']
    else if (nome == 'G') return sexo === 'M' ? ['Peito', 'Abdômen', 'Coxa'] : ['Tríceps', 'Supra-ilíaca', 'Coxa']
}
function metabolM(peso,altura,idade){
    return (10*peso)+(6.25*altura*100) - (5 * idade) + 5;
}
function metabolF(peso,altura,idade){
    return (10*peso)+(6.25*altura*100) - (5 * idade) -161;
}
function gastoCal(dias,metabol){
    switch (dias){
        case 0: return metabol * 1.2;
        case 3: return metabol * 1.375;
        case 5: return metabol * 1.55;
        case 7: return metabol * 1.725;
        case 8: return metabol * 1.9;
}}
export {
  calculaIMC, classificaIMC, pollock3M, pollock3F, pollock4, pollock7M, pollock7F, DurninWomersleyM, DurninWomersleyF,
  Faulkner, SloanM, SloanF, GuedesM, GuedesF, Siri, Brozek, dobras, metabolM, metabolF, gastoCal
};
