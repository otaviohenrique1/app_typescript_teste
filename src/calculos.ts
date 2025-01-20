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
    126 - 300
    y   - x
    x = (300*y)/126
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem: number = Calculadora.CalculaMedida(126, 300, valorImagem);
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
  let resultadoImagem: number = Calculadora.CalculaMedida(172, 300, valorImagem1);
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
    92 - 300
    y     - x
    x = (300*y)/92
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(92, 300, valorImagem);
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

export function CalculaMedidaT_34_76_Imagem1(valor_c: number) {
  /*
    175 - 250
    y     - x
    x = (250*y)/175
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(175, 250, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-34/76',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaT_34_76_Imagem2(valor_c: number) {
  /*
    260 - 175
    y     - x
    x = (175*y)/260
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(260, 175, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-34/76',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaT_34_85_Imagem1(valor_c: number) {
  /*
    131.5 - 250
    y     - x
    x = (250*y)/131.5
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(131.5, 250, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-34/85',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaT_34_76_Imagem3(valor_c: number) {
  /*
    165 - 175
    y     - x
    x = (175*y)/165
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(165, 175, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-34/76',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_Su_100_Imagem1(valor_c: number) {
  /*
    118 - 250
    y   - x
    x = (250*y)/118
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(118, 250, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Su-100',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaPanhardVBL(valor_c: number) {
  /*
    117 - 200
    y     - x
    x = (200*y)/117
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(117, 200, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'PanhardVBL',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaA27MCromwell(valor_c: number) {
  /*
    182 - 250
    y     - x
    x = (250*y)/182
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(182, 250, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'A27MCromwell',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaA27MCromwellImagem2(valor_c: number) {
  /*
    184 - 182
    y     - x
    x = (182*y)/184
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(184, 182, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'A27MCromwell',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaAMX10RC(valor_c: number) {
  /*
    137 - 300
    y   - x
    x = (300*y)/137
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(137, 300, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'amx-10rc',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaPanhardAML90(valor_c: number) {
  /*
    137 - 300
    y   - x
    x = (300*y)/137
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(137, 300, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'amx-10rc',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaType23frigate(valor_c: number) {
  /*
    69 - 120
    y   - x
    x = (120*y)/69
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(69, 120, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Type23frigate',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaType23frigate2(valor_c: number) {
  /*
    577 - 1003
    y   - x
    x = (1003*y)/577
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(577, 1003, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Type23frigate',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaType23frigate3(valor_c: number) {
  /*
    494 - 1003
    y   - x
    x = (1003*y)/494
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(494, 1003, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Type23frigate',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaType23frigate4(valor_c: number) {
  /*
    577 - 494
    y   - x
    x = (494*y)/577
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(577, 494, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Type23frigate',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaType23frigate5(valor_c: number) {
  /*
    574 - 1003
    y   - x
    x = (1003*y)/574
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(574, 1003, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'Type23frigate',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaTankArduino(valor_c: number) {
  /*
    104 - 337
    y   - x
    x = (337*y)/104
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(104, 337, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'TankArduino',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_T_90_Imagem_1(valor_c: number) {
  /*
    124 - 250
    y   - x
    x = (250*y)/124
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(124, 250, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-90 - Imagem 1',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_T_90_Imagem_2(valor_c: number) {
  /*
    126 - 124
    y   - x
    x = (124*y)/126
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(126, 124, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-90 - Imagem 2',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_T_90_Imagem_3(valor_c: number) {
  /*
    175 - 124
    y   - x
    x = (124*y)/175
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(175, 124, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'T-90 - Imagem 3',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaBismarckClassBattleship(valor_c: number) {
  /*
    424 - 800
    y     - x
    x = (800*y)/424
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(424, 800, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'BismarckClassBattleship',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaTiconderogaClassCruiser(valor_c: number) {
  /*
    342 - 600
    y     - x
    x = (600*y)/342
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(342, 600, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'TiconderogaClassCruiser',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_HMS_Dreadnought_1910_Battleship(valor_c: number) {
  /*
    342 - 700
    y     - x
    x = (700*y)/342
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(342, 700, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'HMS_Dreadnought',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaIowaClassBattleship(valor_c: number) {
  /*
    286 - 800
    y   - x
    x = (800*y)/286
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(286, 800, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'IowaClassBattleship',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_USS_Salt_Lake_City_1944_Heavy_Cruiser(valor_c: number) {
  /*
    288 - 800
    y   - x
    x = (800*y)/288
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(288, 800, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'USS_Salt_Lake_City',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedida_HMS_Lance_1940_Destroyer(valor_c: number) {
  /*
    278 - 700
    y   - x
    x = (700*y)/278
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(278, 700, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'HMS_Lance_1940_Destroyer',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaTarawaClassAmphibiousAssaultShip(valor_c: number) {
  /*
    388 - 700
    y     - x
    x = (700*y)/388
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(388, 700, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'TarawaClassAmphibiousAssaultShip',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaTarawaClassAmphibiousAssaultShip2(valor_c: number) {
  /*
    163 - y
    48  - x
    x = (48*y)/163
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(163, 48, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'TarawaClassAmphibiousAssaultShip',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaTarawaClassAmphibiousAssaultShip3(valor_c: number) {
  /*
    167 - 50
    y   - x
    x = (50*y)/167
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(167, 50, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'TarawaClassAmphibiousAssaultShip',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaArleighBurkeClassDestroyer(valor_c: number) {
  /*
    259 - 700
    y     - x
    x = (700*y)/259
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(259, 700, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'ArleighBurkeClassDestroyer',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaArleighBurkeClassDestroyer2(valor_c: number) {
  /*
    224 - 259
    y     - x
    x = (259*y)/224
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(224, 259, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'ArleighBurkeClassDestroyer2',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaDidoClassLightCruiserImagem1(valor_c: number) {
  /*
    509 - 700
    y   - x
    x = (700*y)/509
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(509, 700, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'DidoClassLightCruiser',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}

export function CalculaMedidaDidoClassLightCruiserImagem2(valor_c: number) {
  /*
    20 - 100
    y   - x
    x = (100*y)/20
    a - b
    c - x
    x = (b*c)/a
  */
  let valorImagem: number = valor_c;
  let resultadoImagem1: number = Calculadora.CalculaMedida(20, 100, valorImagem);
  console.log(Calculadora.FormataCalculo([
    'DidoClassLightCruiser2',
    valorImagem.toString(),
    resultadoImagem1.toFixed(2),
    Math.round(resultadoImagem1).toString()
  ]));
}