import { Calculadora } from "./calculadora";

export function CalculaMedidaUssKelvinImagem1(valor_c: number): void {
  /*
    160 - x
    300 - y
    x = (300*x)/160
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(160, 300, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'UssKelvin',
    valorImagem.toString(),
    resultadoImagem.toString(),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaLeopard2Imagem1(valor_c: number): void {
  /*
    154 - x
    300 - y
    x = (300*x)/154
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(154, 300, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Leopard2Imagem1',
    valorImagem.toString(),
    resultadoImagem.toString(),
    Math.round(resultadoImagem).toString()
  ]));
}