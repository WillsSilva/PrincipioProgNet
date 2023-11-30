// Vetor para armazenar os carros
let carros = [];

function cadastrarCarro() {
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    if (placa != ''){
        const carro = {
            placa: placa,
            modelo: modelo,
            ano: ano,
            cor: cor,
            vaga: vaga
        };

        carros.push(carro);
        exibirCarros();
        limparFormulario();
    }
    else alert ("Dados do carro invalidos!!");
}

function exibirCarros() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    carros.forEach((carro, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${carro.modelo}</strong> - Placa: ${carro.placa}, Ano: ${carro.ano}, Cor: ${carro.cor}, Vaga: ${carro.vaga} <button onclick="removerCarro(${index})">Remover</button> <button onclick="removerCarro(${index})">Editar</button>`;
        carList.appendChild(listItem);
    });
}

function removerCarro(index) {
    carros.splice(index, 1);
    exibirCarros();
}

function limparFormulario() {
    document.getElementById('carForm').reset();
}
