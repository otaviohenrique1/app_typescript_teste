import { Calculadora } from "./calculadora";

export function CalculaMedidaUssKelvinImagem1(valor_c: number) {
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
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaFletcherClassDestroyerImagem1(valor_c: number) {
  /*
    225 - x
    600 - y
    x = (600*x)/225
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(225, 600, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'FletcherClassDestroyer',
    valorImagem.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaLeopard2Imagem1(valor_c: number) {
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
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaLeopard2Imagem4_1(valor_c: number) {
  /*
    127 - x
    154 - y
    x = (154*y)/127
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(127, 154, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Leopard2Imagem4_1',
    valorImagem.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaLeopard2Imagem4(valor_c: number) {
  /*
    127 - x1
    154 - y1
    x1 = (154*y1)/127
    154 - x1
    300 - x2
    x2 = (300*x1)/154
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem4: number = Calculadora.CalculaMedida(127, 154, valorImagem);
  let resultadoImagem1: number = Calculadora.CalculaMedida(154, 300, resultadoImagem4);
  console.log(Calculadora.FormataCalculo([
    'Leopard2Imagem4',
    valorImagem.toString(),
    resultadoImagem4.toFixed(2),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaLeopard2Imagem5(valor_c: number) {
  /*
    103 - x1
    154 - y1
    x1 = (154*y1)/103
    154 - x1
    300 - x2
    x2 = (300*x1)/154
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem5: number = Calculadora.CalculaMedida(103, 154, valorImagem);
  let resultadoImagem1: number = Calculadora.CalculaMedida(154, 300, resultadoImagem5);
  console.log(Calculadora.FormataCalculo([
    'Leopard2Imagem5',
    valorImagem.toString(),
    resultadoImagem5.toString(),
    resultadoImagem1.toString(),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaLeopard2Imagem10(valor_c: number) {
  /*
    42 - x1
    73 - y1
    x1 = (73*y1)/42
    154 - x1
    300 - x2
    x2 = (300*x1)/154
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem5: number = Calculadora.CalculaMedida(42, 73, valorImagem);
  let resultadoImagem1: number = Calculadora.CalculaMedida(154, 300, resultadoImagem5);
  console.log(Calculadora.FormataCalculo([
    'Leopard2Imagem5',
    valorImagem.toString(),
    resultadoImagem5.toString(),
    resultadoImagem1.toString(),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaOptimusPrimeCaminhaoImagem1(valor_c: number) {
  /*
    192 - x
    300 - y
    x = (300*x)/192
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(192, 300, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'OptimusPrimeCaminhao',
    valorImagem.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaPanther2(valor_c: number) {
  /*
    151 - 126
    y   - x
    x = (126*y)/151
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem2: number = valor_c;
  let valorImagem1: number = Calculadora.CalculaMedida(151, 126, valorImagem2);
  let resultadoImagem: number = Calculadora.CalculaMedida(126, 200, valorImagem1);
  console.log(Calculadora.FormataCalculo([
    'Panther',
    valorImagem2.toString(),
    valorImagem1.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaPanther(valor_c: number) {
  /*
    126 - 200
    y   - x
    x = (200*y)/120
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(126, 200, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Panther',
    valorImagem.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaJadgpanther2(valor_c: number) {
  /*
    126 - 172
    y   - x
    x = (172*y)/126
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem2: number = valor_c;
  let valorImagem1: number = Calculadora.CalculaMedida(126, 172, valorImagem2);
  let resultadoImagem: number = Calculadora.CalculaMedida(172, 200, valorImagem1);
  console.log(Calculadora.FormataCalculo([
    'Jadgpanther',
    valorImagem2.toString(),
    valorImagem1.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaJadgpanther(valor_c: number) {
  /*
    172 - 200
    y   - x
    x = (200*y)/172
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(172, 200, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Jadgpanther',
    valorImagem.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaBTR80Imagem1(valor_c: number) {
  /*
    159.5 - x
    250   - y
    x = (250*x)/159.5
    a - c
    b - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(159.5, 250, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'BTR-80',
    valorImagem.toString(),
    resultadoImagem.toFixed(2),
    Math.round(resultadoImagem).toString()
  ]));
}

export function CalculaMedidaBTR80Imagem2(valor_c: number) {
  let valorImagem: number = valor_c;
  let resultadoImagem3: number = Calculadora.CalculaMedida(285.5, 148.5, valorImagem);
  let resultadoImagem1: number =
      Calculadora.CalculaMedida(159.5, 250, resultadoImagem3);
  console.log(Calculadora.FormataCalculo([
    'BTR-80',
    valorImagem.toString(),
    resultadoImagem3.toString(),
    Math.round(resultadoImagem3).toString(),
    resultadoImagem1.toString(),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaArdentClassFastFrigate(valor_c: number) {
  /*
    100.4 - 300
    y     - x
    x = (300*y)/100.4
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(100.4, 300, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Ardent-class_fast_frigate',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaMonitorClasseRoberts(valor_c: number) {
  /*
    228.5 - 600
    y     - x
    x = (600*y)/228.5
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(228.5, 600, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Monitor Classe Roberts',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}
