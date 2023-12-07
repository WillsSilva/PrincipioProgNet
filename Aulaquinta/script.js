// Vetor para armazenar os carros
let carros = [];

function cadastrarCarro() {
    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    if (!(!placa || !modelo || !ano || !vaga || !cor)) {
        const carroNaMesmaVaga = carros.find(carro => carro.vaga === vaga);
        if (carroNaMesmaVaga) {
            alert("Já existe um carro nesta vaga!");
            return;
        }

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
    } else {
        alert("Preencha todos os campos!!");
    }
}

function exibirCarros() {
    const carList = document.getElementById('carList');
    carList.innerHTML = '';

    carros.forEach((carro, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${carro.modelo}</strong> - Placa: ${carro.placa}, Ano: ${carro.ano}, Cor: ${carro.cor}, Vaga: ${carro.vaga} <span class="btn-group"><button onclick="removerCarro(${index})">Remover</button> <button onclick="editarCarro(${index})">Editar</button></span>`;
        carList.appendChild(listItem);
    });
}

function removerCarro(index) {
    carros.splice(index, 1);
    exibirCarros();
}

function editarCarro(index) {
    const carroSelecionado = carros[index];
    
    document.getElementById('placa').value = carroSelecionado.placa;
    document.getElementById('modelo').value = carroSelecionado.modelo;
    document.getElementById('ano').value = carroSelecionado.ano;
    document.getElementById('cor').value = carroSelecionado.cor;
    document.getElementById('vaga').value = carroSelecionado.vaga;

    carros.splice(index, 1);
    exibirCarros();
}


function limparFormulario() {
    document.getElementById('carForm').reset();
}
