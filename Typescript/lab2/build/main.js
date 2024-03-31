"use strict";
let add = document.querySelector('#add');
let modificar = document.querySelector('#modificar');
let remover = document.querySelector('#remover');
class Grafico {
    constructor(nomeTurma) {
        this.nomeTurma = nomeTurma;
        this.chart = null;
        this.atualizarGrafico(0, 0, 0, 0);
    }
    atualizarGrafico(numAlunos, mediaIdades, mediaAlturas, mediaPesos) {
        let ctx = document.getElementById("myBarChart");
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Numeros de Alunos", "Média das Idades", "Médias das Alturas", "Média dos Pesos"],
                datasets: [{
                        label: this.nomeTurma,
                        backgroundColor: "#4e73df",
                        hoverBackgroundColor: "#2e59d9",
                        borderColor: "#4e73df",
                        data: [numAlunos, mediaIdades, mediaAlturas, mediaPesos],
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
    destruirGrafico() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
class Aluno {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.id = 0;
        this.getId = () => this.id;
        this.getNome = () => this.nome;
        this.getIdade = () => this.idade;
        this.getAltura = () => this.altura;
        this.getPeso = () => this.peso;
        this.id++;
    }
}
class Turma {
    constructor(nome, alunos) {
        this.nome = nome;
        this.alunos = alunos;
        this.id = 0;
        this.getId = () => this.id;
        this.getNome = () => this.nome;
        this.getNumAlunos = () => this.alunos.length;
        this.getMediaIdades = () => {
            let soma = 0;
            this.alunos.forEach(aluno => {
                soma += aluno.getIdade();
            });
            return soma / this.getNumAlunos();
        };
        this.getMediaAlturas = () => {
            let soma = 0;
            this.alunos.forEach(aluno => {
                soma += aluno.getAltura();
            });
            return soma / this.getNumAlunos();
        };
        this.getMediaPesos = () => {
            let soma = 0;
            this.alunos.forEach(aluno => {
                soma += aluno.getPeso();
            });
            return soma / this.getNumAlunos();
        };
        this.id++;
    }
}
let turma = new Turma("Turma1", []);
let grafico = new Grafico(turma.getNome());
let alunos = [];
add.addEventListener('click', () => {
    // criando os elementos dos inputs
    const nome = document.querySelector('#nome');
    const idade = document.querySelector('#idade');
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');
    alunos.push(new Aluno(nome.value, Number(idade.value), Number(altura.value), Number(peso.value)));
    turma = new Turma("Turma1", alunos);
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    grafico.atualizarGrafico(turma.getNumAlunos(), turma.getMediaIdades(), turma.getMediaAlturas(), turma.getMediaPesos());
});
modificar.addEventListener('click', () => {
    var _a;
    // criando os elementos dos inputs
    const nome = document.querySelector('#nomeMod');
    const idade = document.querySelector('#idadeMod');
    const altura = document.querySelector('#alturaMod');
    const peso = document.querySelector('#pesoMod');
    // procurar o aluno pelo nome, se não encontrar, retorna -1, não é case sensitive
    let index = (_a = alunos.findIndex(aluno => aluno.getNome().toUpperCase() === nome.value.toUpperCase())) !== null && _a !== void 0 ? _a : -1;
    if (index === -1) {
        alert("Aluno não encontrado");
    }
    else {
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
    var _a;
    // criando os elementos dos inputs
    const nome = document.querySelector('#removerAluno');
    // procurar o aluno pelo nome, se não encontrar, retorna -1, não é case sensitive
    let index = (_a = alunos.findIndex(aluno => aluno.getNome().toUpperCase() === nome.value.toUpperCase())) !== null && _a !== void 0 ? _a : -1;
    if (index === -1) {
        alert("Aluno não encontrado");
    }
    else {
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
