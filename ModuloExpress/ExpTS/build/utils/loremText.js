"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarTextoLoremIpisum = void 0;
const lorem_ipsum_1 = require("lorem-ipsum");
const lorem = new lorem_ipsum_1.LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});
function gerarTextoLoremIpisum(numeroDeParagrafos) {
    const paragrafos = [];
    for (let i = 0; i < numeroDeParagrafos; i++) {
        paragrafos.push(lorem.generateParagraphs(1));
    }
    const paragrafosHTML = paragrafos.map(paragrafo => `<p style="font-size:20px;" >${paragrafo}</p><br>`);
    return paragrafosHTML.join('');
}
exports.gerarTextoLoremIpisum = gerarTextoLoremIpisum;
