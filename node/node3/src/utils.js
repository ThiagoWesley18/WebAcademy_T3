import { LoremIpsum } from "lorem-ipsum";
import fs from "fs";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});


export function gerarTextoLoremIpisum(numeroDeParagrafos){
    let paragrafos = [];
    for(let i = 0; i < numeroDeParagrafos; i++){
        paragrafos.push(lorem.generateParagraphs(1));
    }

    let paragrafosHTML = paragrafos.map(paragrafo => `<p style="font-size:20px;" >${paragrafo}</p><br>`);
    return paragrafosHTML.join('');
}

export function gerarHTMLAnterior(){
    return new Promise((resolve, reject) => {
        fs.readFile("src/textoAnterior.txt", (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
export function gerarHTMLPosterior(){
    return new Promise((resolve, reject) => {
        fs.readFile("src/textoPosterior.txt", (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}