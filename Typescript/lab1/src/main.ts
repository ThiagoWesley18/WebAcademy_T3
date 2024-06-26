
let add:  HTMLDivElement= document.querySelector('#add')!;
let remover:  HTMLDivElement = document.querySelector('#remover')!;
let modificar:  HTMLDivElement = document.querySelector('#modificar')!;
let paiLinha:  HTMLDivElement = document.querySelector('#paiLinha')!;

// Tratamento do evento de Adição de lembrete
add.addEventListener('click', () => {
    let linhas: NodeListOf<Element> = document.getElementsByName('linha');
    let colunas: number = linhas.length > 0 ? linhas[linhas.length-1].querySelectorAll('.col').length : 0;
    
    // criando os elementos dos inputs
    const titulo: HTMLInputElement = document.querySelector('#titulo')!;
    const dataInicio: HTMLInputElement = document.querySelector('#dataIn')!;
    const dataFim: HTMLInputElement = document.querySelector('#dataOut')!;
    const desc: HTMLInputElement = document.querySelector('#desc')!;
    
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
    col.setAttribute('class', 'col-md-4 col-sm-2');
    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    cardTitle.setAttribute('class', 'card-title');
    cardTextDataInicio.setAttribute('class', 'card-text');
    cardTextDataFim.setAttribute('class', 'card-text');
    cardTextDesc.setAttribute('class', 'card-text');

    // cria linha quando tiver 4 colunas, senão adiciona a coluna na mesma linha. E cria linha quando não tiver nenhuma linha, se não adiciona a coluna na linha    
    if(colunas == 3 || linhas.length == 0){
        let linha: HTMLDivElement = document.createElement('div');
        linha.setAttribute('class', 'row g-3 w-100 h-100');
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

 // tratamento do evento de remoção 
remover.addEventListener('click', () => {
        // pegando todos os titulos dos cards
        let titulos: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-title');

        // pegando o valor do input
        let elemento: HTMLInputElement = document.querySelector('#tituloRemover')!;
        let elementoRemover: HTMLElement;

        // verificando se o valor do input é igual ao titulo do card
        if (titulos.length > 0) {
            // removendo o card que tem o titulo igual ao valor do input
            titulos.forEach((linha) => {
                // volta 3 elementos na arvore DOM para remover o card coluna
                if(linha.textContent == elemento.value){
                    elementoRemover = linha.parentElement!;
                    elementoRemover = elementoRemover.parentElement!;
                    elementoRemover = elementoRemover.parentElement!;
                    elementoRemover.remove();
                    
                }
            });
        }
    });

 // Tratamento do evento de Modificação de lembrete   
 modificar.addEventListener('click', () => {
    // pegando todos os titulos dos cards
    let titulos: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card-title');

    // pegando o valor do input
    let titulo: HTMLInputElement = document.querySelector('#modTitulo')!;
    let dataInicio: HTMLInputElement = document.querySelector('#modDataIn')!;
    let dataFim: HTMLInputElement = document.querySelector('#modDataOut')!;
    let desc: HTMLInputElement = document.querySelector('#ModDesc')!;

    let elemento: HTMLElement;

    // verificando se o valor do input é igual ao titulo do card
    if (titulos.length > 0) {
        // removendo o card que tem o titulo igual ao valor do input
        titulos.forEach((linha) => {
            if(linha.textContent == titulo.value){
                
                if(dataInicio.value != null){
                    elemento = linha.nextElementSibling as HTMLElement;
                    elemento.textContent = "Data de início : " + dataInicio.value;
                }
                if(dataFim.value != null){
                    elemento = elemento.nextElementSibling as HTMLElement;
                    elemento.textContent = "Data de fim : " + dataFim.value;
                }
                if(desc.value != null){
                    
                    elemento = elemento.nextElementSibling as HTMLElement;
                    elemento.innerHTML = `<p>Descrição:</p> <p style="border:3px solid black" >${desc.value}</p>`;
                    
                }
                
            }
        });
    }
 });