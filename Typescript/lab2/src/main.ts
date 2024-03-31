
type retornoString  = () => string;
type retornoNumber  = () => number;

let add: HTMLButtonElement = document.querySelector('#add') as HTMLButtonElement;
let modificar: HTMLButtonElement = document.querySelector('#modificar') as HTMLButtonElement;
let remover: HTMLButtonElement = document.querySelector('#remover') as HTMLButtonElement;

class Grafico {
  private chart: Chart | null = null;

  constructor(
    private nomeTurma: string,
    
  ){
    this.atualizarGrafico(0,0,0,0);
  }

  public atualizarGrafico(numAlunos: number, mediaIdades: number, mediaAlturas: number, mediaPesos: number): void{
    let ctx: HTMLCanvasElement = document.getElementById("myBarChart") as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Numeros de Alunos", "Média das Idades", "Médias das Alturas", "Média dos Pesos"],
        datasets: [{
          label: this.nomeTurma,
          backgroundColor: "#4e73df",
          hoverBackgroundColor: "#2e59d9",
          borderColor: "#4e73df",
          data: [numAlunos , mediaIdades , mediaAlturas,mediaPesos],
        }],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 4
            },
            
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
              maxTicksLimit: 5,
              padding: 10
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        },
      }
    });
  }

  public destruirGrafico(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
}

class Aluno{
  private id: number = 0;
  
  constructor(
    private nome: string,
    private idade: number,
    private altura: number,
    private peso: number
  ){
    this.id++;
  }

  getId: retornoNumber = () => this.id;
  getNome: retornoString = () => this.nome;
  getIdade: retornoNumber= () => this.idade;
  getAltura: retornoNumber = () => this.altura;
  getPeso: retornoNumber = () => this.peso;
  
}

class Turma{
  private id: number = 0;

  constructor(
    private nome: string,
    private alunos: Aluno[]
  ){
    this.id++;
  }

  getId: retornoNumber = () => this.id;
  getNome: retornoString = () => this.nome;
  getNumAlunos: retornoNumber = () => this.alunos.length;
  getMediaIdades: retornoNumber = () => {
    let soma = 0;
    this.alunos.forEach(aluno => {
      soma += aluno.getIdade();
    });
    return soma / this.getNumAlunos();
  }
  getMediaAlturas: retornoNumber = () => {
    let soma = 0;
    this.alunos.forEach(aluno => {
      soma += aluno.getAltura();
    });
    return soma / this.getNumAlunos();
  }
  getMediaPesos: retornoNumber = () => {
    let soma = 0;
    this.alunos.forEach(aluno => {
      soma += aluno.getPeso();
    });
    return soma / this.getNumAlunos();
  }

}

let turma: Turma  = new Turma("Turma1", []);
let grafico: Grafico = new Grafico(turma.getNome());
let alunos: Aluno[] = [];

add.addEventListener('click', () => {
// criando os elementos dos inputs
const nome: HTMLInputElement = document.querySelector('#nome')!;
const idade: HTMLInputElement = document.querySelector('#idade')!;
const altura: HTMLInputElement = document.querySelector('#altura')!;
const peso: HTMLInputElement = document.querySelector('#peso')!;

alunos.push(new Aluno(nome.value, Number(idade.value), Number(altura.value), Number(peso.value)));
turma = new Turma("Turma1", alunos);

// Destruir o gráfico anterior, se existir
if (grafico) {
  grafico.destruirGrafico();
}

grafico.atualizarGrafico(turma.getNumAlunos(), turma.getMediaIdades(), turma.getMediaAlturas(), turma.getMediaPesos());
});

modificar.addEventListener('click', () => {
  // criando os elementos dos inputs
  const nome: HTMLInputElement = document.querySelector('#nomeMod')!;
  const idade: HTMLInputElement = document.querySelector('#idadeMod')!;
  const altura: HTMLInputElement = document.querySelector('#alturaMod')!;
  const peso: HTMLInputElement = document.querySelector('#pesoMod')!;

  // procurar o aluno pelo nome, se não encontrar, retorna -1, não é case sensitive
  let index = alunos.findIndex(aluno => aluno.getNome().toUpperCase() === nome.value.toUpperCase())?? -1;

  if (index === -1) {
    alert("Aluno não encontrado");
  }else{
    // Atualizar o aluno
    alunos[index] = new Aluno(nome.value, Number(idade.value), Number(altura.value), Number(peso.value));

    // Atualizar a turma
    turma = new Turma("Turma1", alunos);

    // Destruir o gráfico anterior, se existir
    if (grafico) {
      grafico.destruirGrafico();
    }

    // Atualizar o gráfico
    grafico.atualizarGrafico(turma.getNumAlunos(), turma.getMediaIdades(), turma.getMediaAlturas(), turma.getMediaPesos());
  }

  
});

remover.addEventListener('click', () => {
  // criando os elementos dos inputs
  const nome: HTMLInputElement = document.querySelector('#removerAluno')!;

  // procurar o aluno pelo nome, se não encontrar, retorna -1, não é case sensitive
  let index = alunos.findIndex(aluno => aluno.getNome().toUpperCase() === nome.value.toUpperCase())?? -1;

  if (index === -1) {
    alert("Aluno não encontrado");
  }else{
    // remove o aluno do array
    alunos.splice(index, 1);

    // Atualizar a turma
    turma = new Turma("Turma1", alunos);

    // Destruir o gráfico anterior, se existir
    if (grafico) {
      grafico.destruirGrafico();
    }

    // Atualizar o gráfico
    grafico.atualizarGrafico(turma.getNumAlunos(), turma.getMediaIdades(), turma.getMediaAlturas(), turma.getMediaPesos());
  }

});





