import * as formulas from '../../services/index.js';

document.addEventListener('components:loaded', () => {
    const resultadoCal = document.getElementById('resultadoCal');
    const btnCal = document.getElementById('gastoCal-btn');

    btnCal.addEventListener('click', function (e) {
        e.preventDefault();

        const dias = document.querySelector('input[name="dias"]:checked')?.value;
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const idade = parseInt(document.getElementById('idade').value);
        const sexo = document.querySelector('input[name="sexo"]:checked')?.value?.toUpperCase();

        if (!dias || !peso || !altura || !idade || !sexo) {
            resultadoCal.textContent = "Preencha peso, altura, idade, sexo e dias de treino.";
            return;
        }
        const metabol = sexo === "M" ? formulas.metabolM(peso, altura, idade) : formulas.metabolF(peso, altura, idade);
        const gastoCalorico = formulas.gastoCal(dias, metabol);
        console.log(gastoCalorico, metabol, dias, peso, altura, idade, sexo)
        resultadoCal.textContent = `Seu gasto calórico diário: ${gastoCalorico} kcal`;
    });
});