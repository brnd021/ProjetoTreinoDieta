import * as formulas from '../../services/index.js';

document.addEventListener('components:loaded', () => {

    const btnIMC = document.getElementById('imc');
    const resultadoIMC = document.getElementById('resultadoImc');
    
    if (!btnIMC) return;

    btnIMC.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("estou aqui")
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const idade = parseInt(document.getElementById('idade').value);
        const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
        console.log("estou aqui22");
        if (!peso || !altura || !idade || !sexo) {
            resultadoIMC.textContent = "Preencha todos os campos!";
            return;
        }
        console.log("estou aqui")
        const imc = formulas.calculaIMC(peso, altura);
        const classificacao = formulas.classificaIMC(idade, sexo, peso, altura);

        resultadoIMC.textContent =
            `Seu IMC é ${imc.toFixed(2)} e você está com ${classificacao}`;
    });
});
