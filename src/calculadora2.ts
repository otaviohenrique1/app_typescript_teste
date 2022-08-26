class Calculadora2 {
  private campoA: number;
  private campoB: number;
  private campoC: number;
  private nome: string;
  private resultado: number;
  private resultadoExpressao: string;

  constructor(
    campoA: number,
    campoB: number,
    campoC: number,
    nome: string
  ) {
    this.campoA = campoA;
    this.campoB = campoB;
    this.campoC = campoC;
    this.nome = nome;
    this.resultado = this.calculaMedida();
    this.resultadoExpressao = this.calculaMedidaExpressao();
  }
  
  private calculaMedida(): number {
    return (this.campoB * this.campoC)/this.campoA;
  }

  private calculaMedidaExpressao(): string {
    return `${this.nome} => ${this.campoC} => ${(this.resultado).toFixed(2)} => ${Math.round(this.resultado)}`;
  }

  getResultado() {
    return this.resultado;
  }

  getResultadoExpressao() {
    return this.resultadoExpressao;
  }
}