
let add: HTMLElement = document.querySelector('#add') as HTMLElement;
let remover: HTMLElement = document.querySelector('#remover') as HTMLElement;
let modificar: HTMLElement = document.querySelector('#modificar') as HTMLElement;
let paiLinha: HTMLElement = document.querySelector('#paiLinha') as HTMLElement;


add.addEventListener('click', () => {
    let linhas: NodeListOf<Element> = document.getElementsByName('linha');
    let colunas: number = linhas.length > 0 ? linhas[linhas.length-1].querySelectorAll('.col').length : 0;
    
    // criando os elementos dos inputs
    const titulo: HTMLInputElement = document.querySelector('#titulo') as HTMLInputElement;
    const dataInicio: HTMLInputElement = document.querySelector('#dataIn') as HTMLInputElement;
    const dataFim: HTMLInputElement = document.querySelector('#dataOut') as HTMLInputElement;
    const desc: HTMLInputElement = document.querySelector('#desc') as HTMLInputElement;
    
    // criando os elementos para os cards
    let col: HTMLDivElement = document.createElement('div');
    let card: HTMLDivElement = document.createElement('div');
    let cardBody: HTMLDivElement = document.createElement('div');
    let cardTitle: HTMLHeadingElement = document.createElement('h5');
    let cardTextDataInicio: HTMLParagraphElement = document.createElement('p');
    let cardTextDataFim: HTMLParagraphElement = document.createElement('p');
    let cardTextDesc: HTMLParagraphElement = document.createElement('p');
    
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
    if(linhas.length == 0){
        let linha: HTMLDivElement = document.createElement('div');
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
    }else if(colunas == 4){
        let linha: HTMLDivElement = document.createElement('div');
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
    }else{
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
            let titulos: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-title');

            // pegando o valor do input
            let elemento: HTMLInputElement = document.querySelector('#tituloRemover') as HTMLInputElement;
            let elementoRemover: HTMLElement;

            // verificando se o valor do input é igual ao titulo do card
            if (titulos.length > 0) {
                // removendo o card que tem o titulo igual ao valor do input
                titulos.forEach((linha) => {
                    if(linha.textContent == elemento.value){
                        elementoRemover = linha.parentElement as HTMLElement;
                        elementoRemover = elementoRemover.parentElement as HTMLElement;
                        elementoRemover = elementoRemover.parentElement as HTMLElement;
                        elementoRemover.remove();
                        
                    }
                });
            }
        });

 modificar.addEventListener('click', () => {
    // pegando todos os titulos dos cards
    let titulos: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-title');

    // pegando o valor do input
    let titulo: HTMLInputElement = document.querySelector('#modTitulo') as HTMLInputElement;
    let dataInicio: HTMLInputElement = document.querySelector('#modDataIn') as HTMLInputElement;
    let dataFim: HTMLInputElement = document.querySelector('#modDataOut') as HTMLInputElement;
    let desc: HTMLInputElement = document.querySelector('#ModDesc') as HTMLInputElement;

    let elemento: HTMLLIElement;

    // verificando se o valor do input é igual ao titulo do card
    if (titulos.length > 0) {
        // removendo o card que tem o titulo igual ao valor do input
        titulos.forEach((linha) => {
            if(linha.textContent == titulo.value){
                
                if(dataInicio.value != null){
                    elemento = linha.nextElementSibling as HTMLLIElement;
                    elemento.textContent = "Data de início : " + dataInicio.value;
                }
                if(dataFim.value != null){
                    elemento = elemento.nextElementSibling as HTMLLIElement;
                    elemento.textContent = "Data de fim : " + dataFim.value;
                }
                if(desc.value != null){
                    
                    elemento = elemento.nextElementSibling as HTMLLIElement;
                    elemento.innerHTML = `<p>Descrição:</p> <p style="border:3px solid black" >${desc.value}</p>`;
                    
                }
                
            }
        });
    }
 });