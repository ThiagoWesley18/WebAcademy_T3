
type retornoString  = () => string;
type retornoNumber  = () => number;

let addTv = document.getElementById("addTv") as HTMLButtonElement;
let addCelular = document.getElementById("addCelular") as HTMLButtonElement;
let addBike = document.getElementById("addBike") as HTMLButtonElement;
let removeTv = document.getElementById("remTv") as HTMLButtonElement;
let removeCelular = document.getElementById("remCelular") as HTMLButtonElement;
let removeBike = document.getElementById("remBike") as HTMLButtonElement;

class Grafico {
  private chart: Chart | null = null;

  constructor(
    private total: number,
    
  ){
    this.atualizarGrafico(0,0,0,0);
  }

  public atualizarGrafico(total:number,numTv: number, numCelular: number, numBike: number): void{
    this.total = total;
    let ctx: HTMLCanvasElement = document.getElementById("myBarChart") as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Celular", "TV", "Bicicleta"],
        datasets: [{
          label: "Total R$: " + this.total.toString(),
          backgroundColor: "#4e73df",
          hoverBackgroundColor: "#2e59d9",
          borderColor: "#4e73df",
          data: [numTv , numCelular ,numBike],
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

class Tv{
  private static id: number = 0;
  private valor: number = 5400;
  constructor(){
    Tv.id++;
  }

  get getId(): number{
    return Tv.id;
  }
  get getValor(): number{
    return this.valor;
  }
}
class Celular{
  private static id: number = 0;
  private valor: number = 2400;
  constructor(){
    Celular.id++;
  }

  get getId(): number{
    return Celular.id;
  }
  get getValor(): number{
    return this.valor;
  }
}
class Bicicleta{
  private static id: number = 0;
  private valor: number = 1500;
  constructor(){
    Bicicleta.id++;
  }
  get getId(): number{
    return Bicicleta.id;
  }
  get getValor(): number{
    return this.valor;
  }
}

class Carrinho {
  private tv: Tv[] = [];
  private celular: Celular[] = [];
  private bike: Bicicleta[] = [];

  public add<T>(item: T): void {
    if (item instanceof Tv) {
      this.tv.push(item);
    } else if (item instanceof Celular) {
      this.celular.push(item);
    } else if (item instanceof Bicicleta) {
      this.bike.push(item);
    }
  }

  public remover<T>(item: T): void {
    if (item instanceof Tv) {
      this.tv.pop();
    } else if (item instanceof Celular) {
      this.celular.pop();
    } else if (item instanceof Bicicleta) {
      this.bike.pop();
    }
  }

  get getValorTotal(): number {
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

  public getNumTv: retornoNumber = () => this.tv.length;
  public getNumCelular: retornoNumber = () => this.celular.length;
  public getNumBike: retornoNumber = () => this.bike.length;
  
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

