"use strict";
let addTv = document.getElementById("addTv");
let addCelular = document.getElementById("addCelular");
let addBike = document.getElementById("addBike");
let removeTv = document.getElementById("remTv");
let removeCelular = document.getElementById("remCelular");
let removeBike = document.getElementById("remBike");
class Grafico {
    constructor(total) {
        this.total = total;
        this.chart = null;
        this.atualizarGrafico(0, 0, 0, 0);
    }
    atualizarGrafico(total, numTv, numCelular, numBike) {
        this.total = total;
        let ctx = document.getElementById("myBarChart");
        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Celular", "TV", "Bicicleta"],
                datasets: [{
                        label: "Total R$: " + this.total.toString(),
                        backgroundColor: "#4e73df",
                        hoverBackgroundColor: "#2e59d9",
                        borderColor: "#4e73df",
                        data: [numTv, numCelular, numBike],
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
class Tv {
    constructor() {
        this.valor = 5400;
        Tv.id++;
    }
    get getId() {
        return Tv.id;
    }
    get getValor() {
        return this.valor;
    }
}
Tv.id = 0;
class Celular {
    constructor() {
        this.valor = 2400;
        Celular.id++;
    }
    get getId() {
        return Celular.id;
    }
    get getValor() {
        return this.valor;
    }
}
Celular.id = 0;
class Bicicleta {
    constructor() {
        this.valor = 1500;
        Bicicleta.id++;
    }
    get getId() {
        return Bicicleta.id;
    }
    get getValor() {
        return this.valor;
    }
}
Bicicleta.id = 0;
class Carrinho {
    constructor() {
        this.tv = [];
        this.celular = [];
        this.bike = [];
        this.getNumTv = () => this.tv.length;
        this.getNumCelular = () => this.celular.length;
        this.getNumBike = () => this.bike.length;
    }
    add(item) {
        if (item instanceof Tv) {
            this.tv.push(item);
        }
        else if (item instanceof Celular) {
            this.celular.push(item);
        }
        else if (item instanceof Bicicleta) {
            this.bike.push(item);
        }
    }
    remover(item) {
        if (item instanceof Tv) {
            this.tv.pop();
        }
        else if (item instanceof Celular) {
            this.celular.pop();
        }
        else if (item instanceof Bicicleta) {
            this.bike.pop();
        }
    }
    get getValorTotal() {
        let total = 0;
        this.tv.forEach((tv) => {
            total += tv.getValor;
        });
        this.celular.forEach((celular) => {
            total += celular.getValor;
        });
        this.bike.forEach((bike) => {
            total += bike.getValor;
        });
        return total;
    }
}
let carrinho = new Carrinho();
let grafico = new Grafico(0);
addBike.addEventListener("click", () => {
    carrinho.add(new Bicicleta());
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    // Atualizar o gráfico
    grafico.atualizarGrafico(carrinho.getValorTotal, carrinho.getNumTv(), carrinho.getNumCelular(), carrinho.getNumBike());
});
addCelular.addEventListener("click", () => {
    carrinho.add(new Celular());
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    // Atualizar o gráfico
    grafico.atualizarGrafico(carrinho.getValorTotal, carrinho.getNumTv(), carrinho.getNumCelular(), carrinho.getNumBike());
});
addTv.addEventListener("click", () => {
    carrinho.add(new Tv());
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    // Atualizar o gráfico
    grafico.atualizarGrafico(carrinho.getValorTotal, carrinho.getNumTv(), carrinho.getNumCelular(), carrinho.getNumBike());
});
removeTv.addEventListener("click", () => {
    carrinho.remover(new Tv());
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    // Atualizar o gráfico
    grafico.atualizarGrafico(carrinho.getValorTotal, carrinho.getNumTv(), carrinho.getNumCelular(), carrinho.getNumBike());
});
removeCelular.addEventListener("click", () => {
    carrinho.remover(new Celular());
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    // Atualizar o gráfico
    grafico.atualizarGrafico(carrinho.getValorTotal, carrinho.getNumTv(), carrinho.getNumCelular(), carrinho.getNumBike());
});
removeBike.addEventListener("click", () => {
    carrinho.remover(new Bicicleta());
    // Destruir o gráfico anterior, se existir
    if (grafico) {
        grafico.destruirGrafico();
    }
    // Atualizar o gráfico
    grafico.atualizarGrafico(carrinho.getValorTotal, carrinho.getNumTv(), carrinho.getNumCelular(), carrinho.getNumBike());
});
