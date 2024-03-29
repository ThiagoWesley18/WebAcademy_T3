"use strict";
let add = document.querySelector('#add');
let remover = document.querySelector('#remover');
let modificar = document.querySelector('#modificar');
let paiLinha = document.querySelector('#paiLinha');
add.addEventListener('click', () => {
    let linhas = document.getElementsByName('linha');
    let colunas = linhas.length > 0 ? linhas[linhas.length - 1].querySelectorAll('.col').length : 0;
    // criando os elementos dos inputs
    const titulo = document.querySelector('#titulo');
    const dataInicio = document.querySelector('#dataIn');
    const dataFim = document.querySelector('#dataOut');
    const desc = document.querySelector('#desc');
    // criando os elementos para os cards
    let col = document.createElement('div');
    let card = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardTextDataInicio = document.createElement('p');
    let cardTextDataFim = document.createElement('p');
    let cardTextDesc = document.createElement('p');
    // adicionando os valores dos inputs nos cards
    cardTitle.innerHTML = titulo.value;
    cardTextDataInicio.innerHTML = "Data de início : " + dataInicio.value;
    cardTextDataFim.innerHTML = "Data de fim : " + dataFim.value;
    cardTextDesc.innerHTML = `<p>Descrição:</p> <p style="border:3px solid black" >${desc.value}</p>`;
    // adicionando os atributos dos elementos
    col.setAttribute('class', 'col');
    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    cardTitle.setAttribute('class', 'card-title');
    cardTextDataInicio.setAttribute('class', 'card-text');
    cardTextDataFim.setAttribute('class', 'card-text');
    cardTextDesc.setAttribute('class', 'card-text');
    // cria linha quando não tiver nenhuma linha, se não adiciona a coluna na linha
    if (linhas.length == 0) {
        let linha = document.createElement('div');
        linha.setAttribute('class', 'row row-col-1 col-md-4 col-sm-2 g-3 w-100 h-100');
        linha.setAttribute('name', 'linha');
        paiLinha.appendChild(linha);
        linha.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTextDataInicio);
        cardBody.appendChild(cardTextDataFim);
        cardBody.appendChild(cardTextDesc);
        // cria linha quando tiver 4 colunas    
    }
    else if (colunas == 4) {
        let linha = document.createElement('div');
        linha.setAttribute('class', 'row row-col-1 col-md-4 col-sm-2 g-3 w-100 h-100');
        linha.setAttribute('name', 'linha');
        paiLinha.appendChild(linha);
        linha.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTextDataInicio);
        cardBody.appendChild(cardTextDataFim);
        cardBody.appendChild(cardTextDesc);
    }
    else {
        linhas[linhas.length - 1].appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardTextDataInicio);
        cardBody.appendChild(cardTextDataFim);
        cardBody.appendChild(cardTextDesc);
    }
});
remover.addEventListener('click', () => {
    // pegando todos os titulos dos cards
    let titulos = document.querySelectorAll('.card-title');
    // pegando o valor do input
    let elemento = document.querySelector('#tituloRemover');
    let elementoRemover;
    // verificando se o valor do input é igual ao titulo do card
    if (titulos.length > 0) {
        // removendo o card que tem o titulo igual ao valor do input
        titulos.forEach((linha) => {
            if (linha.textContent == elemento.value) {
                elementoRemover = linha.parentElement;
                elementoRemover = elementoRemover.parentElement;
                elementoRemover = elementoRemover.parentElement;
                elementoRemover.remove();
            }
        });
    }
});
modificar.addEventListener('click', () => {
    // pegando todos os titulos dos cards
    let titulos = document.querySelectorAll('.card-title');
    // pegando o valor do input
    let titulo = document.querySelector('#modTitulo');
    let dataInicio = document.querySelector('#modDataIn');
    let dataFim = document.querySelector('#modDataOut');
    let desc = document.querySelector('#ModDesc');
    let elemento;
    // verificando se o valor do input é igual ao titulo do card
    if (titulos.length > 0) {
        // removendo o card que tem o titulo igual ao valor do input
        titulos.forEach((linha) => {
            if (linha.textContent == titulo.value) {
                if (dataInicio.value != null) {
                    elemento = linha.nextElementSibling;
                    elemento.textContent = "Data de início : " + dataInicio.value;
                }
                if (dataFim.value != null) {
                    elemento = elemento.nextElementSibling;
                    elemento.textContent = "Data de fim : " + dataFim.value;
                }
                if (desc.value != null) {
                    elemento = elemento.nextElementSibling;
                    elemento.innerHTML = `<p>Descrição:</p> <p style="border:3px solid black" >${desc.value}</p>`;
                }
            }
        });
    }
});
