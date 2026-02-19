import * as formulas from '../../services/index.js';

document.addEventListener('components:loaded', () => {

    const metodo = document.querySelectorAll('input[name="metodo"]');
    const tiposDiv = document.getElementById('tipos');
    const btnBF = document.getElementById('bodyFat-btn');
    const resultadoBF = document.getElementById('resultadoFat');

    metodo.forEach(m => {
        m.addEventListener('change', function () {
            tiposDiv.innerHTML = '';
            const sexo = document.querySelector('input[name="sexo"]:checked')?.value?.toUpperCase();
            if (!sexo) {
                alert('Selecione o sexo antes de escolher o método.');
                return;
            }
            const valorMetodo = m.value.toUpperCase();
            const tipos = formulas.dobras(valorMetodo, sexo);
            tipos.forEach(tipo => {
                const container = document.createElement('div');
                container.classList.add('campo-tipo');

                const label = document.createElement('label');
                label.setAttribute('for', tipo);
                label.textContent = tipo;

                const input = document.createElement('input');
                input.type = 'number';
                input.id = tipo;
                input.classList.add('input');

                container.appendChild(label);
                container.appendChild(input);
                tiposDiv.appendChild(container);
            });
            calculo.style.display = "block";
        });
    });

    btnBF.addEventListener('click', function (e) {
        e.preventDefault();
        const sexo = document.querySelector('input[name="sexo"]:checked')?.value?.toUpperCase();
        const idade = parseInt(document.getElementById('idade').value);
        if (!sexo || !idade) {
            resultadoBF.textContent = "Preencha sexo e idade!";
            return;
        }
        const formulaEscolhida = document.querySelector('input[name="formula"]:checked')?.value;
        if (!formulaEscolhida) {
            resultadoBF.textContent = "Escolha Siri ou Brozek.";
            return;
        }
        const metodoEscolhido = document.querySelector('input[name="metodo"]:checked');
        if (!metodoEscolhido) {
            resultadoBF.textContent = "Escolha um método de dobras.";
            return;
        }
        const valorMetodo = metodoEscolhido.value.toUpperCase();
        const inputs = tiposDiv.querySelectorAll('input[type="number"]');
        const valoresDobras = [...inputs].map(input => parseFloat(input.value) || 0);
        let densidadeCorporal;
        switch (valorMetodo) {
            case 'JP3':
                densidadeCorporal = sexo === 'M' ? formulas.pollock3M(idade, ...valoresDobras) : formulas.pollock3F(idade, ...valoresDobras);
                break;

            case 'JP4':
                densidadeCorporal = formulas.pollock4(...valoresDobras);
                break;

            case 'JP7':
                densidadeCorporal = sexo === 'M' ? formulas.pollock7M(idade, ...valoresDobras) : formulas.pollock7F(idade, ...valoresDobras);
                break;

            case 'DW':
                densidadeCorporal = sexo === 'M' ? formulas.DurninWomersleyM(idade, ...valoresDobras) : formulas.DurninWomersleyF(idade, ...valoresDobras);
                break;

            case 'F':
                densidadeCorporal = formulas.Faulkner(...valoresDobras);
                break;
            case 'S':
                densidadeCorporal = sexo === 'M' ? formulas.SloanM(idade, ...valoresDobras) : formulas.SloanF(idade, ...valoresDobras);
                break;
            case 'G':
                densidadeCorporal = sexo === 'M' ? formulas.GuedesM(idade, ...valoresDobras) : formulas.GuedesF(idade, ...valoresDobras);
                break;
        }
        const percentual = formulaEscolhida === 'SIRI' ? formulas.Siri(densidadeCorporal) : formulas.Brozek(densidadeCorporal);
        resultadoBF.textContent = `Seu percentual de gordura: ${percentual}%`;
    });
});