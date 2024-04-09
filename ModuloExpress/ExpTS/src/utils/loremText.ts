import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export function gerarTextoLoremIpisum(numeroDeParagrafos: number): string {
  const paragrafos: string[] = [];
  for (let i = 0; i < numeroDeParagrafos; i++) {
    paragrafos.push(lorem.generateParagraphs(1));
  }

  const paragrafosHTML = paragrafos.map(
    (paragrafo) => `<p style="font-size:20px;" >${paragrafo}</p><br>`,
  );
  return paragrafosHTML.join("");
}
