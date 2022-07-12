export class Calculadora {
  static CalculaMedida(a: number, b: number, c: number): number {
    // a-b
    // c-x
    // x = (b*c)/a
    return ((b * c) / a);
  }

  static CalculaMedidaFormatada(resultado: number): string {
    return resultado.toFixed(2).toString();
  }

  static PerimetroCirculo(valor: number): number {
    return (2 * Math.PI * valor);
  }

  static PerimetroCirculo2(valor: number): string {
    return Math.round((2 * Math.PI * valor)).toFixed(2).toString();
  }

  static Teorema_de_Pitagoras(cateto1: number, cateto2: number): number {
    return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
  }

  static Teorema_de_Pitagoras2(
    cateto1: number = 0,
    cateto2: number = 0,
    hipotenusa: number = 0): number {
    if (hipotenusa == 0) {
      return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
    } else if (cateto1 == 0) {
      return Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2)));
    } else if (cateto2 == 0) {
      return Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2)));
    }
    return 0;
  }

  static Teorema_de_Pitagoras3(cateto1: number, cateto2: number): string {
    return Math.round(Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)))).toFixed(2).toString();
  }

  static Teorema_de_Pitagoras4(cateto1: number, cateto2: number): string {
    return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2))).toFixed(2).toString();
  }

  static FormataCalculo(valor: string[]): string {
    var resultado = valor.join(" -> ");
    return resultado;
  }

  static FormatadorFinal(valor: number, resultado: number, nome_medida: string): string {
    return this.FormataCalculo([
      nome_medida,
      valor.toString(),
      resultado.toString(),
      Math.round(resultado).toString()
    ]);
  }

  static CalculaListaMedidas(map: { nome: string; a: number; b: number; c: number; }[], a: number, b: number): void {
    map.forEach((item) => {
      console.log(Calculadora.FormatadorFinal(item.c, Calculadora.CalculaMedida(item.a, item.b, item.c), item.nome));
    });
  }
}

export function CalculaPerimetroCirculo(valor: number): void {
  let perimetroCirculo: number = Calculadora.PerimetroCirculo(valor);
  let resultadoImagem: string = Math.round(perimetroCirculo).toString();
  console.log(resultadoImagem);
}
